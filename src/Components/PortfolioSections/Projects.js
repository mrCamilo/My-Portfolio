import React from 'react'

function Projects() {
    return (<div className="row section">
        <h5>Projects</h5>
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <a href="https://github.com/mrCamilo/Face-Fortune"><img alt="Face Fortune" src={'https://camo.githubusercontent.com/137f0af60d7f3eee2c6e5b6b04909aa33765cdec/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f544b6a726f397239706636596b68505362702f67697068792e676966'}></img></a>
                    
                </div>
                <div className="card-content blue lighten-3">
                    <p style={{fontWeight: 'bold'}}>Face Fortune</p>
                    <br/>
                    <p>Detect and analyze human faces within the image that you provided to recieve a fortune telling.</p>
                </div>
            </div>
        </div>
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <a href="https://github.com/mrCamilo/Git-Clash"><img alt="Git Clash" src={'https://i.imgur.com/u69UauS.png'}></img></a>
                    
                </div>
                <div className="card-content blue lighten-3">
                    <p style={{fontWeight: 'bold'}}>Git Clash</p>
                    <br/>
                    <p>Face off against different github users head to head. Victory is based on a score using Github stats.</p>
                </div>
            </div>
        </div>
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <a href="https://github.com/mrCamilo/Inviter"><img alt="Inviter" src={'https://i.imgur.com/Wj4SWsh.png'}></img></a>
                    
                </div>
                <div className="card-content blue lighten-3">
                    <p style={{fontWeight: 'bold'}}>Inviter</p>
                    <br/>
                    <p>Connects a user to a database of contacts and send post cards through E-mail or SMS Texts.</p>
                </div>
            </div>
        </div>
        <div className="divider" id="contact"></div>
    </div>)
}

export default Projects