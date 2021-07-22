import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Music extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='Music'>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>

        </div> 
            </Fade>);
    }
}
 
export default Music;