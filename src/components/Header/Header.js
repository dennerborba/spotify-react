import React, { useEffect } from "react";
import './Header.css';
import smallRight from '../../assets/icons/small-right.png'
import smallLeft from '../../assets/icons/small-left.png'
import search from '../../assets/icons/search.png'
import SearchScript from "../../script";

const Header = () => {
    useEffect(() => {
        SearchScript()
    }, [])
    
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Search" />
                <input id="search-input" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="What do you want to listen to?"
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Sign up</button>
                <button className="login">Log in</button>
            </div>
        </nav>
    )
}

export default Header;