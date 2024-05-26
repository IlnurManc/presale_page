import Header from './components/header/Header.jsx'
import Spider from './components/spider/Spider.jsx'
import Presale from './components/presale/Presale.jsx'
import Noteligible from './components/noteligible/Noteligible.jsx'
import Connect from './components/connect/Connect.jsx'
import data from './data.js'
import { useTonAddress } from '@tonconnect/ui-react';
import React from 'react'

function SuccessWallet(){
  const address = useTonAddress();
  console.log(address)
  
  const result = data.find((wal: { id: string }) => wal.id == address);
  if (result != null) {
    return <Presale key={result.id}/>;
  }
  if (address) {
    return <Noteligible/>
  }
  if (!address) {
    return <Connect/>
  }
}

function App() {
  return (
      <div>
          <Header />
          <Spider />
          <SuccessWallet />
      </div>
      
  )
}

export default App
