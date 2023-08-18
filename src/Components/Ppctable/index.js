import React from "react";
import "./index.css";
import Header from "../navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Data = [
  {
    Basic: "PPC Packages",
    Advanced: "PPC Packages",
    Enterprise: "PPC Packages",

    Features:
      "Website Updates (Text, Photos, Pages, Navigation, Videos, Links)",
    BRONZE: "Maximum 5 Updates",
    SILVER: "Maximum 10 Updates",
    GOLD: "Maximum 20 Updates",
    PLATINUM: "Maximum 40 Updates",
  },
  {
    Basic: " Campaign – 1",
    Advanced: " Campaign – 2",
    Enterprise: " Campaign – 5",

    Features: "Technical Support Duration",
    BRONZE: "5 Hours Per Month",
    SILVER: "5 Hours Per Month",
    GOLD: "8 Hours Per Month",
    PLATINUM: "10 Hours Per Month",
  },
  {
    Basic: " AD Groups – 2",
    Advanced: " AD Groups – 6",
    Enterprise: " AD Groups – 10",

    Features: "Work Completion Time",
    BRONZE: "3 Business Days",
    SILVER: "3 Business Days",
    GOLD: "2 Business Days",
    PLATINUM: "1 Business Days",
  },
  {
    Basic: " Ad Copies – Maximum 6",
    Advanced: " Ad Copies – Maximum 15",
    Enterprise: " Ad Copies – Maximum 50",

    Features: "New Product Upload",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Basic: " No. of Keywords-50",
    Advanced: " No. of Keywords-100",
    Enterprise: " No. of Keywords-150",

    Features: "Domain & Hosting Assistance",
    BRONZE: "No",
    SILVER: "No",
    GOLD: "No",
    PLATINUM: "Yes",
  },
  {
    Basic: " Search Ads",
    Advanced: " Search Ads",
    Enterprise: " Search Ads",

    Features: "Website Customization Works",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Only Basic Changes Allowed",
    PLATINUM: "Only Basic Changes Allowed",
  },
  {
    Basic: "  Display Ads",
    Advanced: " Display Ads",
    Enterprise: " Display Ads",

    Features: "Website Health Check",
    BRONZE: "Monthly",
    SILVER: "Monthly",
    GOLD: "Monthly",
    PLATINUM: "Weekly",
  },
  {
    Basic: " Gmail Ads",
    Advanced: " Gmail Ads",
    Enterprise: " Gmail Ads",

    Features: "Image Optimization",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Basic: " Video Ads",
    Advanced: " Video Ads",
    Enterprise: " Video Ads",
  },
  {
    Basic: " Shopping Ads",
    Advanced: " Shopping Ads",
    Enterprise: " Shopping Ads",

    Features: "Code Optimization",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Basic: " App Promotion Ads",
    Advanced: " App Promotion Ads",
    Enterprise: " App Promotion Ads",

    Features: "WordPress Core & Plugin Update",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Only Basic Changes Will Be Done",
  },
  {
    Basic: " Remarketing List",
    Advanced: " Remarketing List",
    Enterprise: " Remarketing List",

    Features: "Theme Updates*",
    BRONZE: "No",
    SILVER: "No",
    GOLD: "No",
    PLATINUM: "No",
  },
  {
    Basic: " Conversion Tracking",
    Advanced: " Conversion Tracking",
    Enterprise: " Conversion Tracking",

    Features: "Website Speed Optimization",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Basic: "PPC CAMPAIGN MANAGEMENT",
    Advanced: "PPC CAMPAIGN MANAGEMENT",
    Enterprise: "PPC CAMPAIGN MANAGEMENT",

    Features: "Adding and Updating New Content",
    BRONZE: "Up to 1 Page",
    SILVER: "Up to 2 Page",
    GOLD: "Up to 3 Page",
    PLATINUM: "Up to 5 Page",
  },
  {
    Basic: " Competitor Analysis – Yes",
    Advanced: " Competitor Analysis – Yes",
    Enterprise: " Competitor Analysis – Yes",

    Features: "Changes in Address Or Contact Information",
    BRONZE: "Yes",
    SILVER: "Yes",
    GOLD: "Yes",
    PLATINUM: "Yes",
  },
  {
    Basic: " Keyword Optimization – Yes",
    Advanced: " Keyword Optimization – Yes",
    Enterprise: " Keyword Optimization – Yes",

    Features: "Trouble Shooting Server Issues",
    BRONZE: "No",
    SILVER: "NO",
    GOLD: "No",
    PLATINUM: "Yes",
  },
  {
    Basic: " Ad Copy Optimization – Yes",
    Advanced: " Ad Copy Optimization – Yes",
    Enterprise: " Ad Copy Optimization – Yes",

    Features: "Scan Website For Malicious Issues",
    BRONZE: "No",
    SILVER: "NO",
    GOLD: "No",
    PLATINUM: "Yes",
  },
  {
    Basic: "VALUE ADDS",
    Advanced: "VALUE ADDS",
    Enterprise: "VALUE ADDS",

    Features: "Broken Link Check & Fix",
    BRONZE: "Extra Charges",
    SILVER: "Extra Charges",
    GOLD: "Extra Charges",
    PLATINUM: "Extra Charges",
  },
  {
    Basic: " ROI Analysis",
    Advanced: " ROI Analysis",
    Enterprise: " ROI Analysis",
  },
  {
    Basic: " Landing Page Optimization",
    Advanced: "  Landing Page Optimization",
    Enterprise: "  Landing Page Optimization",
  },
  {
    Basic: " REPORTING",
    Advanced: " REPORTING",
    Enterprise: " REPORTING",
  },
  {
    Basic: "  Reports – Monthly",
    Advanced: "  Reports – Monthly",
    Enterprise: "  Reports – Monthly",
  },
  {
    Basic: " Dedicated Account Manager",
    Advanced: " Dedicated Account Manager",
    Enterprise: " Dedicated Account Manager",
  },
  {
    Basic: " Support – Email, Chat",
    Advanced: "  Support – Email, Chat",
    Enterprise: " Support – Email, Chat",
    Features: "Get Support On",
    BRONZE: "Email",
    SILVER: "Email",
    GOLD: "Phone/Email",
    PLATINUM: "Phone/Email",
  },
];

const PpcTable = () => {
  return (
    <>
      <Header />
      <div>
        <h1>
          <center>PPC</center>
        </h1>
        <table className="table-container">
          <thead>
            <tr>
              <th className="feature-cell">BASIC</th>
              <th className="feature-cell"> ADVANCED</th>
              <th className="feature-cell">ENTERPRICE</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((row, index) => (
              <tr key={index}>
                <td className="row-cell">{row.BASIC}</td>
                <td>{row.ADVANCED}</td>
                <td>{row.ENTERPRICE}</td>

                <td className="row-cell">{row.Features}</td>
                <td>{row.BRONZE}</td>
                <td>{row.SILVER}</td>
                <td>{row.GOLD}</td>
                <td>{row.PLATINUM}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: "center" }}>
          <Link to="/contactus">
            <button className="learn-more-button">Get Quote</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PpcTable;
