import React from 'react';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import './styles.css';
import AboutPage from './components/aboutPage';
import Experience from './components/experience';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <NavigationBar />
        <HomePage />
        <AboutPage />
        <Experience />
        <Projects />    
        <ContactPage /> 
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;


