import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kintesh" },
  { meta: "last name", metaInfo: "Patel" },
  { meta: "Age", metaInfo: "30 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Marital status", metaInfo: "Married" },
  { meta: "Address", metaInfo: "Milton Keynes" },
  { meta: "phone", metaInfo: "+44 7555206900" },
  { meta: "Email", metaInfo: "kintesh18494@gmail.com" },
  { meta: "Education", metaInfo: "Master of Computer Applications (MCA)" },
  // { meta: "language", metaInfo: "English,Hindi,Gujarati" },
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
