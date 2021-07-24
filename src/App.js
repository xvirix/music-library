<<<<<<< HEAD
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
=======
import Home from './components/Home/home';
import Navigation from './components/Navigation/navigation';
import Footer from './components/Header/Header';



function App() {
  return (
    <div>
      <nav>
        <Navigation/>
      </nav>

      <main>
        <Home/>
      </main>
     
      <footer>
        <Footer/>
      </footer>

    </div> 
>>>>>>> b60144cc0bcc7e9079853631f2495e85efc22659
  );
}

export default App;