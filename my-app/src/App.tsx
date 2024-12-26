import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AllRoutes from './routers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
