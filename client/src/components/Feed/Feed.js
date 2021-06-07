import React, { useState } from 'react';

import Form from './Form/Form.js';
import Posts from './Posts/Posts.js';

const Feed = () => {
    const [currentId, setCurrentId] = useState(0);

    return (
        <div>
            <Form />
            <Posts />
        </div>
    )
}

export default Feed
