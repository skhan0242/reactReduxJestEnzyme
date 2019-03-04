import React from "react";
import "./styles.scss";
import Logo from "./../../assests/graphics/Logo.png"

const Header = (props) =>{
    return(
        <header className='headerWrapper' data-test='headerWrapper'>
            <div className="wrap">
                <div className="logoWrapper">
                    <img className='logo' src={Logo} alt="logo" data-test='logo' />
                </div>
            </div>
        </header>
    )
}

export default Header;