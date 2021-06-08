import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
});

export const register = (formData) => API.post('/user/register', formData);
export const signin = (formData) => API.post('/user/signin', formData);

export const fetchPosts = () => API.get('/post/getPosts');
export const createPost = (formData) => API.post('/post/createPost', formData);
export const deletePost = (id) => API.delete(`/post/deletePost/${id}`)
