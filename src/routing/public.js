import React from 'react';
import { Route, Routes } from 'react-router';
import Home from "../pages/Home";
// import Seller from "../pages/Seller";
// import Admin from '../pages/Admin';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={<Home />} />
           
        </Routes>
    )
}

export default PublicRoutes;