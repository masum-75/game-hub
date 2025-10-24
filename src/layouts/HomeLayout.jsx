import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
           <header>
            <Header></Header>
            <Navbar></Navbar>
            </header> 
            <main className="w-11/12 mx-auto my-6">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;