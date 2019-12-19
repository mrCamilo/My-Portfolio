import React from 'react';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'

function App() {
  return (
      <div className="area">
        <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      <Navbar />
      <MainContent />
      <Footer />
      </div>
  )
}

export default App;
