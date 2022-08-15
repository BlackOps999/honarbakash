import React, {Fragment} from 'react';
import '../../App.css';

import CreatePublication from '../CreatePublication.js';
import ListPublications from '../ListPublications.js';

function Publications() {
    return (
        <>
            <div>
                <CreatePublication />
                <ListPublications />
            </div>
        </>
    );
}

export default Publications;
