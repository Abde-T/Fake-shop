import React from 'react';
import Categories from '../component/Categories';
import Feautured from '../component/Feautured';
import Footer from '../component/Footer';
import Info from '../component/Info';
import Landing from '../component/Landing';
import Nav from '../component/Nav';

function home() {
    return (
        <>
       <Landing/>
       <Info/>
       <Categories/>
       <Feautured/>
        </>
    );
}

export default home;