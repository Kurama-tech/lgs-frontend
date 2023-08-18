// import { Link } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
// import { Chrono } from "react-chrono";
// import Footer from "../Footer";
// import Header from "../navbar";
// import StartPopup from "../StartPopup";
// const items = [
//   {
//     cardTitle: "Our Mission",
//     cardDetailedText:
//       "Our mission is to empower businesses and individuals through cutting-edge software solutions that drive innovation and growth. We are committed to delivering reliable, efficient, and user-centric software that exceeds our clients expectations. By fostering a culture of collaboration and continous improvement, we aim to create a positive impact on the world through technology.",
//   },
//   {
//     cardTitle: "Our Vision",
//     cardDetailedText:
//       "Our vision  is to be a globally recognized software development leader, renowned for our unwavering commitment to excellence and customer satisfaction. We envision a future where our innovative products and services empower organizations to thrive in an ever-evolving digital landscape. Through our passion for technology and human-centric approach, we strive to revolutionize industries, one software solution at a time.",
//   },
// ];

// const About = () => {
//   return (
//     <>
//       <Header />
//       <div className="mainContainer">
//         <div className="aboutus-image-container">
//           <center>
//             <h1 className="heading">
//               Get to know about <span>LGS</span>
//             </h1>
//           </center>
//         </div>
//         <div className="aboutUsCard">
//           <div>
//             <center>
//               <h1 className="about-title">ABOUT US</h1>
//             </center>
//             <p className="about-description">
//               Labyrinth global solutions Pvt. Ltd. is a fast-growing IT Company
//               that provides holistic IT solutions to businesses across
//               geographies We offer IT expertise in software, website, and
//               application (iOS & Android) development; UI/UX design; and digital
//               marketing. We are situated at around 12 service locations, serving
//               businesses belonging to various sectors. So long, we have forayed
//               into healthcare, food services, travel & tourism, logistic &
//               shipping, e-commerce, banking, technology, manufacturing, and
//               IT-enabled education service industries so far. Currently, we have
//               a team of highly skilled IT professionals that work round the
//               clock to ensure LGS stays true to its offerings &
//               commitments. Our team of experienced experts includes software
//               developers, web developers, designers, and digital marketing
//               experts.
//             </p>
//           </div>
//           <hr />
//           <div>
//             <center>
//               <h1 className="about-title">
//                 What makes us different? / Why us? / Why LGS?
//               </h1>
//             </center>
//             <p className="about-description">
//               We, at LGS, believe in working in partnerships with our clients.
//               Each of our clients is equally important to us and we collaborate,
//               to understand their unique needs and working methods. We
//               consistently interact and work together to create intelligent
//               solutions that meet our client’s evolving business demands. And
//               thus, provide quick turnarounds by following this collaborative
//               style of working. We have been continuously bridging the gap
//               between business and technology.
//             </p>
//             <p className="about-description">
//               We believe that communication is the key and our team of experts
//               always follows this principle. We carry out constant communication
//               between team members and clients, ensuring transparency. This also
//               enables us to get greater insights as well as trust from all our
//               clients. All of our projects are delivered at the stated times and
//               our services come within a rather affordable range.
//             </p>
//             <p className="about-description">
//               Our development process is seamlessly carried out and it follows a
//               systematic approach We begin with signing a Non-Disclosure
//               Agreement (NDA) with the client. Post which process and
//               documentation is done. The responsibilities are shared among the
//               team member to ensure a timely and smooth progression of the
//               project. Proper scheduling is done of the whole process and we
//               also carry out frequent reporting to keep everyone (including the
//               clients) within the loop. We have a completely agile approach and
//               get continuous client feedback and output, and accordingly change
//               and progress with our development. This is why we can take on
//               complex projects that other developers may perceive as difficult,
//               making us one of the best software developers out there.
//             </p>
//           </div>
//           <center>
//             <Link to="/contactus">
//               <button className="btn btn-primary about-button">
//                 Contact us
//               </button>
//             </Link>
//           </center>
//         </div>

//         <div className="about-cards-container">
//           <div className="chrono-container">
//             <Chrono
//               classNames={{
//                 card: "my-card",
//                 cardText: "my-card-text",

//                 controls: "my-controls",

//                 title: "my-title",
//               }}
//               cardHeight={300}
//               fontSizes={{
//                 cardTitle: "1.5rem",
//               }}
//               mode="VERTICAL_ALTERNATING"
//               items={items}
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <StartPopup />
//     </>
//   );
// };

// export default About;

import React from 'react'
import ReactPlayer from 'react-player'

import './index.css'
import aboutus from "../images/AboutUs.jpg"
import mission from "../images/Mission.jpg"
import video from '../images/Core Values.mp4'
import whychoosevideo from '../images/whyChooseLGS.mp4'
import Footer from "../Footer";
import Header from "../navbar";
import StartPopup from "../StartPopup";

const about = () => {
  return (
    <>
    <Header />
    <div className='mainContainer'>
      <div className='aboutus-image-container'>
        <center>
            <h1 className='about-top-heading'>Get To Know About LGS</h1>
        </center>
      </div>
      <div className='aboutUsCard'>
     
      <div className='firstcard'> 
        <div>
        <h3>Navigating Digital Transformation​</h3>
        <p className='about-description'>At Labyrinth Global Solutions, we are your trusted partner in navigating the complex landscape of digital transformation. Our tireless commitment to helping organizations evolve and thrive in the digital age sets us apart. With a clear focus on commitment, timely delivery, and quality, we provide cost-effective solutions that drive your success</p>
        <p className='about-description'>Labyrinth was started in the year 2010 with a mission to lead organizations through the transformative journey of digitalization, over the last 1 decade we have successfully delivered innovative services & products to various industries such as Automotive, Aerospace, Defense, Oil & Gas, Energy & Utilities, Life Sciences, Banking Financial & Insurance</p>
        </div> 
        <img className='firstimage' alt='about' src={aboutus}/>
      </div>
      <center>
            <h1 className='thrive-content'>Transform with Us. Innovate with Us. Thrive with Us.</h1>
        </center>
      <div className='firstcard'>  
      
      <img alt='mission' className='firstimage' src={mission}/>
      <div>
        <h1 className='heading'>Our Mission</h1>
        <p className='about-description'> Our mission at Labyrinth Global Solutions is to guide businesses through the intricate journey of digital transformation. By harnessing the power of cutting-edge technologies and innovative strategies, we empower organizations to adapt, grow, and excel in an ever-evolving digital world</p>
      </div>
      </div>
      <div className='firstcard'>
      <div>
        <h1 className='heading'>Our Core Values:</h1>
        <p className='about-description'><span className='sub-heading-aboutpage'>Commitment:</span>At the heart of our approach lies a deep commitment to our clients' success. We forge strong partnerships built on trust, transparency, and collaboration. Your goals become our goals, and we work tirelessly to deliver results that exceed expectations.</p>
        <p className='about-description'><span className='sub-heading-aboutpage'>Timely Delivery:</span>We understand that time is of the essence in the fast-paced world of business. Our dedicated teams are driven to deliver solutions within agreed-upon timelines, ensuring that your projects stay on track and achieve the desired outcomes.</p>
        <p className='about-description'><span className='sub-heading-aboutpage'>Quality with Cost-Effective Solutions:</span>We believe that quality should never be compromised, and neither should your budget. Our team of experts leverages their skills and experience to provide high-quality solutions that are also cost-effective, allowing you to maximize value.</p>
      </div>
      <div className="responsive-container about-video-setting react-player">
      <ReactPlayer url={video} controls />
    </div>
    </div>
    <div className='firstcard'>
    <div className="responsive-container about-video-setting react-player">
      <ReactPlayer  url={whychoosevideo} controls />
    </div>
      <div>
      <h1 className='heading'>Our Services:</h1>
        <p className='about-description'><span className='sub-heading-aboutpage'>Application Lifecycle Management (ALM):</span> Our ALM solutions streamline the entire software development process, from ideation to deployment and beyond. We help you manage the complexities of development, testing, and release while ensuring the highest standards of quality and efficiency.</p>
        <p className='about-description'><span className='sub-heading-aboutpage'>Product Lifecycle Management (PLM):</span>With our PLM expertise, we empower your organization to manage product information, collaboration, and innovation seamlessly. From design to end-of-life, our solutions optimize your product development lifecycle.</p>
        <p className='about-description'><span className='sub-heading-aboutpage'>Low-Code Development: </span>Embrace the power of low-code platforms to rapidly build and deploy applications that meet your unique business needs. Our low-code solutions accelerate development while maintaining flexibility and scalability.</p>
        <p className='about-description'><span className='sub-heading-aboutpage'>Custom Development:</span>Recognizing that one size doesn't fit all, our custom development services craft tailored solutions that align with your specific goals and challenges. We turn your ideas into reality with innovative, fully customized applications.</p>
      </div>
      </div> 
      </div>
    </div>
    <Footer />
  <StartPopup />
    </>
  )
}

export default about

