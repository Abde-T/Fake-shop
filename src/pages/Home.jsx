import React from 'react';
import Categories from '../component/Categories';
import Feautured from '../component/Feautured';
import Info from '../component/Info';
import Landing from '../component/Landing';


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