import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const About = () => {
  return (
    <div className='mainContainer'>
      <div className='image-container'>
        <center>
          <h1 className='heading'>Get to know about <span>LGS</span></h1>
        </center>
      </div>
      <div  className='aboutUsCard'>
      <div>
        <center><h1 className='about-title'>ABOUT US</h1></center>
        <p className='about-description'>Labyrinth global solutins Pvt. Ltd. is a fast-growing IT Company that provides holistic IT solutions to businesses across geographies We offer IT expertise in software, website, and application (iOS & Android) development; UI/UX design; and digital marketing. We are situated at around 12 service locations, serving businesses belonging to various sectors. So long, we have forayed into healthcare, food services, travel & tourism, logistic & shipping, e-commerce, banking, technology, manufacturing, and IT-enabled education service industries so far. Currently, we have a team of highly skilled IT professionals that work round the clock to ensure Techasoft stays true to its offerings & commitments. Our team of experienced experts includes software developers, web developers, designers, and digital marketing experts.</p>
      </div>
      <hr />
      <div>
        <center>
          <h1 className='about-title'>What makes us different? / Why us? / Why LGS?</h1>
        </center>
        <p className='about-description' >We, at LGS, believe in working in partnerships with our clients. Each of our clients is equally important to us and we collaborate, to understand their unique needs and working methods. We consistently interact and work together to create intelligent solutions that meet our client’s evolving business demands. And thus, provide quick turnarounds by following this collaborative style of working. We have been continuously bridging the gap between business and technology.</p>
        <p className='about-description'>We believe that communication is the key and our team of experts always follows this principle. We carry out constant communication between team members and clients, ensuring transparency. This also enables us to get greater insights as well as trust from all our clients. All of our projects are delivered at the stated times and our services come within a rather affordable range.</p>
        <p className='about-description'>Our development process is seamlessly carried out and it follows a systematic approach  We begin with signing a Non-Disclosure Agreement (NDA) with the client. Post which process and documentation is done. The responsibilities are shared among the team member to ensure a timely and smooth progression of the project. Proper scheduling is done of the whole process and we also carry out frequent reporting to keep everyone (including the clients) within the loop. We have a completely agile approach and get continuous client feedback and output, and accordingly change and progress with our development. This is why we can take on complex projects that other developers may perceive as difficult, making us one of the best software developers out there.</p>
      </div>
      <center><button className='btn btn-primary about-button'>Contact us</button></center>
      </div>
      
      <div className='about-cards-container'>
      <div class="box-2 box-down cyan services-reval">
            <h2 className="services-heading">Mission</h2>
            <p>
            At LGS, our mission is to empower businesses and individuals through cutting-edge software solutions that drive innovation and growth. We are committed to delivering reliable, efficient, and user-centric software that exceeds our clients' expectations. By fostering a culture of collaboration and continuous improvement, we aim to create a positive impact on the world through technology.
              {/* <Link to="/polarianalm">Know More</Link> */}
            </p>
            <img
              src="https://res.cloudinary.com/dots1s0gu/image/upload/v1689829990/target_s8r7w7.png"
              alt=""
              className='mission-image'
            />
      </div>
      <div class="box-2 box-down red services-reval">
            <h2 className="services-heading">Vision</h2>
            <p>
            Our vision at LGS is to be a globally recognized software development leader, renowned for our unwavering commitment to excellence and customer satisfaction. We envision a future where our innovative products and services empower organizations to thrive in an ever-evolving digital landscape. Through our passion for technology and human-centric approach, we strive to revolutionize industries, one software solution at a time.
              {/* <Link to="/polarianalm">Know More</Link> */}
            </p>
            <img
              src="https://png.pngitem.com/pimgs/s/50-500574_vision-png-transparent-images-vision-statement-png-download.png"
              alt=""
              
              className='vision-image'
            />
      </div>
      </div>
    </div>
  );
};
 
export default About;