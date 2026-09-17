import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

function App() {

  return (
    <div className="App">
      <Header />
      <Container/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
