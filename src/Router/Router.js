import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage";
import ProfilePage from '../pages/ProfilePage'
import IdPage from "../pages/id"


export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/profile/:name" element={<ProfilePage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path="/file/:id" element={<IdPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}