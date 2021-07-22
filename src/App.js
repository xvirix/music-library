import React from 'react';
import './App.css';
import Header from './components/Header';
import Music from './components/Music';
import Contact from './components/Contact';
import Card from './components/Card';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      <div className='Card'>
        <Card></Card>
      </div>
      <div className='Music'>
        <Music></Music>
      </div>
      <div className='Contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;