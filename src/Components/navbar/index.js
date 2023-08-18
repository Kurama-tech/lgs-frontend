

import { Link, NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import { Component } from "react";

import "./index.css";

class Header extends Component {
  state = { showNavItems: false, showmblItems: false };

  toggleShowNavItems = () => {
    this.setState((prevState) => ({ showNavItems: !prevState.showNavItems }));
  };

  onClickNavItem = () => {
    this.setState((prevState) => ({ showmblItems: !prevState.showmblItems }));
  };

  // showMblNavminiItems = () => {
  //   const { showmblItems } = this.state;
  //   console.log(showmblItems);
  //   return (
  //     <ul className="mbl-Nav-Service-container-items">
  //         <li className="Headeroption-item">
  //         <Link to="/polarianalm" className="link">Polarion ALM
  //         </Link>
  //         </li>

  //       <Link to="/saascloudsolutions" className="link">
  //         <li className="Headeroption-item">SAAS & cloud Solutions</li>
  //       </Link>
  //       <Link to="/ptcintegrity" className="link">
  //         <li className="Headeroption-item">PTC Integrity</li>
  //       </Link>
  //       <Link to="/mobileandappdevelopment" className="link">
  //         <li className="Headeroption-item">Mobile & APP Development</li>
  //       </Link>
  //       <Link to="/resellermendix" className="link">
  //         <li className="Headeroption-item">Mendix</li>
  //       </Link>
  //       <Link to="/salesforcepage" className="link">
  //         <li className="Headeroption-item">Sales Force</li>
  //       </Link>
  //     </ul>
  //   );
  // };

  renderNavItems = () => {
    return (
      <div className="mbl-nav-items-container">
        <ul className="mbl-nav-menu">
          <li className="nav-mbl-menu-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-mbl-menu-item">
            <Link to="/clientsPage" className="nav-link">
              CLIENTS
            </Link>
          </li>

          <li className="nav-mbl-service-container nav-mbl-menu-item">
            PRODUCTS
            <ul className="mbl-Nav-Service-container-items">
              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Quanta Genius
                </Link>
              </li>
              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Taxoguru Consulting
                </Link>
              </li>

              <li className="Headeroption-item">
                {" "}
                <Link to="/contactus" className="link">
                  Glorious Mindmine
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  LGS Fresh
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  Digival
                </Link>
              </li>

              <li className="Headeroption-item">
                <Link to="/contactus" className="link">
                  SRM 360 degree Consulting
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-mbl-service-container nav-mbl-menu-item">
            TECHNOLOGIES
            <ul className="mbl-Nav-Service-container-items technology-overflow">
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">UI DESIGN</h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      HTML/HTML5, CSS3
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      ANGULARJS, JS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      AJAX/JSON
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      JQUERY, JQUERY UI
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      DRUPAL
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      JOOMLA
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      WORDPRESS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      REACT
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  CLOUD COMPUTING
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      AWS DEVELOPMENT
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      GOOGLE CLOUD
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      GO DADDY
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      REACT
                    </Link>
                  </li>
                </ul>
                <h6 className="Nav-Mbl-teachnology-main-heading">TESTING</h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SOFTWARE TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      UNIT TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      INTEGRATION TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SYSTEM TESTING
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      DEPLOYMENT AUTOMATION SUPPORT
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  SERVER SIDE SCRIPTING
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      PHP
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      J2EE, J2SE, SWING, SERVLET
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SPRING, STRUTS, HIBERNATE
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      JSP, JSF, APACHECXF
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      JUNIT, TESTING, MOCKITO
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      MICROSOFT VISIO, ENTERPRISE ARCHITECT
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      SHELL
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      PERL
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      PYTHON
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      NODE JS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      EXPRESS JS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <h6 className="Nav-Mbl-teachnology-main-heading">
                    DATA MINING & ANALYTICS
                  </h6>
                  <ul className="Nav-Mbl-technology-sub-container-items">
                    <li className="mbl-product-items">
                      <Link to="" className="link">
                        DATA BASE DESIGN: ORACLE
                      </Link>
                    </li>

                    <li className="mbl-product-items">
                      <Link to="/contactus" className="link">
                        SQL DATABASE
                      </Link>
                    </li>

                    <li className="mbl-product-items">
                      <Link to="" className="link">
                        DATABASE DEVELOPMENT MONGO DBE
                      </Link>
                    </li>

                    <li className="mbl-product-items">
                      <Link to="/contactus" className="link">
                        DATABASE CONSULTING SQL SERVER
                      </Link>
                    </li>

                    <li className="mbl-product-items">
                      <Link to="/contactus" className="link">
                        DATABASE CONSULTING SQL SERVER
                      </Link>
                    </li>
                  </ul>
                </div>

                <h6 className="Nav-Mbl-teachnology-main-heading">
                  WEB SERVER TECHNOLOGY
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      JBOSS
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      APACHE
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="/contactus" className="link">
                      TOMCAT
                    </Link>
                  </li>

                  <li className="mbl-product-items">
                    <Link to="" className="link">
                      IIS
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  LOW CODE PLATFORM
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="/resellermendix" className="link">
                      MENDIX
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  APPLICATION LIFECYCLE MANAGEMENT TOOL
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="/polarianalm" className="link">
                      POLARION
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="Nav-Mbl-teachnology-main-heading">
                  CRM SOFTWARE
                </h6>
                <ul className="Nav-Mbl-technology-sub-container-items">
                  <li className="mbl-product-items">
                    <Link to="/salesforcepage" className="link">
                      SALESFORCE
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </li>

          <li className="nav-mbl-service-container nav-mbl-menu-item">
            SERVICES
            <ul className="mbl-Nav-Service-container-items technology-overflow">
              <div className="nav-service-flex-contianer-items">
                <h6 className="Nav-teachnology-main-heading">
                  ONLINE MARKETING
                </h6>
                <ul className="Nav-technology-sub-container-items">
                  <li className="Nav-technology-item">
                    <Link to="/seo" className="link">
                      SEO SERVICES
                    </Link>
                  </li>
                  <li className="Nav-technology-item">
                    <Link to="/smoservice" className="link">
                      SMO SERVICES
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/smm" className="link">
                      SOCIAL MEDIA MARKETING PRICING PLANS
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/orm" className="link">
                      LEAD MANAGEMENT SYSTEM
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/digitalmarketing" className="link">
                      DIGITAL MARKETING
                    </Link>
                  </li>
                </ul>
                <h6 className="Nav-teachnology-main-heading">
                  CREATIVE DESIGN
                </h6>
                <ul className="Nav-technology-sub-container-items">
                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      UI/UX DESIGN
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/logodesign" className="link">
                      LOGO DESIGN
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="" className="link">
                      BROCHURE DESIGN
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      IIS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-service-flex-contianer-items">
                <h6 className="Nav-teachnology-main-heading">CONSULTANT</h6>
                <ul className="Nav-technology-sub-container-items">
                  <li className="Nav-technology-item">
                    <Link to="/resellermendix" className="link">
                      MENDIX SOLUTION CONSULTANT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/polarianalm" className="link">
                      POLARION SOLUTION CONSULTANT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/salesforcepage" className="link">
                      SALESFORCE SOLUTION CONSULTANT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      CONVENTIONAL DEVELOPMENT CONSULTANT
                    </Link>
                  </li>
                </ul>
                <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                <ul className="Nav-technology-sub-container-items">
                  <li className="Nav-technology-item">
                    {" "}
                    <Link to="" className="link">
                      SOFTWARE TESTING
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      UNIT TESTING{" "}
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      INTEGRATION TESTING
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      SYSTEM TESTING
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="" className="link">
                      DEPLOYMENT AUTOMATION SUPPORT
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-service-flex-contianer-items">
                <h6 className="Nav-teachnology-main-heading">
                  WEB DESIGN & DEVELOPMENT
                </h6>
                <ul className="Nav-technology-sub-container-items">
                  <li className="Nav-technology-item">
                    <Link to="/websitemaintanance" className="link">
                      WEBSITE MAINTANANCE
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/websitedevelop" className="link">
                      WEBSITE DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/salesforcepage" className="link">
                      CRM SOFTWARE DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="" className="link">
                      EDUCATIONAL WEB PORTAL DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      RESTAURANT WEB PORTAL DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="" className="link">
                      E-COMMERCE WEBSITE DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      HEALTHCARE PORTAL DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="" className="link">
                      REAL ESTATE PORTAL DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="/contactus" className="link">
                      LEARNING MANAGEMENT SYSTEM DEVELOPMENT
                    </Link>
                  </li>

                  <li className="Nav-technology-item">
                    <Link to="" className="link">
                      TAXATION PORTAL DEVELOPMENT
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="Mobile-application-flex">
                <div className="nav-service-flex-contianer-items">
                  <h6 className="Nav-teachnology-main-heading">
                    MOBILE APPLICATION
                  </h6>
                  <ul className="Nav-technology-sub-container-items">
                    <li className="Nav-technology-item">
                      <Link to="/mobileandappdevelopment" className="link">
                        MOBILE APP DEVELOPMENT
                      </Link>
                    </li>

                    <li className="Nav-technology-item">
                      <Link to="" className="link">
                        WINDOWS APP DEVELOPMENT
                      </Link>
                    </li>

                    <li className="Nav-technology-item">
                      <Link to="" className="link">
                        XAMARIN APP DEVELOPMENT
                      </Link>
                    </li>

                    <li className="Nav-technology-item">
                      <Link to="/contactus" className="link">
                        HYBRID APP DEVELOPMENT{" "}
                      </Link>
                    </li>

                    <li className="Nav-technology-item">
                      <Link to="" className="link">
                        NATIVE APP DEVELOPMENT{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <div>
                    <h6 className="Nav-teachnology-main-heading">
                      LOW CODE PLATFORM
                    </h6>
                    <ul className="Nav-technology-sub-container-items">
                      <li className="Nav-technology-item">
                        <Link to="/resellermendix" className="link">
                          MENDIX{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="Nav-teachnology-main-heading">ALM TOOL</h6>
                    <ul className="Nav-technology-sub-container-items">
                      <li className="Nav-technology-item">
                        <Link to="/polarianalm" className="link">
                          POLARION
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="Nav-teachnology-main-heading">
                      CRM SOFTWARE
                    </h6>
                    <ul className="Nav-technology-sub-container-items">
                      <li className="Nav-technology-item">
                        <Link to="/salesforcepage" className="link">
                          SALESFORCE
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li className="nav-mbl-menu-item">
            <Link to="/careers" className="nav-link">
              CAREERS
            </Link>
          </li>

          <li className="nav-mbl-service-container nav-mbl-menu-item">
            RESELLER
            <ul className="mbl-Nav-Service-container-items">
              <li className="Headeroption-item">
                <Link to="/resellermendix" className="link">
                  MENDIX
                </Link>
              </li>
              <li className="Headeroption-item">
                <Link to="/resellerpolarian" className="link">
                  POLARION
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-mbl-menu-item">
            <Link to="/aboutus" className="nav-link">
              ABOUT US
            </Link>
          </li>

          <li className="nav-mbl-menu-item">
            <Link to="/contactus" className="nav-link">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const { showNavItems } = this.state;
    return (
      <>
        <nav className="nav-header">
          <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
              <Link to="/" className="nav-link">
                <img
                  alt="website logo"
                  className="nav-mobile-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
                />
              </Link>
              <button
                type="button"
                onClick={this.toggleShowNavItems}
                className="nav-mobile-btn"
              >
                <GiHamburgerMenu className="nav-mobile-menu-icon" />
              </button>
            </div>
            <div className="nav-bar-large-container">
              <Link to="/" className="nav-link">
                <img
                  className="nav-website-logo"
                  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690553185/Favicon_lgs_uvfyzx.png"
                  alt="website logo"
                />
              </Link>
              <ul className="nav-menu">
                <li className="Nav-Service-container nav-menu-item home-padding">
                  <NavLink
                    exact
                    to="/"
                    activeclassname="active"
                    className="inactive"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="Nav-Service-container nav-menu-item technology-item">
                  PRODUCTS
                  <ul className="Nav-Service-container-items">
                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Quanta Genius
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Taxoguru Consulting
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Glorious Mindmine
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        LGS Fresh
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        Digival
                      </Link>
                    </li>

                    <li className="Headeroption-item">
                      <Link to="/contactus" className="link">
                        SRM 360 degree Consulting
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="Nav-Service-container nav-menu-item technology-item">
                  <NavLink
                    to="/clientsPage"
                    activeclassname="active"
                    className="inactive"
                  >
                    CLIENTS
                  </NavLink>
                </li>

                <li className="Nav-Service-container nav-menu-item technology-item">
                  SERVICES
                  <ul className="Nav-Service-container-items nav-service-flex-contianer ">
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        ONLINE MARKETING
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/seo" className="link">
                            SEO SERVICES
                          </Link>
                        </li>
                        <li className="Nav-technology-item">
                          <Link to="/smoservice" className="link">
                            SMO SERVICES
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            SEARCH ENGINE MARKETING
                          </Link>
                        </li>
                        <li className="Nav-technology-item">
                          <Link to="/ppc" className="link">
                            PPC
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/orm" className="link">
                            LEAD MANAGEMENT SYSTEM
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/digitalmarketing" className="link">
                            DIGITAL MARKETING
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">
                        CREATIVE DESIGN
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            UI/UX DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/logodesign" className="link">
                            LOGO DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            BROCHURE DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            IIS
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">
                        SAAS & CLOUD
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/saascloudsolutions" className="link">
                            SAAS & CLOUD SOLUTIONS
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        CONSULTANT
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            MENDIX SOLUTION CONSULTANT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            POLARION SOLUTION CONSULTANT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/salesforce" className="link">
                            SALESFORCE SOLUTION CONSULTANT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            CONVENTIONAL DEVELOPMENT CONSULTANT
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SOFTWARE TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            UNIT TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            INTEGRATION TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SYSTEM TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            DEPLOYMENT AUTOMATION SUPPORT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-service-flex-contianer-items">
                      <h6 className="Nav-teachnology-main-heading">
                        WEB DESIGN & DEVELOPMENT
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/websitemaintanance" className="link">
                            WEBSITE DESIGN
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/websitedevelop" className="link">
                            WEBSITE DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/salesforcepage" className="link">
                            CRM SOFTWARE DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            EDUCATIONAL WEB PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            RESTAURANT WEB PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            E-COMMERCE WEBSITE DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            HEALTHCARE PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            REAL ESTATE PORTAL DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            LEARNING MANAGEMENT SYSTEM DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            TAXATION PORTAL DEVELOPMENT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="Mobile-application-flex">
                      <div className="nav-service-flex-contianer-items">
                        <h6 className="Nav-teachnology-main-heading">
                          MOBILE APPLICATION
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <li className="Nav-technology-item">
                            <Link
                              to="/mobileandappdevelopment"
                              className="link"
                            >
                              MOBILE APP DEVELOPMENT
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              WINDOWS APP DEVELOPMENT
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              XAMARIN APP DEVELOPMENT
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              HYBRID APP DEVELOPMENT{" "}
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              NATIVE APP DEVELOPMENT{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            LOW CODE PLATFORM
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/resellermendix" className="link">
                                MENDIX
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            ALM TOOL
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/polarianalm" className="link">
                                POLARION
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            CRM SOFTWARE
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/salesforcepage" className="link">
                                SALESFORCE
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="">
                        <div></div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="Nav-teachnology-container nav-menu-item technology-item">
                  TECHNOLOGIES
                  <ul className="Nav-teachnology-container-items">
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        UI DESIGN
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            HTML/HTML5, CSS3
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            ANGULARJS, JS
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            AJAX/JSON
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            JQUERY, JQUERY UI
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            DRUPAL
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            JOOMLA
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            WORDPRESS
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            REACT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        CLOUD COMPUTING
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            AWS DEVELOPMENT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            GOOGLE CLOUD
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            GO DADDY
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            REACT
                          </Link>
                        </li>
                      </ul>
                      <h6 className="Nav-teachnology-main-heading">TESTING</h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SOFTWARE TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            UNIT TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            INTEGRATION TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            SYSTEM TESTING
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            DEPLOYMENT AUTOMATION SUPPORT
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="Nav-teachnology-main-heading">
                        SERVER SIDE SCRIPTING
                      </h6>
                      <ul className="Nav-technology-sub-container-items">
                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            PHP
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            J2EE, J2SE, SWING, SERVLET
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            SPRING, STRUTS, HIBERNATE
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            JSP, JSF, APACHECXF
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            JUNIT, TESTING, MOCKITO
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            MICROSOFT VISIO, ENTERPRISE ARCHITECT
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="" className="link">
                            SHELL
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            PERL
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            PYTHON
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            NODE JS
                          </Link>
                        </li>

                        <li className="Nav-technology-item">
                          <Link to="/contactus" className="link">
                            EXPRESS JS
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="data-mining-flex">
                      <div>
                        <h6 className="Nav-teachnology-main-heading">
                          DATA MINING & ANALYTICS
                        </h6>
                        <ul className="Nav-technology-sub-container-items">
                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              DATA BASE DESIGN: ORACLE
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              SQL DATABASE
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              DATABASE DEVELOPMENT MONGO DBE
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="" className="link">
                              DATABASE CONSULTING SQL SERVER
                            </Link>
                          </li>

                          <li className="Nav-technology-item">
                            <Link to="/contactus" className="link">
                              DATABASE CONSULTING SQL SERVER
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            LOW CODE PLATFORM
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/resellermendix" className="link">
                                MENDIX
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            ALM TOOL
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/polarianalm" className="link">
                                POLARION
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="Nav-teachnology-main-heading">
                            CRM SOFTWARE
                          </h6>
                          <ul className="Nav-technology-sub-container-items">
                            <li className="Nav-technology-item">
                              <Link to="/salesforcepage" className="link">
                                SALESFORCE
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*<div className="Nav-technology-low-code-container">
                        <div>
                            <h6 className="Nav-teachnology-main-heading">LOW CODE PLATFORM</h6>
                            <ul className="Nav-technology-sub-container-items">
                                <Link to="" className="link">
                                        <li className="Nav-technology-item">MENDIX</li>
                                </Link>
                            </ul>
                            </div>
                            <div>
                            <h6 className="Nav-teachnology-main-heading">APPLICATION LIFECYCLE MANAGEMENT TOOL</h6>
                            <ul className="Nav-technology-sub-container-items">
                                <Link to="" className="link">
                                        <li className="Nav-technology-item">POLARION</li>
                                </Link>
                            </ul>
                            </div>
                            <div>
                            <h6 className="Nav-teachnology-main-heading">CRM SOFTWARE</h6>
                            <ul className="Nav-technology-sub-container-items">
                                <Link to="" className="link">
                                        <li className="Nav-technology-item">SALESFORCE</li>
                                </Link>
                            </ul>
                        </div>
                        </div>*/}
                  </ul>
                </li>

                <li className="nav-menu-item career-padding">
                  <NavLink
                    to="/careers"
                    activeclassname="active"
                    className="inactive"
                  >
                    CAREERS
                  </NavLink>
                </li>

                <li className="Nav-Reseller-container nav-menu-item career-padding technology-item">
                  RESELLER
                  <ul className="Nav-Reseller-container-items">
                    <li className="nav-reseller-polarion-text">
                      <Link to="/resellerpolarian" className="nav-link">
                        Polarion
                      </Link>
                    </li>
                    <li className="nav-reseller-mendix-text">
                      <Link to="/resellermendix" className="nav-link">
                        Mendix
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-menu-item about-us-nav about-padding">
                  <NavLink
                    to="/aboutus"
                    activeclassname="active"
                    className="inactive"
                  >
                    ABOUT US
                  </NavLink>
                </li>

                <li className="nav-menu-item about-us-nav about-padding">
                  <NavLink
                    to="/contactus"
                    activeclassname="active"
                    className="inactive"
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {showNavItems && this.renderNavItems()}
        </nav>
      </>
    );
  }
}

export default Header;
