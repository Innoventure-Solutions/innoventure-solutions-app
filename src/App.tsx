import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation, BrowserRouter } from "react-router-dom";
import ContactUs from "./pages/Contact-Us/contact.us";
import Services from "./pages/Services/Services";
import {Navbar} from "./pages/navbar/navbar";
import "./App.css";
import { Home } from "./pages/home/home";

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
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    
    </>
    
   
  );
};

export default App;
