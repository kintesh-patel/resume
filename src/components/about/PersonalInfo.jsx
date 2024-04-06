import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Nirmal" },
  { meta: "last name", metaInfo: "Patel" },
  { meta: "Age", metaInfo: "30 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Marital status", metaInfo: "Married" },
  { meta: "Address", metaInfo: "Valsad" },
  { meta: "phone", metaInfo: "+919558643243" },
  { meta: "Email", metaInfo: "nirmalpatel7073@gmail.com" },
  { meta: "Education", metaInfo: "Computer Engineer (B.E)" },
  { meta: "language", metaInfo: "English,Hindi,Gujarati" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
