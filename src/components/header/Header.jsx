import './header.css'
import logoImg from './../../img/logo.png'
import {TonConnectButton} from "@tonconnect/ui-react";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo" />
                    </div>
                    <div className="header__nav">
                        <TonConnectButton />
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header;