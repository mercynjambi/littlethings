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
          <Route
            path="/campaigns"
            element={
              <>
                <Campaigns />
                <Footer /> {/* Footer added to Campaigns page */}
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Contacts />
                <Footer /> {/* Footer added to Contacts page */}
              </>
            }
          />
        
          <Route path="/home" element={<Hero />} />
          

          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer /> {/* Footer added to About page */}
              </>
            }
          />
          <Route path="/pillars" element={<Pillars />} />

          <Route
            path="/involve"
            element={
              <>
                <Involve />
                <Footer /> {/* Footer added to Involve page */}
              </>
            }
          />
          <Route
            path="/volunteer"
            element={
              <>
                <Volunteer />
                <Footer /> {/* Footer added to Volunteer page */}
              </>
            }
          />

<Route
            path="/membership"
            element={
              <>
                <Membership />
                <Footer /> {/* Footer added to Membership page */}
              </>
            }
          />

<Route
            path="/donate"
            element={
              <>
                <Donate />
                <Footer /> {/* Footer added to Donate page */}
              </>
            }
          />

          <Route path="/contacts" element={<Contacts />} />
          <Route path="/missionvision" element={<MissionVision />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
