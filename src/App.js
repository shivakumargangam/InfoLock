import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LandingPage from './Containers/LandingPage.js';
import LandingNavbar from './Components/LandingNavbar';
import LoginPage from './Containers/LoginPage';
import SignupPage from './Containers/SignupPage';
import Dashboard from './Containers/Dashboard';
import Notepage from './Containers/NotePage';
import FAQ from './Components/FAQ';
import About from './Components/About';
import { useState } from 'react';
function App() {
  let [notes,setNotes]=useState("");
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/dashboard' element={<Dashboard setNotes={setNotes}/>}/>
          <Route path='/notepage' element={<Notepage notes={notes}/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
