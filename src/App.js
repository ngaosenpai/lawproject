import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './pages/Login/Login';

// import Navbar from './components/Navbar/Navbar'



function App() {
  return (
    <Router>
      <div className="App">
        <Login />
      </div>
    </Router>
  );
}

export default App;
