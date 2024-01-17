import React from 'react'
import './App.css';
import logo from './assets/img/sweet-zahraa-cute-zahraa.gif';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <h1 style={{marginTop:"20px"}}>JAB WE MET!!</h1>
          <p>IT FELT SOMETHING SPECIAL! SINCE THAT DAY IT HAS BECOME
            <br></br> <span>"Tumse hi din hota hai, surmai shaam atee hai, tumse hi..."</span> </p>
          <h2>We already know how Geet and Aditya end up, Now let's find how Mihir's and Vanshika's story goes on....</h2>
          <h1> WOULD YOU LIKE TO GO OUT WITH ME!?</h1>
          <img src={logo} alt="logo" />
        </header>
        <Link to="/yes">
        <button className="custom-button">
           <span>
           Yesss!!!
            </span>
        </button>
        </Link>
        <button style={{marginLeft:"20px"}} className="custom-button" disabled>
            <span>
            No!!!
            </span>
        </button>
      </div>
      );
    
}

export default Home
