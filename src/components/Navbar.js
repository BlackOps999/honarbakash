import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    //whenever screen resizes, review screen size and show or hide the button
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Sherry Honar <i className="fa-solid fa-stethoscope" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-links" to="/" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/bio" onClick={closeMobileMenu}>Bio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/publications" onClick={closeMobileMenu}>Publications</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/services" onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li>
                        <Link className="nav-links-mobile" to="/contactme" onClick={closeMobileMenu}>Contact Me</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
            </nav>
        </>
    );
}

export default Navbar;