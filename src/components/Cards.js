import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image9 from '../images/img-9.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-4.jpg';
import image5 from '../images/img-5.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out my bio</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image9}
                            text="Have an acute issue, take a look at my specialities"
                            label="Services"
                            path="/Services"
                        />
                        <CardItem
                            src={image2}
                            text="Passionate about research and furthering our remedies, checkout my publications"
                            label="Publications"
                            path="/Publications"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image3}
                            text="Want to know more about me, see my bio"
                            label="Bio"
                            path="/Bio"
                        />
                        <CardItem
                            src={image4}
                            text="Learn how my PHD research founded Rhythm-AI.com"
                            label="RhythmAI"
                            path="/RhythmAI"
                        />
                        <CardItem
                            src={image5}
                            text="Have a question, get in touch"
                            label="ContactMe"
                            path="/ContactMe"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards