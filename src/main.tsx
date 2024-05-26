import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/reset.css"
import "./styles/main.css"
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import WebApp from '@twa-dev/sdk'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <TonConnectUIProvider
          manifestUrl="https://s3.timeweb.com/301e4ceb-a1ef5c23-eed7-4903-86d7-94f30690ac2e/tonconnect/tonconnect.json"
          language="en"
          uiPreferences={{ theme: 'SYSTEM' }}
      >
        <App />
      </TonConnectUIProvider>
  </React.StrictMode>,
)
