import {Route, Routes } from "react-router-dom";
import './App.css';
import Home from './home';
import LetsGo from "./letsGo";
import { Projects } from "./Project";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yes" element={<LetsGo />} />
            <Route path="/plan" element={<Projects />} />
            </Routes>
    </div>
  );
}

export default App;
