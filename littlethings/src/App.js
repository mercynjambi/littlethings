import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
   
      <div className="flex flex-col h-screen">
        <Navbar />
        <Hero />
        <Footer/>
        {/* <AboutSection />
        <ProjectsSection />
        <VolunteerSection />
        <NewsSection />
        <ContactSection />
        <DonateSection /> 
   */}
    </div>
  );
}

export default App;
