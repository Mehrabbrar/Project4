import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './elements/Login';
import Dashboard from './elements/Dashboard';
import Create account from './elements/create account';
import './App.css';
function App() {
    return (
        <>
          <Router>
            <Routes>
              <Route path="/login" elements={<Login />} />
              <Route path="/*" elements={<Dashboard />} />
              <Route path="/create account" elements={<create account />} />
            </Routes>
          </Router>
        </>
      );
    }
    
    export default App;