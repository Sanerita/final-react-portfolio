import React from 'react';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import './styles.css';
import AboutPage from './components/aboutPage';
import Experience from './components/experience';
import Projects from './components/projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
// import Route from 'react-router-dom';
// import ReactRouterDOM from 'react-router-dom';


const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      {/* <Router>
     <Route path='/' element={<Home />} />
     <Route exact path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
     </Router> */}

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


