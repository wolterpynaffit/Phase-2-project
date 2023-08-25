import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header({ handleSearch, search, handleAudio }) {
  return (
    <div className='navBar'>
      <nav>
        <img
          src={process.env.PUBLIC_URL + '/assets/Netflix_Logo.png'}
          alt="Netflix Logo"
          style={{ height: '2rem' }}
        />
        <Link to="/home">Home</Link>
        <Link to="/list">My List</Link>
        <Link to="/popular">Popular</Link>
        </nav>


        <div className={'search-container'}>
          <input
            onChange={(e) => handleSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search"
            className={'search-input'}
          />
        </div>
        <div >
          <button onClick={handleAudio} className={'icon  audio-container'} >
            <i class="fa-solid fa-music icon"  style={{fontSize: '2.5rem', color: 'red'}}></i>
          </button>
        </div>


  
    </div>
  );
}

export default Header;
