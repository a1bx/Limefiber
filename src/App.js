import React from 'react';
import Home from './components/home';
import Value from './components/value';
import Services from './components/services';
import About from './components/about';
import Footer from './components/footer';
import Navbar from './components/navbar';
import News from './components/news';
import Contact from './components/contact';
// import { NOTFOUND } from 'dns';
import NotFound from './components/pagenotfound';
import Products from './components/products';
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <Navbar />
                <Home />
                <Value />
                <Services />
                <About />
                <News />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <NotFound/> */}
      {/* <Products/> */}
    </div>
  );
}

export default App;
