import React from 'react';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';

function App() {
  return (
    <>
      <Banner />
      <About />
      <Works />
      <Skills />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
