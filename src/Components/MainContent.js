import React from 'react'

function MainContent() {
    return <main className="mainContainer">
        <div className="container" id="about">
            <div className="section">
                <h5>About Me</h5>
                <p>My name is Manuel Camilo and I am a 23 year old developer from New Jersey. I graduated from Ramapo
                    College of NJ in 2019 with a major in Economics and a minor in Literature then earned a
                    certification from the Rutgers Coding Bootcamp in December 2019.
            </p>
            </div>
            <div className="divider" id="projects"></div>
            <div className="section">
                <h5>Projects</h5>
                <ul>
                    <li><a href="https://github.com/mrCamilo/Git-Clash">Git Clash</a></li>
                    <li><a href="https://github.com/mrCamilo/Face-Fortune">Face Fortune</a></li>
                </ul>
            </div>
            <div className="divider" id="contact"></div>
            <div className="section">
                <h5>Contact Me!</h5>
                <p className="wordbreak">       
                <a class="github-button" href="https://github.com/mrCamilo" aria-label="Follow @mrCamilo on GitHub">Follow @mrCamilo</a></p>
                <p>Email: mcamilo@ramapo.edu</p>
            </div>
        </div>
    </main>
}

export default MainContent