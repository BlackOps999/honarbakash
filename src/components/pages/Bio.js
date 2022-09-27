import React from 'react';
import '../../App.css';
import './../../components/pages/Bio.css';


function Bio() {
    return (
        <>
            <div className='bio-container'>
                <div className='bio-intro-items'>
                    <h1 className='h1-bio-intro'>“My experience and research is here to help you reach your life goals. The breadth and diversity of my experience make we well positioned to achieve this.
                    </h1>
                    <h2>Feel free to read through my experience below, or reachout to discuss. From day1, all my patients are managed with the upmost privacy, focus and dedication.”
                    </h2>
                    <h3>Leader and innovator within UK Cardiology - DR Shohreh Honarbakhsh
                    </h3>
                </div>
                <div className='bio-intro-items'></div>
            </div>
            <div className='bio-success-bar'>
                <div className='bio-success-image'><i class="fa-solid fa-user-doctor fa-2xl"></i></div>
                <div className='bio-success-image'><i class="fa-solid fa-book-medical fa-2xl"></i></div>
                <div className='bio-success-image'><i class="fa-solid fa-award fa-2xl"></i></div>
                <div className='bio-success-image'><i class="fa-solid fa-graduation-cap fa-2xl"></i></div>
                <div className='bio-success-image'><i class="fa-solid fa-heart-pulse fa-2xl"></i></div>
                <div className='bio-success-section'>Experience (yrs): <br /> 13</div>
                <div className='bio-success-section'>Publications: <br /> 241</div>
                <div className='bio-success-section'>Prizes: <br /> 5</div>
                <div className='bio-success-section'>Degrees: <br /> 7</div>
                <div className='bio-success-section'>Successful Ops: <br /> 2.5k</div>
            </div>
        </>
    )
}

export default Bio
