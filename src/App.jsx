import React from 'react';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import './styles.css';
import './mediaQueries.css';
import AboutPage from './components/aboutPage';
import Experience from './components/experience';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <HomePage />
      <AboutPage />
      <Experience />
      <Projects />    
      <ContactPage /> 
      <Footer />
    </div>
    
  );
};

export default App;


