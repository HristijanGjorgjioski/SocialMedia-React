import React, { useContext, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core';

import Post from './Post/Post'
import { MainContext } from '../../../context/context';

const Posts = ({ setCurrentId }) => {
    const { postsState, getPosts } = useContext(MainContext);
    
    useEffect(() => {
        getPosts();
    }, []);

    return (
                <div>
                    {!postsState.length ? <CircularProgress /> : (
                        postsState.map((post, index) => (
                            <div key={index}>
                                <Post post={post} setCurrentId={setCurrentId} />
                            </div>
                        ))
                    )}
                </div>
    )
}

export default Posts;
