import React from 'react'

function Navbar() {
    return (
        <header>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper cyan darken-1">
                        <a href="#!" className="brand-logo left">Manuel Camilo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">About Me</a></li>
                            <li><a href="badges.html">Projects</a></li>
                            <li><a href="badges.html">Contact Me</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar