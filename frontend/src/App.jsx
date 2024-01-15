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
      <div class="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
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
        <div className="image"></div>
        <div className="about-text">
          <h1>About Us</h1>
          <h2>Mr. Nguyen</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit eveniet fugit eligendi, tempore assumenda ad error voluptatum, recusandae maxime distinctio eaque labore nostrum! Incidunt repellendus ex nisi esse eum tempore.</p>
          <button className="button-52">Learn More</button>
        </div>
      </section>

      <section id="gallery">
        <div className="panel-cards">
          <span className="card"> </span>
          <span className="card"></span>
          <span className="card"></span>
          <span className="card"></span>
          <span className="card"></span>
        </div>
      </section>

      <section id="services">

      </section>
    </>
  );
}