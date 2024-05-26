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
          walletsListConfiguration={{
            includeWallets: [
              {
                "appName": "telegram-wallet",
                "name": "Wallet",
                "imageUrl": "https://wallet.tg/images/logo-288.png",
                "aboutUrl": "https://wallet.tg/",
                "universalLink": "https://t.me/wallet?attach=wallet",
                "bridgeUrl": "https://bridge.ton.space/bridge",
                "platforms": ["ios", "android", "macos", "windows", "linux"]
              },
              {
                "appName": "tonkeeper",
                "name": "Tonkeeper",
                "imageUrl": "https://tonkeeper.com/assets/tonconnect-icon.png",
                "tondns": "tonkeeper.ton",
                "aboutUrl": "https://tonkeeper.com",
                "universalLink": "https://app.tonkeeper.com/ton-connect",
                "deepLink": "tonkeeper-tc://",
                "bridgeUrl": "https://bridge.tonapi.io/bridge",
                "platforms": ["ios", "android", "chrome", "firefox", "macos"]
              }
            ]
          }}
      >
        <App />
      </TonConnectUIProvider>
  </React.StrictMode>,
)
