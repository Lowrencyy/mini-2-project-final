import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from '../components/Search/Searched';
import Recipe from './Recipe';
import {Route , Routes} from 'react-router-dom';
import AboutUs from './AboutUs';

function Pages() {
  return (
    
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/cuisine/:type' element= {<Cuisine/>}/>
       <Route path='/searched/:search' element={<Searched/>}/>
       <Route path='/recipe/:name' element={<Recipe/>} />
       <Route path='/AboutUs' element={<AboutUs/>}/>
    </Routes>
   
  )
}

export default Pages