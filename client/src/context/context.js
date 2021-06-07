import React, { createContext, useReducer } from 'react';
import userContextReducer from './userContextReducer';

import * as api from '../api/index';
import postContext from './postContextReducer';

const initialState = [];
const postsState = [];

export const MainContext = createContext(initialState);

// Main Provider
export const Provider = ({ children }) => {
    const [users, dispatch] = useReducer(userContextReducer, initialState);
    const [posts, dispatchPost] = useReducer(postContext, postsState);

    // AUTH ACTIONS
    const createUser = async (user, router) => {
        const createdUser = await api.register(user);
        dispatch({ type: 'AUTH', data: createdUser });
        router.push('/');
    };

    const loginUser = async (user, router) => {
        const loggedUser = await api.signin(user);
        dispatch({ type: 'AUTH', data: loggedUser });
        router.push('/');
    };

    const logout = (router) => {
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    };
    // END AUTH

    // POST ACTIONS
    const getPosts = async () => {
        try {
            const { data } = await api.getPosts();
            postsState.push(data);
            dispatchPost({ type: 'GET_POSTS', payload: data })
        } catch (error) {
            console.log(error);
        }
    };

    const createPost = async (post) => {
        try {
            const createdPost = await api.createPost(post);
            dispatchPost({ type: 'CREATE_POST', createdPost });   
        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async (id) => {
        try {
            await api.deletePost(id);
            dispatchPost({ type: 'DELETE_POST', payload: id });
            console.log(id, '  -- idddd')
        } catch (error) {
            console.log(error);
        }
    }
    // END POSTS

    return (
        <MainContext.Provider value={{
            users,
            createUser,
            loginUser,
            logout,
            getPosts,
            posts,
            postsState,
            createPost,
            deletePost
        }}>
            {children}
        </MainContext.Provider>
    );
};
