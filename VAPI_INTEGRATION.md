# Vapi Assistant Integration Guide

This guide explains how to add a Vapi voice assistant to your React website, based on the implementation in this portfolio.

## Prerequisites

1.  **Vapi Account**: Sign up at [dashboard.vapi.ai](https://dashboard.vapi.ai).
2.  **Public Key**: Get your Public Key from the Vapi Dashboard.
3.  **Assistant ID**: Create an assistant in Vapi and get its ID.

## Step 1: Install the SDK

Install the Vapi web client SDK in your project:

```bash
npm install @vapi-ai/web
```

## Step 2: Implementation

Here is how to integrate it into a React component (like `App.tsx`).

### 1. Import Dependencies and Define Constants

Add your keys at the top of your file.

```tsx
import { useState, useEffect, useRef } from 'react'

// Replace these with your actual keys
const VAPI_PUBLIC_KEY = 'your-public-key-here'
const ASSISTANT_ID = 'your-assistant-id-here'
```

### 2. State Management

Add state variables to track the connection status and the Vapi instance.

```tsx
function App() {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [vapiReady, setVapiReady] = useState(false)
  const vapiRef = useRef<any>(null)

  // ... rest of component
```

### 3. Initialize Vapi (useEffect)

Use a `useEffect` hook to load the SDK safely. Note the dynamic import and handling for different module formats (CommonJS/ESM), which ensures compatibility with build tools like Vite.

```tsx
  useEffect(() => {
    let mounted = true
    
    const initVapi = async () => {
      try {
        // Dynamic import to handle CommonJS/ESM interop
        const vapiModule: any = await import('@vapi-ai/web')
        
        let VapiClass = vapiModule.default
        // Handle double-wrapped default export if necessary
        if (VapiClass && typeof VapiClass !== 'function' && VapiClass.default) {
          VapiClass = VapiClass.default
        }
        
        if (!mounted || typeof VapiClass !== 'function') return
        
        const vapi = new VapiClass(VAPI_PUBLIC_KEY)
        vapiRef.current = vapi

        // Event listeners for UI updates
        vapi.on('call-start', () => {
          setIsConnecting(false)
          setIsCallActive(true)
        })
        
        vapi.on('call-end', () => {
          setIsCallActive(false)
          setIsConnecting(false)
        })
        
        setVapiReady(true)
      } catch (error) {
        console.error('Failed to initialize Vapi:', error)
      }
    }
    
    initVapi()

    // Cleanup on unmount
    return () => {
      mounted = false
      if (vapiRef.current) {
        vapiRef.current.stop()
      }
    }
  }, [])
```

### 4. Create the Toggle Function

This function handles starting and stopping the call.

```tsx
  const toggleCall = async () => {
    if (!vapiRef.current) return
    
    if (isCallActive) {
      vapiRef.current.stop()
    } else {
      setIsConnecting(true)
      try {
        await vapiRef.current.start(ASSISTANT_ID)
      } catch (error) {
        console.error('Failed to start call:', error)
        setIsConnecting(false)
      }
    }
  }
```

### 5. Add the UI Button

Add a button to your JSX that calls `toggleCall` and reflects the current state.

```tsx
<button
  onClick={toggleCall}
  disabled={isConnecting || !vapiReady}
  style={{
    backgroundColor: isCallActive ? 'red' : 'black',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: isConnecting || !vapiReady ? 'wait' : 'pointer'
  }}
>
  {isCallActive ? (
    'End Call'
  ) : isConnecting ? (
    'Connecting...'
  ) : !vapiReady ? (
    'Loading...'
  ) : (
    'Talk to Assistant'
  )}
</button>
```

## Summary of Key Features

-   **Dynamic Import**: Uses `await import('@vapi-ai/web')` to avoid SSR/build issues.
-   **Event Handling**: Listens for 'call-start' and 'call-end' to update the UI button state.
-   **Cleanup**: Stops the call if the component unmounts.
