import React from 'react';
import './App.css';
import Header from './components/Header';
import Music from './components/Music';
import Contact from './components/Contact';
import Songs from './components/Player/Songs';
import Navbar from './components/Navbar';
import Login from './components/LoginForm/LoginForm'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      <div className='Music'>
        <Music></Music>
      </div>
      <div className='Songs'>
        <Songs></Songs>
      </div>
      <div className='Contact'>
        <Contact></Contact>
      </div>
      <div className='Login'>
        <Login></Login>
      </div>
    </div>
  )
}
export default App;