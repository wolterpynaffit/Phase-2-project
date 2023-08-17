import React from 'react'
import { Link, useLoaderData, Route,  Routes } from 'react-router-dom'
import LandingPage from './LandingPage';
import List from './List';
import Popular from './Popular';
import Home from './Home';

const Layout = ({display, setDisplay, filteredMovies}) => {
  return (
    <div>


        <Routes>
          <Route  path="/" element= {<LandingPage/>}/>
          <Route  path="/list" element= {<List/>}/>
          <Route  path="/popular" element= {<Popular/>}/>
        </Routes>
{/* 
        <Home  display={display} setDisplay={setDisplay}  filteredMovies={filteredMovies}/> */}
    </div>
  )
}

export default Layout