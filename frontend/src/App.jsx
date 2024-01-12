import { useEffect, useState, Route, Routes } from "react";
import "./styles.css"
import axios from "axios";
import background from "./assets/background.jpg";

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])

  function handleClick() {
    alert("Looks like the button works!")
  }

  return (
    <>
      <nav>
        <div className="logo-nav">BON CAFE & <br/> BARBER</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <button className="button">Contact</button>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-text">
          <div className='logo'></div>
        </div>
        
      </section>
      <section id="about">
        <div className="about-text">
          
        </div>
      </section>
    </>
  );
}