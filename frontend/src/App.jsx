import { useEffect, useState, Route, Routes } from "react";
import "./styles.css"
import axios from "axios";

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
      <header>
        <h1 className='logo'>Bon Cafe & Barber</h1>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#socials'>Socials</a></li>
          <li><button className="cta" onClick={handleClick}>Contact</button></li>
        </ul>
      </header>

      <section id='hero'>
        <div className="heading-text">
          <h1>Best Coffee & Haircuts in Town</h1>
          <button className="cta">Book Now</button>
        </div>
      </section>

      <section id='about'>
        <div className="about-text">
          <h2>About Us</h2>
        </div>
      </section>

      <section id="services">
        <div className="services-text">
          <h2>Our Services</h2>
        </div>
      </section>

    </>
  );

}