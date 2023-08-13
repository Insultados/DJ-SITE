import React, { useState } from 'react';
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

  const [productName, setProductName] = useState("")

  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <About />
        <Products productName={productName} setProductName={setProductName} />
        <Contact  productName={productName} setProductName={setProductName} />
        <Location />
        <Feedback />
      </main>
      <Footer />
    </div>

  );
}

export default App;
