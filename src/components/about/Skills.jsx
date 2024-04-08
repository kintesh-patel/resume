import React from "react";
import heroImg1 from "../../assets/img/hero/html-5.png";
import heroImg2 from "../../assets/img/hero/css-3.png";
import heroImg3 from "../../assets/img/hero/php.png";
import heroImg4 from "../../assets/img/hero/bootstrap.png";
import heroImg5 from "../../assets/img/hero/jQuery.png";
import heroImg6 from "../../assets/img/hero/js.png";
import heroImg7 from "../../assets/img/hero/wordpress.png";
import heroImg8 from "../../assets/img/hero/laravel.png";

const skillsContent = [
  { skillClass: "p89", skillPercent: "89", skillName: "HTML", skillimg: heroImg1 },
  { skillClass: "p50", skillPercent: "50", skillName: "CSS", skillimg: heroImg2 },
  { skillClass: "p95", skillPercent: "95", skillName: "WordPress", skillimg: heroImg7 },
  { skillClass: "p95", skillPercent: "95", skillName: "PHP", skillimg: heroImg3 },
  { skillClass: "p50", skillPercent: "50", skillName: "laravel", skillimg: heroImg8 },
  { skillClass: "p50", skillPercent: "50", skillName: "bootstrap", skillimg: heroImg4 },
  { skillClass: "p85", skillPercent: "80", skillName: "JAVASCRIPT", skillimg: heroImg6 },
  { skillClass: "p85", skillPercent: "80", skillName: "JQUERY", skillimg: heroImg5 },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span> <img
              src={val.skillimg}
              className="img-fluid main-img-tech"
              alt="hero man"
            /></span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
