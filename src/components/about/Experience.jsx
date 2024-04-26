import React from "react";

const experienceContent = [
  {
    year: "Web",
    position: " Web Development",
    compnayName: "Innoquad Technologies",
    details: `Proficiently engineered and maintained robust backend solutions utilizing WordPress and PHP. Collaborated closely with backend development teams to ensure reliable integration and optimal performance of web applications.`,
  },
  {
    year: "Skill",
    position: "Skills",
    compnayName: "Innoquad Technologies",
    details: `Experienced Backend Developer proficient in WordPress, Laravel, and PHP, with a track record of developing and maintaining robust web applications. Skilled in WordPress theme and plugin development, Laravel framework setup, routing, and database interactions. Possesses a strong understanding of PHP syntax, control structures, and security best practices. Collaborates effectively with cross-functional teams to ensure seamless integration and optimal performance of web solutions.`,
  },
  {
    year: "Management",
    position: " Time Management and Organization",
    compnayName: "Innoquad Technologies",
    details: `Ability to manage multiple projects and meet deadlines.
    Strong organizational skills to maintain backend assets, files, and project documentation in a structured manner. Attention to detail to ensure precision and consistency in backend deliverables.`,
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
