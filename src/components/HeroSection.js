import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="../videos/AdobeStock_471926688_Video_HD_Preview.mov" autoPlay loop muted />  
            <h1>DR. Shohreh Honarbakash</h1>
            <p> MBBS BSc MRCP PhD</p>
            <p></p>
            <p>Barts Health NHS Trust - Cardiology</p>
            <div className="hero-btns">
                <Link to="/Bio">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" to="/Bio"><i className="fa-solid fa-circle-info" /> Bio </Button>
                </Link>
                <Link to="/ContactMe">
                    <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" to="/ContactMe"><i className="fa-solid fa-user-doctor" /> Contact </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;

