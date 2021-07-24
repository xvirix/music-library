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
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Support</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Download</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Sign Up</Link></li>
                    <li><Link
                    className='link'
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Log in</Link></li>
            </ul>
        </nav> );
    }
}
 
export default Navbar;