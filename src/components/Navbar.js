import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (<nav>
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="Header"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Support</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="Songs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Listen to Music</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="Login"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Sign Up/Login</Link></li>
                    <li><Link
                    className='link'
                    activeClass="active"
                    to="Rej"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ></Link></li>
            </ul>
        </nav> );
    }
}
 
export default Navbar;