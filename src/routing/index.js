import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app';
import App from "./app";

const Routes = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
            <App/>
            {/* <PublicRoutes /> */}
        </BrowserRouter>
    )
}

export default Routes;