import React from "react";

const achievementsContent = [
  { title: "4", subTitle1: "years of", subTitle2: "experience" },
  { title: "35", subTitle1: "completed", subTitle2: "projects" },
  { title: "5k", subTitle1: "Product", subTitle2: "Sold" },
  { title: "7", subTitle1: "Technology", subTitle2: "experience" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
