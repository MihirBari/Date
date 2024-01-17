import React, { useState } from 'react'
import './App.css';
import logo from './assets/img/sweet-zahraa-cute-zahraa.gif';
import { Link } from 'react-router-dom';

const Home = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0 });

  const handleNoButtonClick = () => {
    // Move the "No!!!" button to a random position
    const left = Math.random() * (window.innerWidth - 200); // Adjust 200 based on the button width
    const top = Math.random() * (window.innerHeight - 50); // Adjust 50 based on the button height
    setNoButtonPosition({ left, top });
  };
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
        <button
        style={{ marginLeft: "20px", position: "absolute", ...noButtonPosition }}
        className="custom-button1"
        onClick={handleNoButtonClick}
      >
        <span>No!!!</span>
      </button>
      </div>
      );
    
}

export default Home
