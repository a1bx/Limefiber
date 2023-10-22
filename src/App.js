import React from 'react';
import Landingpage from './components/landingpage';
import Value from './components/value';
import Services from './components/services';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Landingpage/>
      <Value/>
      <Services/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
