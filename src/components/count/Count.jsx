import './count.css'
import {SendTx} from "../sendTransaction/SendTx";

const Count = ({wallet, changeValue, changeSum, changePerwallet}) => {
    const {count, price, priceTotal, perwallet, id} = wallet;
    return (  
        <div>
            <div className="count__price">
                {price} TON
            </div>
            <div className="count__perwallet">
                {perwallet} PER WALLET
            </div>
            <div className="count__choose">
                NUMBER OF NFT TO BE PURSHASED
            </div>
            <div className="count__price">
                TOTAL: {priceTotal} TON
            </div>
            <div className="count__row">
                <div className="count__inputbox">
                    <input onChange={(e)=>{changeValue(id, +e.target.value)}} type='number' className='count__input' min='1' max={perwallet} value={count} />
                </div>
                <div className="count__button">
                    <button onClick={()=>{changeSum(id, perwallet)}}>MAX {perwallet}</button>
                </div>
            </div>
            <div><SendTx priceTotal={priceTotal} changePerwallet={changePerwallet} id={id} count={count}/></div>
        </div>
    );
}
 
export default Count;