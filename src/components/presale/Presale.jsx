import './presale.css'
import Count from '../count/Count.jsx'
import data from '../../data.js'
import { useState } from 'react'
import { useTonAddress } from '@tonconnect/ui-react';

const Presale = () => {
    const [users, setUser] = useState(data);
    const address = useTonAddress();

    const changeValue = (id, value) => {
        setUser((users)=>{
          return users.map((wallet)=>{
            if (wallet.id === id) {
                if (value > wallet.perwallet) {
                    return {
                        ...wallet,
                        count: wallet.perwallet,
                        priceTotal: Math.round(100 * wallet.perwallet * wallet.price)/100
                    }
                }
                return {
                    ...wallet,
                    count: value,
                    priceTotal: Math.round(100 * value * wallet.price)/100
                }
            }
            return wallet
          })
        })    
      }

      const changeSum = (id, value) => {
        setUser((users)=>{
          return users.map((wallet)=>{
            if (wallet.id === id) {
                return {
                    ...wallet,
                    count: value,
                    priceTotal: Math.round(100 * value * wallet.price)/100
                }
            }
            return wallet
          })
        })    
      }

      const changePerwallet = (id, value) => {
        setUser((users)=>{
          return users.map((wallet)=>{
            if (wallet.id === id) {
                if ((wallet.perwallet - value) == 0) {
                    return {
                        ...wallet,
                        count: 0,
                        perwallet: 0,
                        priceTotal: 0
                    }
                }
                return {
                    ...wallet,
                    count: 1,
                    perwallet: wallet.perwallet - value,
                    priceTotal: wallet.price
                }
            }
            return wallet
          })
        })    
      }
    
    const wallet = users.map((wallet) => {
        if (wallet.id === address) {
          return <Count wallet={wallet} changeValue={changeValue} changeSum = {changeSum} changePerwallet={changePerwallet} key={wallet.id}/>;
        }
    })

    return (  
        <section className="presale">
            <div className="presale__title">
                WL ROUND
            </div>
            <div>{wallet}</div>
            <div className="presale__padding"></div>
        </section>
    );
};
 
export default Presale;