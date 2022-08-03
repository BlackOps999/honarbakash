import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="../videos/AdobeStock_471926688_Video_HD_Preview.mov" autoPlay loop muted />  
            <h1>Doctor Sherry Awaits</h1>
            <p>Get intouch</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" to="/Bio"><i class="fa-solid fa-circle-info" /> Bio </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" to="/ContactMe"><i class="fa-solid fa-user-doctor" /> Contact </Button>
            </div>
        </div>
    );
}

export default HeroSection;

