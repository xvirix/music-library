import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data'


class Header extends Component {
    state = {}

    render() {
        return (<div>
      
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href="https://www.billboard.com/charts/hot-100" rel="noopener noreferrer" >Top Music</a></button>
                    <button><a href="https://www.chosic.com/random-songs-generator-with-links-to-spotify-and-youtube/" rel="noopener noreferrer" >Browse</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;