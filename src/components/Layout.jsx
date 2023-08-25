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
          <Route  path="/home" element= {<Home display={display} setDisplay={setDisplay}  filteredMovies={filteredMovies}/>}/>
          <Route  path="/list" element= {<List/>}/>
          <Route  path="/popular" element= {<Popular/>}/>
        </Routes>

    </div>
  )
}

export default Layout