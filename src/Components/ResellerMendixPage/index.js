import { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../navbar";
import Footer from "../Footer";

class ResellerMendix extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="mendix-main-container container-fluid">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="reseller-mendix-heading">Mendix</h1>
              <p className="reseller-mendix-paragraph">
                LGS is your go-to destination for cutting-edge software and app
                development using the powerful Mendix low-code platform. We
                deliver innovative solutions that drive success, tailored to
                your specific needs. As authorized Mendix resellers, we ensure
                access to the latest tools for your digital initiatives. Let's
                embark on this exciting journey together and empower innovation
                with LGS.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="siemens-mendix-hover-card col-12 col-md-6">
              <img
                alt="siemens-card-logo"
                className="siemens-card-logo"
                src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689752914/12-1-300x298_zuhtua.png"
              />
              <div className="mendix-card-description">
                <h1 className="mendix-card-description-heading">
                  SIEMENS MENDIX
                </h1>
                <p className="mendix-card-description-para">
                  LGS is Siemens Mendix Channel partner in India.
                </p>
                <p className="mendix-card-description-para">
                  LGS have been working with Mendix application development
                  space since 2019 even before Siemens acquisition of Polarion.
                </p>
                <p className="mendix-card-description-para">
                  We have been delivering flawless services across global to
                  various industries such as Automotive, Aerospace, Oil & Gas
                  and Life Sciences.
                </p>
              </div>
            </div>
            <div className="mendixpic-container col-12 col-md-6">
              <img
                alt="mendixpic"
                className="mendixpic"
                src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689684944/mendix_xmyowe.jpg"
              />
            </div>
          </div>
          <div className="reseller-mendix-row row p-3">
            <div className="col-md-6 col-12 mendixpic-container">
              <img
                alt="mendixpic"
                className="reseller-mendix-pic-2"
                src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458271/Blog-Header_-Fused-IDEs_-_Copy_vredfk.png"
              />
            </div>
            <div className="siemens-mendix-hover-card col-md-6 col-12">
              <img
                alt="siemens-card-logo"
                className="siemens-card-logo"
                src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689752914/12-1-300x298_zuhtua.png"
              />
              <div className="mendix-card-description">
                <h1 className="mendix-card-description-heading">
                  LABYRINTH OFFERING
                </h1>
                <ul className="labyrinth-offering-unorderedlist-contianer">
                  <li>Installation, upgrades and maintenance of Mendix</li>
                  <li>Implementation (Large & Small)</li>
                  <li>Roll Outs</li>
                  <li>Integration with Polarion, SAP and Oracle</li>
                  <li>Training</li>
                  <li>Web Application Development</li>
                  <li>Mobile Application Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689916240/app-icon_tvkvp8.png"
                      alt="appdevelopment"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">App Development</h1>
                    <p className="para">
                      Empower co-creation across a diverse developer spectrum
                      with a common visual language and dedicated IDEs to meet
                      business needs quickly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689916271/cloud-icon_tfv9nt.png"
                      alt="seo-friendly"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">Cloud</h1>
                    <p className="para">
                      Build and deliver portable, scalable, and resilient
                      applications without specialized expertise. Deploy
                      anywhere in one click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      className="chat-image"
                      src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689916263/intel-auto-icon_q81gmm.png"
                      alt="chat-social"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">
                      Intelligent Automation
                    </h1>
                    <p className="para">
                      Deliver end-to-end process automation with applications
                      that bring people, data, and systems together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689916306/data-integ-icon_zsbsqc.png"
                      alt="blog"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">Data Integration</h1>
                    <p className="para">
                      Open and extensible at every level: platform, models and
                      applications.Integrate data and logic from any data
                      source, system or service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689916286/multi-exp_xefdic.png"
                      alt="theme"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">Multi-Experience</h1>
                    <p className="para">
                      Visually design, context aware smart applications, that
                      deliver exceptional users experiences across a range of
                      touchpoints and modalities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      className="chat-image"
                      src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689916297/ai-icon_aae4lv.png"
                      alt="chat-social"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">
                      Artificial Intelligence
                    </h1>
                    <p className="para">
                      Embrace smart applications; seamlessly connect AI and
                      cognitive services to elevate your solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ResellerMendix;
