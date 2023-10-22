import React from 'react';
import Landingpage from './components/landingpage';
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
      <Landingpage/>
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
