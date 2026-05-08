import React from "react";
import { Routes, Route} from "react-router-dom";
import ContactUs from "./pages/Contact-Us/contact.us";
import Services from "./pages/Services/Services";
import {Navbar} from "./pages/navbar/navbar";
import "./App.css";
import { Home } from "./pages/home/home";
import Projects from "./pages/project/project";
import ItServices from "./pages/it-services/it-services";
import AiAutomation from "./pages/ai-automation/ai-automation";
import CyberSecurity from "./pages/cyber-security/cyber-security"; 
import DevOps from "./pages/devops/devops"; 
const App: React.FC = () => {

  
  return (
    <>
    <Navbar />
     <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <Home />
        }
      />

      {/* SERVICES PAGE */}
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/it-services" element={<ItServices />} />
      <Route path="/ai-automation" element={<AiAutomation />} />
      <Route path="/cyber-security" element={<CyberSecurity />} />
      <Route path="/devops" element={<DevOps />} />
    </Routes>
    
    </>
    
   
  );
};

export default App;
