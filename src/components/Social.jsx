import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/patel-kintesh/"
  },
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/kp.kintesh/",
  },
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/kintesh__patel/",
  }

];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
