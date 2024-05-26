import './connect.css'
import {useTonWallet, useTonConnectUI} from "@tonconnect/ui-react";
import {TonConnectButton} from "@tonconnect/ui-react";

const Connect = () => {
    const [tonConnectUI] = useTonConnectUI();
    const wallet = useTonWallet();
    const onClick = async () => {
        if (!wallet) {
            tonConnectUI.connectWallet();
        }}
    return (  
        <section className="connect">
            <button className="connect__button" onClick={onClick}>
                Connect Wallet
            </button>
        </section>
    );
};
 
export default Connect;