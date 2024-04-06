import React from "react";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home", link: "#home" },
  { icon: "fa-user", menuName: "About", link: "#about" },
  { icon: "fa-briefcase", menuName: "Portfolio", link: "#portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact", link: "#contact" },
];

const HomeDark = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}

      <div className="header">
        <div className=" icon-menu icon-menu-wrap  revealator-slideup revealator-once revealator-delay1">
          {menuItem.map((item, i) => (
            <a className="icon-box icon-btn" href={`${item.link}`} key={i}>
              <i className={`fa ${item.icon}`}></i>
              <h2>{item.menuName}</h2>
            </a>
          ))}
        </div>
      </div>
      {/* End Menu Content */}

      <div className="tab-panel_list">
        {/* Hero Content Starts */}
        <div className="home " id="home">
          <div
            className="container-fluid main-container container-home p-0 "
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="color-block d-none d-lg-block"></div>
            <Hero />
          </div>
        </div>
        {/* Hero Content Ends */}

        {/* About Content Starts */}
        <div className="about" id="about">
          <div data-aos="fade-up" data-aos-duration="400">
            <div className="title-section text-left text-sm-center">
              <h1>
                ABOUT <span>ME</span>
              </h1>
              <span className="title-bg">Resume</span>
            </div>
            {/* End title */}
            <Index />
          </div>
        </div>
        {/* About Content Ends */}

        {/* Portfolio Content Starts */}
        <div className="portfolio professional" id="portfolio">
          <div
            className="title-section text-left text-sm-center"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <h1>
              my <span>portfolio</span>
            </h1>
            <span className="title-bg">works</span>
          </div>
          {/* End title */}
          <Portfolio />
        </div>
        {/* Portfolio Content Ends */}

        {/* Contact Content Starts */}
        <div className="contact" id="contact">
          <div
            className="title-section text-left text-sm-center"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <h1>
              get in <span>touch</span>
            </h1>
            <span className="title-bg">contact</span>
          </div>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="row">
              {/*  Left Side Starts */}
              <div className="col-12 col-lg-4">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                  Don't be shy !
                </h3>
                <p className="open-sans-font mb-4">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to
                  be part of your visions.
                </p>
                <Address />
                {/* End Address */}

                <Social />
                {/* End Social */}
              </div>
              {/* Left Side Ends */}

              {/*  Contact Form Starts  */}
              <div className="col-12 col-lg-8">
                <Contact />
              </div>
              {/*  Contact Form Ends */}
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* Contact Content Ends */}


      </div>

    </div>
  );
};

export default HomeDark;
