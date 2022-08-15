import React, {useState} from 'react';
import './CreatePublication.css';
import { Button } from './Button';

function CreatePublications() {

    const [article, setArticle] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {article};
            const response = await fetch("http://localhost:8080/api-createpublication", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/Publications";
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className='createpublication-container'>
            <section className="createpublication-addpublication">
                <p className="createpublication-heading">Add Publication</p>
                <div className="input-areas">
                    <form onSubmit={onSubmitForm} method="POST">
                        <input type="text" placeholder={article} onChange={e => setArticle(e.target.value)} className="addpublication-input" />
                        <Button buttonstyle="btn--primary" type="submit" to="">Add</Button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CreatePublications;
