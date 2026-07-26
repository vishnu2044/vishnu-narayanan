import React from 'react';
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;