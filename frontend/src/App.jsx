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
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        {users.map(user => <li key={user.id}>{user.email}</li>)}
      </ul>
    </>
  );
  
}