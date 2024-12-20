import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDRjZGIwNTIwZmQyNDFkODE0OTk2ODUyNDhmNGFjYSIsIm5iZiI6MTcyMjg4NTEwOS4yMjcsInN1YiI6IjY2YjEyM2Y1NGU2ZDJiZmM2NGViNzhjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D8t_mDJde-7ZIk9hj-vIJ-BkUBWnvy0H4gdDz6Oc94g`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
