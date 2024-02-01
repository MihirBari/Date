import React from 'react'
import './App.css';
import logo from './assets/img/sweet-zahraa-cute-zahraa.gif';
import { Link } from 'react-router-dom';

const Home = () => {

  
  let noAttempts = 0;


  function moveNoButton() {
    const button = document.getElementById("no-button");

    if (noAttempts === 0) {
 
      button.style.transform = `translate(180px, 0)`;
    } else if (noAttempts === 1) {
      // Move above the title on the second hover
      button.style.transform = `translate(0, -280px)`;
    } else if (noAttempts === 2) {
      // Run away on the third attempt
      button.style.transform = `translate(2000px, 0)`;
      console.log("No more 'No' button. Title and 'Yes' button are still here.");
    }

    // Increment the attempts counter
    noAttempts++;
  }


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
       
        className="custom-button1"
        id="no-button"
        onMouseOver={moveNoButton}
      >
        <span>No!!!</span>
      </button>
      </div>
      );
    
}

export default Home
