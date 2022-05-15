import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LandingPage from './Containers/LandingPage.js';
import LandingNavbar from './Components/LandingNavbar';
import LoginPage from './Containers/LoginPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/test' element={<LandingNavbar/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
