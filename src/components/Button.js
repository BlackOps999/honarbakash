import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    //if buttonStyle not provided as a param, default to first STYLES array item i.e. btn-primary
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]; 

    //if buttonSize not provided as a param, default to first SIZES array item i.e. btn-medium
    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES [0];

    return (
        <Link className='btn-mobile' to='/Contact'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};