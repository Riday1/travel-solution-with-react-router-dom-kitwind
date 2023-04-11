import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Footer2 from './Footer2';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer2 />
        </div>
    );
};

export default Main;