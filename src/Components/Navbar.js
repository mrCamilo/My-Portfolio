import React from 'react'

function Navbar() {
    return (
        <header id="home">
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper cyan darken-1">
                        <a href="#!" className="brand-logo left">Manuel Camilo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact Me</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar