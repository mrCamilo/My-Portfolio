import React from 'react'
import AboutMe from './PortfolioSections/AboutMe'
import Projects from './PortfolioSections/Projects'
import Contact from './PortfolioSections/Contact'

function MainContent() {
    return <main className = "mainContainer">
        <div className = "container">
        <AboutMe/>
        <Projects/>
        <Contact/>
        </div>
    </main>
}

export default MainContent