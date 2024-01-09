import { useEffect, useState } from "react";
import "./styles.css"
import axios from "axios";

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])

  return(
    <>
      <header>
        <h1 className='logo'>Bon Cafe & Barber</h1>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><button className="cta"><a href='#contact'>Contact</a></button></li>
        </ul>
      </header>

      <section id='home'>
        
      </section>
    </>
  );
  
}