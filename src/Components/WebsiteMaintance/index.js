import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../navbar";

const Data = [
  {
    Features:
      "Website Updates (Text, Photos, Pages, Navigation, Videos, Links)",
    BRONZE: "Maximum 5 Updates",
    SILVER: "Maximum 10 Updates",
    GOLD: "Maximum 20 Updates",
    PLATINUM: "Maximum 40 Updates",
  },
  {
    Features: "Technical Support Duration",
    BRONZE: "5 Hours Per Month",
    SILVER: "5 Hours Per Month",
    GOLD: "8 Hours Per Month",
    PLATINUM: "10 Hours Per Month",
  },
  {
    Features: "Work Completion Time",
    BRONZE: "3 Business Days",
    SILVER: "3 Business Days",
    GOLD: "2 Business Days",
    PLATINUM: "1 Business Days",
  },
  {
    Features: "New Product Upload",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Features: "Domain & Hosting Assistance",
    BRONZE: "No",
    SILVER: "No",
    GOLD: "No",
    PLATINUM: "Yes",
  },
  {
    Features: "Website Customization Works",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Only Basic Changes Allowed",
    PLATINUM: "Only Basic Changes Allowed",
  },
  {
    Features: "Website Health Check",
    BRONZE: "Monthly",
    SILVER: "Monthly",
    GOLD: "Monthly",
    PLATINUM: "Weekly",
  },
  {
    Features: "Image Optimization",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Features: "Code Optimization",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Features: "WordPress Core & Plugin Update",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Only Basic Changes Will Be Done",
  },
  {
    Features: "Theme Updates*",
    BRONZE: "No",
    SILVER: "No",
    GOLD: "No",
    PLATINUM: "No",
  },
  {
    Features: "Website Speed Optimization",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Features: "Adding and Updating New Content",
    BRONZE: "Up to 1 Page",
    SILVER: "Up to 2 Page",
    GOLD: "Up to 3 Page",
    PLATINUM: "Up to 5 Page",
  },
  {
    Features: "Changes in Address Or Contact Information",
    BRONZE: "Yes",
    SILVER: "Yes",
    GOLD: "Yes",
    PLATINUM: "Yes",
  },
  {
    Features: "Trouble Shooting Server Issues",
    BRONZE: "No",
    SILVER: "NO",
    GOLD: "No",
    PLATINUM: "Yes",
  },
  {
    Features: "Scan Website For Malicious Issues",
    BRONZE: "No",
    SILVER: "NO",
    GOLD: "No",
    PLATINUM: "Yes",
  },
  {
    Features: "Broken Link Check & Fix",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Features: "Get Support On",
    BRONZE: "Email",
    SILVER: "Email",
    GOLD: "Phone/Email",
    PLATINUM: "Phone/Email",
  },
];

const WebsiteMaintanance = () => {
  return (
    <>
      <Header />
      <h1 className="website-heading">Website Maintenance Packages</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th className="feature-cell">Features</th>
            <th className="feature-cell"> BRONZE</th>
            <th className="feature-cell">SILVER</th>
            <th className="feature-cell">GOLD</th>
            <th className="feature-cell">PLATINUM</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((row, index) => (
            <tr key={index}>
              <td className="row-cell">{row.Features}</td>
              <td>{row.BRONZE}</td>
              <td>{row.SILVER}</td>
              <td>{row.GOLD}</td>
              <td>{row.PLATINUM}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="websitemaintannce-button">
        <Link to="/contactus">
          <button className="learn-more-button">Get Quote</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default WebsiteMaintanance;
