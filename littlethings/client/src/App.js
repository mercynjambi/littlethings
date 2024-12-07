import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Involve from './components/Involve';
import Campaigns from './components/Campaigns';
import Footer from './components/Footer';
import Volunteer from './components/Volunteer';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Donate from './components/PaymentForm';
import Gallery from './components/Gallery'
import Pillars from './components/Pillars';
import MissionVision  from  './components/MissionVision';

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
                  <Team />
                </div>
                <Campaigns />
                <Gallery />
                <Testimonials />
                <Involve />
                <Footer />
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/campaigns" element={<Campaigns/>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/home" element={<Hero />} />
          

          <Route path="/about" element={<About />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/involve" element={<Involve />} />
          <Route path="/volunteer" element={<Volunteer />}/>
          <Route path="/membership" element={<Membership />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/missionvision" element={<MissionVision />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
