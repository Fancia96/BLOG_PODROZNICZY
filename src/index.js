import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import PostEdit from "./pages/PostEdit";
import Post from "./pages/Post";
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path={"posts"} element={<Posts />}/>
                    <Route exact path={"post/:id"} element={<PostEdit />}/>
                    <Route exact path={"post"} element={<PostEdit />}/>
                    <Route exact path={"view/:id"} element={<Post />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
