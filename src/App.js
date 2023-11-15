import React from 'react';
import Home from './components/landingpage';
import Value from './components/value';
import Services from './components/services';
import About from './components/about';
import Footer from './components/footer';
import Navbar from './components/navbar';
import News from './components/news';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Value/>
      <Services/>
      <About/>
      <News/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
