import React from "react";

const experienceContent = [
  {
    year: "Web",
    position: " Web Designer",
    compnayName: "Goldenmace IT Solutions",
    details: `Developed and maintained responsive and user-friendly web applications using HTML, CSS, and JavaScript. Collaborated with UI/UX designers and backend developers to ensure seamless integration of frontend and backend systems.`,
  },
  {
    year: "Skill",
    position: " Design Skills",
    compnayName: "Goldenmace IT Solutions",
    details: `Strong visual design skills and an eye for aesthetics.
    Knowledge of design principles such as color theory, typography, and layout.Understanding of user experience (UX) design principles.`,
  },
  {
    year: "Communication",
    position: "Communication and Collaboration",
    compnayName: "Goldenmace IT Solutions",
    details: `Strong communication skills to understand client requirements and translate them into design concepts.Ability to collaborate effectively with other team members, such as developers and project managers.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
