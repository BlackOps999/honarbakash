import React, {Fragment} from 'react';
import '../../App.css';
import { userContext, useUser} from '../../store/userContext';
import CreatePublication from '../CreatePublication.js';
import ListPublications from '../ListPublications.js';

function Publications() {

    const user5 = useUser();

    return (
        <>
            <div>
                {user5.user.name && 
                    <CreatePublication />
                }
                {console.log('usercontex' && userContext.name)}
                <ListPublications />
            </div>
        </>
    );
}

export default Publications;
