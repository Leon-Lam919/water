// App.tsx
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Water from './Components/Water';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul className = 'nav-menu'>
          <li className='active'><Link to="/Components/Home" >Home</Link></li>
          <li><Link to ="/Components/About">About</Link></li>
          <li><Link to = "/Components/Water">Water</Link></li>
        </ul>
      </nav>
      <Routes>
      <Route>
          <Route path="/" element={<Home/>}/>
          <Route path='/Components/Water' element={<Water/>}/>
          <Route path='/Components/About' element={<About/>}/>
          <Route path='/Components/Home' element={<Home/>}/>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;