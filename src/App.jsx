import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Import all pages
import Homepage from './pages/Homepage';
import About from './pages/About';
import Assessment from './pages/Assessment';
import Psychometric from './pages/Psychometric';
import StreamSelector from './pages/StreamSelector';
import Explore from './pages/Explore';
import CareerStreams from './pages/CareerStreams';
import Resources from './pages/Resources';
import Counsellors from './pages/Counsellors';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Donate from './pages/Donate';

// New assessment pages
import PersonalityAssessment from './pages/PersonalityAssessment';
import InterestMapping from './pages/InterestMapping';
import AptitudeTesting from './pages/AptitudeTesting';

// Import all career detail pages
import Engineering from './pages/careers/Engineering';
import Medicine from './pages/careers/Medicine';
import PureSciences from './pages/careers/PureSciences';
import Agriculture from './pages/careers/Agriculture';
import Finance from './pages/careers/Finance';
import Accounting from './pages/careers/Accounting';
import Business from './pages/careers/Business';
import Marketing from './pages/careers/Marketing';
import Literature from './pages/careers/Literature';
import Psychology from './pages/careers/Psychology';
import History from './pages/careers/History';
import Sociology from './pages/careers/Sociology';
import Software from './pages/careers/Software';
import DataScience from './pages/careers/DataScience';
import Cybersecurity from './pages/careers/Cybersecurity';
import Cloud from './pages/careers/Cloud';
import GraphicDesign from './pages/careers/GraphicDesign';
import FashionDesign from './pages/careers/FashionDesign';
import InteriorDesign from './pages/careers/InteriorDesign';
import ProductDesign from './pages/careers/ProductDesign';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/psychometric" element={<Psychometric />} />
          <Route path="/stream-selector" element={<StreamSelector />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/career-streams" element={<CareerStreams />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/counsellors" element={<Counsellors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donate" element={<Donate />} />

          {/* Assessment Detail Pages */}
          <Route path="/personality-assessment" element={<PersonalityAssessment />} />
          <Route path="/interest-mapping" element={<InterestMapping />} />
          <Route path="/aptitude-testing" element={<AptitudeTesting />} />

          {/* Career Detail Pages - Science Stream */}
          <Route path="/career/engineering" element={<Engineering />} />
          <Route path="/career/medicine" element={<Medicine />} />
          <Route path="/career/pure-sciences" element={<PureSciences />} />
          <Route path="/career/agriculture" element={<Agriculture />} />

          {/* Career Detail Pages - Commerce Stream */}
          <Route path="/career/finance" element={<Finance />} />
          <Route path="/career/accounting" element={<Accounting />} />
          <Route path="/career/business" element={<Business />} />
          <Route path="/career/marketing" element={<Marketing />} />

          {/* Career Detail Pages - Arts Stream */}
          <Route path="/career/literature" element={<Literature />} />
          <Route path="/career/psychology" element={<Psychology />} />
          <Route path="/career/history" element={<History />} />
          <Route path="/career/sociology" element={<Sociology />} />

          {/* Career Detail Pages - Technology Stream */}
          <Route path="/career/software" element={<Software />} />
          <Route path="/career/data-science" element={<DataScience />} />
          <Route path="/career/cybersecurity" element={<Cybersecurity />} />
          <Route path="/career/cloud" element={<Cloud />} />

          {/* Career Detail Pages - Design Stream */}
          <Route path="/career/graphic-design" element={<GraphicDesign />} />
          <Route path="/career/fashion-design" element={<FashionDesign />} />
          <Route path="/career/interior-design" element={<InteriorDesign />} />
          <Route path="/career/product-design" element={<ProductDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;