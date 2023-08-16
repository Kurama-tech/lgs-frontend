import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ResellerMendix from "./Components/ResellerMendixPage";
import ResellerPolarian from "./Components/ResellerPolarianPage";
import WebMobile from "./Components/MobileandAppDevelopment";
import PolarianALM from "./Components/PolarianALM";
import Ptcintegrety from "./Components/PTCintegrity";
import About from "./Components/Aboutus";
import HomePage from "./Components/Homepage";
import Chat from "./Components/chat";
import VisitTracker from "./Components/Tracker";
import CountriesBar from "./Components/Countriesbar";
import DigitalMarketing from "./Components/DigitalMarketing";
import SaasPage from "./Components/SaasPage";
import Clients from "./Components/Clients";
import Careers from "./Components/Careers";
import WhatsAppIntegration from "./Components/WhatsappIcon";
import SalesForce from "./Components/SalesforcePage/index";
import Contactpopup from "./Components/Popup";

function App() {
 // Set to true to show the pop-up on initial load
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    fetchVisitCount(); // Fetch the visit count on initial load
    // Increment the visit count on every page load by making a request to the homepage
    fetch("https://api.labyrinthglobalsolutions.com/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setVisitCount(data.visitCount);
        }
      })
      .catch((error) => {
        console.error("Error incrementing visit count:", error);
      });
  }, []);

  const fetchVisitCount = async () => {
    try {
      const response = await fetch("https://api.labyrinthglobalsolutions.com/api/visit-count");
      const data = await response.json();
      setVisitCount(data.visitCount);
    } catch (error) {
      console.error("Error fetching visit count:", error);
    }
  };

 

  return (
    <>

      <div>
        <CountriesBar />

         <VisitTracker visitCount={visitCount} />
         <WhatsAppIntegration />
        <Chat />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/resellerpolarian"
            element={<ResellerPolarian />}
          />
          <Route exact path="/resellermendix" element={<ResellerMendix />} />
          <Route
            exact
            path="/mobileandappdevelopment"
            element={<WebMobile />}
          />
          <Route exact path="/polarianalm" element={<PolarianALM />} />
          <Route exact path="/ptcintegrity" element={<Ptcintegrety />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contactus" element={<Contactpopup />} />
          <Route exact path="/saascloudsolutions" element={<SaasPage />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route exact path="/salesforcepage" element={<SalesForce />} />
          <Route exact path="/clientsPage" element={<Clients />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
