import React, { createContext, useReducer, useState } from 'react';
import userContextReducer from './userContextReducer';

import * as api from '../api/index';

const initialState = [];
const postsState = [];

export const MainContext = createContext(initialState);

// Main Provider
export const Provider = ({ children }) => {
    const [users, dispatch] = useReducer(userContextReducer, initialState);
    const [posts, setPosts] = useState(postsState);

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
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createPost = async (post) => {
        try {
            return await api.createPost(post);
        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async (id) => {
        try {
            await api.deletePost(id);
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
