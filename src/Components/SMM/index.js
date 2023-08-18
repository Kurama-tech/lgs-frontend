import React from "react";
import "./index.css";
import Header from "../navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
const Data = [
  {
    Basic: "Account Management – 2",
    Professional: "Account Management – 3",
    Advanced: "Account Management – 5",
  },
  {
    Basic: "Creation Of Campaign – 1",
    Professional: "Creation Of Campaign – 1",
    Advanced: "Creation Of Campaign – 1",
  },
  {
    Basic: "Facebook Marketing",
    Professional: "Facebook Marketing",
    Advanced: "Facebook Marketing",
  },
  {
    Basic: [
      "Facebook Business Manager Set Up",
      "Pixel Installation",
      "Custom Conversion Creation",
      "Remarketing",
      " Custom Audience Creation",
      "Creation Of Automated Rules",
      "Facebook Analytics Report Creation",
      "Ad Campaign Monitoring",
      "Catalogue Creation",
      "Dynamic Ads Creation",
      "Instant Experience Ads Creation",
      "Customization Of Ad Placements",
      "A/B Testing Of Ad Set, Creative &",
    ],
    Professional: [
      "Facebook Business Manager Set Up",
      "Pixel Installation",
      "Custom Conversion Creation",
      "Remarketing",
      "Custom Audience Creation",
      "Creation Of Automated Rules",
      "Facebook Analytics Report Creation",
      "Ad Campaign Monitoring",
      "Catalogue Creation",
      "Dynamic Ads Creation",
      "Instant Experience Ads Creation",
      "Customization Of Ad Placements",
      "A/B Testing Of Ad Set, Creative And",
      "Placement",
      "Carousel And Collection Ads",
      "Traffic Monitoring",
      "Monthly Report",
    ],
    Advanced: [
      "Facebook Business Manager Set Up",
      "Pixel Installation",
      "Custom Conversion Creation",
      "Remarketing",
      "Custom Audience Creation",
      "Creation Of Automated Rules",
      "Facebook Analytics Report Creation",
      "Ad Campaign Monitoring",
      "Catalogue Creation",
      "Dynamic Ads Creation",
      "Instant Experience Ads Creation",
      "Customization Of Ad Placements",
      "A/B Testing Of Ad Set, Creative And",
      "Placement",
      "Carousel And Collection Ads",
      "Traffic Monitoring",
      "Monthly Report",
    ],
  },
  {
    Basic: "Instagram Marketing",
    Professional: "Instagram Marketing",
    Advanced: "Instagram Marketing",
  },
  {
    Basic: [
      "Audience Research",
      "Instagram Ads Creative Creation & Design",
      "Instagram Ads Monitoring And Management",
    ],
    Professional: [
      "Audience Research",
      "Instagram Ads Creative Creation & Design",
      "Instagram Ads Monitoring And Management",
    ],
    Advanced: [
      "Audience Research",
      "Instagram Ads Creative Creation & Design",
      "Instagram Ads Monitoring And Management",
    ],
  },
  {
    Basic: "",
    Professional: "LinkedIn Marketing",
    Advanced: "LinkedIn Marketing",
  },
  {
    Basic: [],
    Professional: [
      "Campaign Manager Account Set Up",
      "LinkedIn Insight Tag Installation",
      "Creation Of Custom Conversion",
      "Ads Monitoring",
      "Monthly Report",
    ],
    Advanced: [
      "Campaign Manager Account Set Up",
      "LinkedIn Insight Tag Installation",
      "Creation Of Custom Conversion",
      "Ads Monitoring",
      "Monthly Report",
    ],
  },
  {
    Basic: "",
    Professional: "Youtube Marketing",
    Advanced: "Youtube Marketing",
  },
  {
    Basic: [],
    Professional: [
      "Youtube Ad Account Set Up",
      "Skippable In-Stream Ads",
      "Non-Skippable In-Stream Ads",
      "Bumper Ads",
      "Discovery Ads",
      "Youtube Video Sequence Ads",
      "Detailed Audience Creation",
      "Custom Audience Creation",
      "A/B Testing Of Targeting",
      "Remarketing Video Ads",
      "Video Ads With Promotion Of Your Products",
      "Monthly Report",
    ],
    Advanced: [
      "Youtube Ad Account Set Up",
      "Skippable In-Stream Ads",
      "Non-Skippable In-Stream Ads",
      "Bumper Ads",
      "Discovery Ads",
      "Youtube Video Sequence Ads",
      "Detailed Audience Creation",
      "Custom Audience Creation",
      "A/B Testing Of Targeting",
      "Remarketing Video Ads",
      "Video Ads With Promotion Of Your Products",
      "Monthly Report",
    ],
  },
  {
    Basic: "",
    Professional: "Twitter Marketing",
    Advanced: "Twitter Marketing",
  },
  {
    Basic: [],
    Professional: [
      "Tweet Engagement Ads",
      "Video Or GIF View Ads",
      "Awareness Ads",
      " Website Conversion Ads",
      "In-stream Video View Ads",
      "Follower Ads",
      "App Install Ads",
      "App Reengagement",
      "Audience Creation",
      "Monthly Report",
    ],
    Advanced: [
      "Tweet Engagement Ads",
      "Video Or GIF View Ads",
      "Awareness Ads",
      "Website Conversion Ads",
      "In-stream Video View Ads",
      "Follower Ads",
      "App Install Ads",
      "App Reengagement",
      "Audience Creation",
      "Monthly Report",
    ],
  },
];

const Smm = () => {
  return (
    <>
      <Header />
      <h1 className="smo-heading">
        Our Monthly Social Media Marketing Pricing Plans
      </h1>
      <table className="table-container">
        <thead>
          <tr>
            <th className="feature-cell">Basic</th>
            <th className="feature-cell">Professional</th>
            <th className="feature-cell">Advanced</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((row, index) => (
            <tr key={index}>
              <td>
                {Array.isArray(row.Basic)
                  ? row.Basic.map((item, idx) => <div key={idx}>{item}</div>)
                  : row.Basic}
              </td>
              <td>
                {Array.isArray(row.Professional)
                  ? row.Professional.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))
                  : row.Professional}
              </td>
              <td>
                {Array.isArray(row.Advanced)
                  ? row.Advanced.map((item, idx) => <div key={idx}>{item}</div>)
                  : row.Advanced}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/contactus">
          <button className="learn-more-buttonorm">Learn More</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Smm;
