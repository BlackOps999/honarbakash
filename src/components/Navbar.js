import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Authentication from './Authentication';
import {userContext, useUser} from '../store/userContext';

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

    useEffect(() => {
        showButton();
    }, []);

    const user5 = useUser();

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
                        <Link className="nav-links" to="/Bio" onClick={closeMobileMenu}>Bio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/Publications" onClick={closeMobileMenu}>Publications</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/Services" onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li>
                        <Link className="nav-links-mobile" to="/ContactMe" onClick={closeMobileMenu}>Contact Me</Link>
                    </li>
                </ul>
                <Link to="/ContactMe">
                    {button && <Button buttonStyle='btn--outline' to="/ContactMe">Contact Me</Button>}
                </Link>
                <Authentication />
                NAVBARUser Name: {user5.user.name}

            </nav>
        </>
    );
}

export default Navbar;