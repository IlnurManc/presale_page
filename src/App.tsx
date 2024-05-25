import Header from './components/header/Header.jsx'
import Spider from './components/spider/Spider.jsx'
import Presale from './components/presale/Presale.jsx'
import Noteligible from './components/noteligible/Noteligible.jsx'
import data from './data.js'
import { useTonAddress } from '@tonconnect/ui-react';
import React from 'react'

function SuccessWallet(){
  const address = useTonAddress();
  
  const result = data.find((wal: { id: string }) => wal.id == address);
  if (result != null) {
    return <Presale key={result.id}/>;
  }
  return <Noteligible/>
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
