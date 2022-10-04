import React from 'react';
import '../../App.css';
import './../../components/pages/Bio.css';
import prizesBg from '../../images/bio/prizes-bg.png';
import prizes from '../../images/bio/prizes.png';
import education from '../../images/bio/education.png';
import educationBg from '../../images/bio/education-bg.png';
import employment from '../../images/bio/employment.png';
import employmentBg from '../../images/bio/employment-bg.png';

function Bio() {
    return (
        <>
        <div className='bio'>
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
                <div className='bio-success-section'>Experience (yrs): <br /> 13</div>
                <div className='bio-success-section'>Publications: <br /> 241</div>
                <div className='bio-success-section'>Prizes: <br /> 5</div>
                <div className='bio-success-section'>Degrees: <br /> 7</div>
            </div>
            <div className='bio-content'>
                <div className='bio-content-cell1'><img class='prizesBg' src={prizesBg}></img><img class='prizes' src={prizes}></img></div>
                <div className='bio-content-cell2'>
                    <h1>Awards:</h1>
                    <p><b>Heart Rhythm Society Young Investigator Winner 2018</b><br />
                    Heart Rhythm Society Scientific Sessions, Boston, USA</p>
                    <br />
                    <p><b>Heart Rhythm Congress Young Investigator Winner 2017</b> <br />
                    British Heart Rhythm Congress, UK</p>
                    <br />
                    <p><b>Abstract selected for prestigious “innovation set to ignite the field of EP” session.</b> <br /> 
                    Heart Rhythm Society Scientific Sessions, 2019</p>
                    <br />
                    <p><b>Best Sudden Cardiac Death Abstract 2019</b> <br />
                    ECAS Congress, Marseille </p>
                    <br />
                    <p><b>Faculty of Medicine Prize- Awarded for overall performance in Finals (top 5).</b><br /> 
                    Imperial College London, 2009  </p>
                </div>
                <div className='bio-content-cell3'>
                    <h1>Qualifications:</h1>                

                    <p><b>PhD 2016-2019</b><br />
                    Queen Mary University of London, November 2019MRCP paces- February 2012</p>
                    <br />
                    <p><b>MRCP part 2- April 2011<br />
                    MRCP part 1- September 2010<br />
                    MBBS Honours 2003-2009</b></p>
                    <br />
                    <p><b>Distinction in Medical Sciences<br />
                    Distinction in Clinical Sciences</b><br />
                    Imperial College London, July 2009</p>
                    <br />
                    <p><b>Intercalated Cardiovascular BSc</b><br />
                    1st Class Honours<br />
                    Imperial College London, September 2006-2007</p>
                    <br />
                    4 A-levels achieved with grade A (Mathematics, Physics, Biology and Chemistry). Thomas Tallis Sixth form school. Kidbrooke, London
                </div>
                <div className='bio-content-cell4'><img class='educationBg' src={educationBg}></img><img class='education' src={education}></img></div>
                <div className='bio-content-cell5'><img class='employmentBg' src={employmentBg}></img><img class='employment' src={employment}></img></div>
                <div className='bio-content-cell6'>
                    <h1>Employment:</h1>

                    <p><b>BHF Clinical Intermediate Fellowship</b><br />
                    Awarded March 2022, awaiting ethics approval</p>
                    <br />
                    <p><b>Post CCT Clinical Fellow in Cardiology and Electrophysiology</b><br />
                    October 2021. Barts Heart Centre, Barts Health NHS trust </p>
                    <br />
                    <p><b>Founder and Chief Technology Officer, Rhythm AI Ltd</b><br />		
                    June 2019 – present. Having invented, patented and published on a technique to map AF called ‘STAR mapping’ I founded a company together with my co-inventors to take STAR forward. This has received £2.2m in funding from Venture Capital and will fund a multi-centre trial. https://rhythm-ai.com/</p>
                    <br />
                    <p><b>British Heart Rhythm Society Multicentre Trial Group</b><br /> 				
                    Board member, fellow representative. October 2020- present</p>
                    <br />
                    <p><b>Honorary Clinical Lecturer at Queen Mary University of London. June 2020- present</b></p>
                    <br />
                    <p><b>Associate Editor of European Heart Journal Case reports. August 2020-present</b>
                    This is a sub-journal of the European Heart Journal focusing on Case Reports.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bio
