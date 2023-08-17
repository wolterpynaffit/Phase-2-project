import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header({ handleSearch, search, handleAudio }) {
  return (
    <div>
      <nav className={'navBar'}>
        <img
          src={process.env.PUBLIC_URL + '/assets/Netflix_Logo.png'}
          alt="Netflix Logo"
          style={{ height: '2rem' }}
        />
        <Link to="/home">Home</Link>
        <Link to="/list">My List</Link>
        <Link to="/popular">Popular</Link>
        <div className={'search-container'}>
          <input
            onChange={(e) => handleSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search"
            className={'search-input'}
          />
        </div>
        <div className={'audio-container'}>
          <button onClick={handleAudio} className={'icon'}>
            <i class="fa-solid fa-music icon"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
