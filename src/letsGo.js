import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import logo from './assets/img/mochi-peachcat-cute-cat.gif';
import { Link } from 'react-router-dom';

const LetsGo = () => {
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const confettiTimeout = setTimeout(() => {
      setConfettiActive(false);
    }, 5000);

    return () => {
      clearTimeout(confettiTimeout);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginTop: '120px' }}> YAYYY!! Lets Go!!</h1>
        <img src={logo} alt="logo" />
      </header>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={confettiActive ? 200 : 0}
      />
      <Link to="/plan">
        <button className="custom-button">
           <span>
           Lets Plan
            </span>
        </button>
        </Link>
    </div>
  );
};

export default LetsGo;
