import './connect.css'
import {TonConnectButton} from "@tonconnect/ui-react";

const Connect = () => {
    return (  
        /*<section className="connect">
            <div className="connect__title">
                Connect your wallet
            </div>
        </section>*/
        <section className="connect">
            <button className="connect__button" >
                Connect Wallet
            </button>
        </section>
    );
};
 
export default Connect;