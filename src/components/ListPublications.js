import React, {useState, useEffect} from 'react';
import { userContext, useUser} from '../store/userContext';
import { Button } from './Button';
import EditPublication from "./EditPublication";

function ListPublications() {

    const [publications, setPublications] = useState([]);
    const [article, setArticle] = useState("");

    const user = useUser();

    //ADD publication
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {article};
            const response = await fetch("/api-createpublication", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            getPublications();

            //window.location.href = "/Publications";
            //console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    //DELETE publication functions
    const deletePublication = async (id) => {
        try {
            const deletePublication = await fetch(`/api-deletepublications/${id}`, {method: "DELETE"});
            
            console.log(deletePublication);

            //refresh state to exclude deleted item, DOM is then updated to remove deleted item
            setPublications(publications.filter(publication => publication.pub_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    //get publications ALL
    const getPublications = async () => {
        try {
            const response = await fetch("/api-getpublications");
            const jsonData = await response.json();

            setPublications(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    //the arguement means only do 1 request, avoid doing lots of non required requests whilst page open
    useEffect(() => {
        getPublications();
    }, []);


    return(
        <>
        {user.user.name &&
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
        }
        <div className='listpublication-container'>
            <section className="listpublication">
            <p className="listpublication-heading">List Publications</p>
            <table className='table mt-5 text-center'>
                <thead>
                    <tr>
                        <th>Article</th>
                        {user.user.name &&
                            <th>Edit</th>
                        }
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {publications.map(publication => (
                        <tr key={publication.pub_id}>
                            <td>{publication.article}</td>
                            {user.user.name && 
                                <td><EditPublication publication={publication} publicationState={publications} setPublicationsState={setPublications} /></td>
                            }
                                <td><Button buttonstyle="btn--primary" onClick={() => deletePublication(publication.pub_id)}>Delete</Button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            </section>
        </div>
        </>
    );
};

export default ListPublications;