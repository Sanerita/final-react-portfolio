import React from 'react';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import './styles.css';
import AboutPage from './components/aboutPage';
import Experience from './components/experience';
import Projects from './components/projects';
import ContactPage from './components/contactPage';
import Footer from './components/footer';
// import Route from 'react-router-dom';


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


