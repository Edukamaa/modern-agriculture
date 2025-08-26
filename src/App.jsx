import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

// Main Pages
import Home from './Pages/Home/Home';
import About from './Pages/Home/About/About';
import Solutions from './Pages/Home/Solutions/Solutions';
import Resources from './Pages/Home/Resources/Resources';
import Blogs from './Pages/Home/Blogs/Blogs';
import Contact from './Pages/Home/Contact/Contact';

// Sub Pages - About
import OurCulture from './Pages/Home/About/OurCulture';
import OurTeam from './Pages/Home/About/OurTeam';
import Projects from './Pages/Home/About/Projects';

// Sub Pages - Solutions
import FarmAdvisory from './Pages/Home/Solutions/FarmAdvisory';
import AgriInputs from './Pages/Home/Solutions/AgriInputs';
import Markets from './Pages/Home/Solutions/Markets';
import RenewableEnergy from './Pages/Home/Solutions/RenewableEnergy';

// Sub Pages - Resources
import ROICalculator from './Pages/Home/Resources/ROICalculator';
import MyNotes from './Pages/Home/Resources/MyNotes';
import FarmScores from './Pages/Home/Resources/FarmScores';
import Weather from './Pages/Home/Resources/Weather';

// Sub Pages - Blogs
import FarmInsights from './Pages/Home/Blogs/FarmInsights';
import News from './Pages/Home/Blogs/News';
import Ebooks from './Pages/Home/Blogs/Ebooks';
import Webinars from './Pages/Home/Blogs/Webinars';
import Magazines from './Pages/Home/Blogs/Magazines';
import Reels from './Pages/Home/Blogs/Reels';

// Sub Pages - Contact
import JoinUs from './Pages/Home/Contact/JoinUs';
import LeaveMessage from './Pages/Home/Contact/LeaveMessage';

// Components
import Hero from './Components/HeroSection/Hero';
import Welcome from './Components/Welcome/Welcome';
import Programes from './Components/Programes/Programes';
import Vision from './Components/Vision/Vision';
import Footer from './Components/Footer/Footer';
import ProblemsSolutions from './Components/ProblemsSolutions/ProblemsSolutions';
import Topbar from './Components/Topbar/Topbar';
import CallToAction from './Components/CallToAction/CallToAction';

const App = () => {
  return (
    <Router>
      {/* Always visible */}
      <Topbar />
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Welcome />
              <Programes />
              <Vision />
              <ProblemsSolutions />
              <CallToAction />
            </>
          }
        />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/our-culture" element={<OurCulture />} />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route path="/about/projects" element={<Projects />} />

        {/* Solutions */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/farm-advisory" element={<FarmAdvisory />} />
        <Route path="/solutions/agri-inputs" element={<AgriInputs />} />
        <Route path="/solutions/markets" element={<Markets />} />
        <Route path="/solutions/renewable-energy" element={<RenewableEnergy />} />

        {/* Resources */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/roi-calculator" element={<ROICalculator />} />
        <Route path="/resources/my-notes" element={<MyNotes />} />
        <Route path="/resources/farm-scores" element={<FarmScores />} />
        <Route path="/resources/weather" element={<Weather />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/farm-insights" element={<FarmInsights />} />
        <Route path="/blogs/news" element={<News />} />
        <Route path="/blogs/ebooks" element={<Ebooks />} />
        <Route path="/blogs/webinars" element={<Webinars />} />
        <Route path="/blogs/magazines" element={<Magazines />} />
        <Route path="/blogs/reels" element={<Reels />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/join-us" element={<JoinUs />} />
        <Route path="/contact/leave-message" element={<LeaveMessage />} />
      </Routes>

      {/* Always visible */}
      <Footer />
    </Router>
  );
};

export default App;
