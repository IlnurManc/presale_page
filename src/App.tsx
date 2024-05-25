//import {TonConnectButton} from "@tonconnect/ui-react";
//import {AddressInfo} from "./AddressInfo";
//import {Settings} from "./Settings";
//import {BackendTokenContext} from "./BackendTokenContext";
//import {useState} from "react";
//import {SendTx} from "./SendTx";
//import {BackendDemoApi} from "./BackendDemoApi";
import Header from './components/header/Header.jsx'
import Spider from './components/spider/Spider.jsx'
import Presale from './components/presale/Presale.jsx'
import Noteligible from './components/noteligible/Noteligible.jsx'
import data from './data.js'
//import { useState } from 'react'
import { useTonAddress } from '@tonconnect/ui-react';

function SuccessWallet(){
  const address = useTonAddress();
  
  const result = data.find((wal: { id: string }) => wal.id == address);
  if (result != null) {
    return <Presale key={result.id}/>;
  }
  return <Noteligible/>
}

function App() {

  /*const address = useTonAddress();

  const wallets = users.map((wallet) => {
        if (wallet.id === address) {
          return <Presale wallet={wallet} key={wallet.id}/>;
        }
    })*/
    
  //const [token, setToken] = useState<string | null>(null);

  return (
      //<BackendTokenContext.Provider value={{token, setToken}}>
      //  <div>
      //    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
      //      <Settings />
      //      <TonConnectButton />
      //    </header>
      //      <SendTx />
      //  </div>
      //</BackendTokenContext.Provider>
      <div>
          <Header />
          <Spider />
          <SuccessWallet />
      </div>
      
  )
}
//<div style={{ height: '140px' }}>
//                <AddressInfo />
//                <WalletInfo />
//            </div>
//<BackendDemoApi />


export default App
