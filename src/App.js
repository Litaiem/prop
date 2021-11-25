import { useState } from 'react';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const[users,setUsers]=useState([
    { fullname:"Med Gabsi",bio:"celeb",profession:"prof"},
    { fullname:"Ahmed Gabsi",bio:"celeb",profession:"Ingenieur"},
    { fullname:"Ali Gabsi",bio:"celeb",profession:"prof"},
  ])
  return (
    <div className="App">
    <Profile users={users}/>
     
    </div>
  );
}

export default App;
