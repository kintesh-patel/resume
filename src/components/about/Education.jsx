import React from "react";

const experienceMain = [
  {
    year: "Communication",
    position: "Communication and Collaboration",
    compnayName: "Innoquad Technologies",
    details: `Strong communication skills to understand client requirements and translate them into web applications. Ability to collaborate effectively with other team members, such as developers and project managers. Additionally, adept at handling client support tickets regarding various issues, ensuring timely resolution and client satisfaction.`,
  },
  {
    year: "Learn",
    position: " Continuous Learning",
    compnayName: "Innoquad Technologies",
    details: `Eagerness to stay updated with the latest backend development trends, technologies, and tools.Willingness to learn new skills and adapt to evolving backend practices.`,
  },
  {
    year: "Work",
    position: "Portfolio",
    compnayName: "Innoquad Technologies",
    details: `I have contributed to over 40 projects, including various critical assignments, showcasing my ability to handle high-pressure situations effectively. Demonstrated proficiency in building robust and efficient backend systems. Evidence of meticulous attention to detail in backend implementation, ensuring reliability and optimal performance across various platforms.`,
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
