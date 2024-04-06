import React from "react";

const experienceMain = [
  {
    year: "Management",
    position: " Time Management and Organization",
    compnayName: "Goldenmace IT Solutions",
    details: `Ability to manage multiple projects and meet deadlines.
    Strong organizational skills to keep design assets, files, and project documentation in order.
    Attention to detail to ensure accuracy and consistency in design deliverables.`,
  },
  {
    year: "Learn",
    position: " Continuous Learning",
    compnayName: "Goldenmace IT Solutions",
    details: `Eagerness to stay updated with the latest web design trends, technologies, and tools.Willingness to learn new skills and adapt to evolving design practices`,
  },
  {
    year: "Work",
    position: "Portfolio",
    compnayName: "Goldenmace IT Solutions",
    details: `I have worked on more than 40 projects, including several crash projects. Demonstrated ability to create visually appealing and user-friendly websites.Responsive and mobile-friendly design work .Evidence of attention to detail in design implementation.`,
  },
];

const Experiences = () => {
  return (
    <ul>
      {experienceMain.map((val, i) => (
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

export default Experiences;
