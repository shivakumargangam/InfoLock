import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LandingPage from './Containers/LandingPage.js';
import LandingNavbar from './Components/LandingNavbar';
import LoginPage from './Containers/LoginPage';
import SignupPage from './Containers/SignupPage';
import Dashboard from './Containers/Dashboard';
import Notepage from './Containers/NotePage';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/test' element={<LandingNavbar/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/notepage' element={<Notepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
