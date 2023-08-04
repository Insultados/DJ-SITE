import React from 'react';
import './index.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Location from './pages/location/Location';
import Feedback from './pages/feedback/Feedback';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <About />
        <Products />
        <Contact />
        <Location />
        <Feedback />
      </main>
      <Footer />
    </div>

  );
}

export default App;
