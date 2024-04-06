import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://m.facebook.com/nirmal7073?wtsid=rdr_0hqKTJfr0ObveJC8P",
  },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/nirmal-patel-04b25b44" },
  {
    iconName: "fa fa-instagram",
    link: "https://instagram.com/fitt_nimu?igshid=MzNlNGNkZWQ4Mg==",
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
