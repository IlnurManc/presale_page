import {useTonWallet, useIsConnectionRestored, useTonConnectUI} from "@tonconnect/ui-react";
import {useState} from "react";
import './sendtx.css'
import React from "react";
//import {Settings} from "../../Settings";

export const SendTx = ({priceTotal, changePerwallet, id, count}) => {
    const isConnectionRestored = useIsConnectionRestored();
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    const [txInProgress, setTxInProgress] = useState(false);


    let content: string;
    switch (true) {
        case !isConnectionRestored:
            content = 'Loading...';
            break;
        case txInProgress:
            content = 'Tx in progress';
            break;
        case !!wallet:
            content = 'Send transaction';
            break;
        default:
        case !wallet:
            content = 'Connect Wallet';
            break;
    }

    const onClick = async () => {
        if (!wallet) {
            tonConnectUI.connectWallet();
        } else {
            setTxInProgress(true)
            try {
                await tonConnectUI.sendTransaction({
                    validUntil: Math.floor(Date.now() / 1000) + 360,
                    messages: [
                        {
                            amount: (priceTotal*1000000000).toString(),
                            address: '0:049e6ad8f05f90eb01808a25f08ca28efb2b3d57cbfba12617246c823c914c1a'
                        }
                    ]
                });
                changePerwallet(id,count);
            } catch (e) {
                console.log(e);
            }
            setTxInProgress(false)
        }
    }

    return <button className="sendtx" disabled={!isConnectionRestored || txInProgress || count == 0} onClick={onClick}>
        {content}
    </button>
}
