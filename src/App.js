// App.js
import './App.css';
import React from 'react';
import Nav from './comp/Nav';
import Main from './comp/Main';
import Footer from './comp/Footer';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Main />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;