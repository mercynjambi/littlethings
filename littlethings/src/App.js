// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team'
import Involve from './components/Involve';
import Campaigns from './components/Campaigns';
import Footer from './components/Footer';
import Volunteer from './components/Volunteer';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />

        <Routes>
          {/* Main page with Hero, About, Campaigns, Involve, and Footer sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <div className="container">
                 <Team/>
                 </div>
                <Campaigns />
                <Testimonials/>
                <Involve />
                <Contacts/>
                <Footer />
              </>
            }
          />

          {/* Volunteer Form Page */}
          <Route path="/volunteer" element={<Volunteer />} />

          {/* Other routes can go here for additional pages */}
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
