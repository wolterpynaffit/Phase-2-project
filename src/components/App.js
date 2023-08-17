import Header from './Header';
import { Outlet } from 'react-router-dom';
import './App.css'
import Layout from './Layout';
import { useState, useEffect } from 'react';


function App() {


  const [display, setDisplay] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setDisplay(data))
  },[])


   function handleAudio(){
    const audioElement = new Audio('http://localhost:3000/assets/nouveau-jingle-netflix.mp3');
    audioElement.play();

  }; 


/*--------------------- THIS WILL FILTER THE MOVIE -----------------------------*/
const [search, setSearch] = useState('')

function handleSearch(input){
setSearch(input)
}
const filteredMovies= display.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))

  
  return (


    <div className="App bg-dark">
      <Header handleSearch={handleSearch} search={search}  handleAudio={handleAudio}/>
      <Layout filteredMovies={filteredMovies} display={display} setDisplay={setDisplay}/>
      <Outlet/>

    </div>


  );
}

export default App;
