import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import { THEME } from '@tonconnect/ui';
import App from './App.tsx'
import "./styles/reset.css"
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <TonConnectUIProvider
          manifestUrl="https://s3.timeweb.com/301e4ceb-a1ef5c23-eed7-4903-86d7-94f30690ac2e/tonconnect/tonconnect.json"
          language="en"
          uiPreferences={{ theme: THEME.LIGHT }}
      >
        <App />
      </TonConnectUIProvider>
  </BrowserRouter>
)
