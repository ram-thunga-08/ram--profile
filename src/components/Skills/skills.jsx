import "./skills.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { useState } from "react";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Expert" },
        { name: "SCSS", level: "Advanced" },
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "Redux Toolkit", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "React Native", level: "Intermediate" },
      ],
    },
    {
      category: "UI Libraries & Tools",
      skills: [
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Material UI", level: "Advanced" },
        { name: "Storybook", level: "Intermediate" },
        { name: "Plotly.js", level: "Intermediate" },
        { name: "jsPDF", level: "Intermediate" },
        { name: "React-PDF", level: "Intermediate" },
      ],
    },
    {
      category: "Testing & Quality",
      skills: [
        { name: "Jest", level: "Advanced" },
        { name: "Cypress", level: "Intermediate" },
        { name: "Mocha", level: "Intermediate" },
        { name: "Enzyme", level: "Intermediate" },
        { name: "React Testing Library", level: "Advanced" },
      ],
    },
    {
      category: "API & Auth Tools",
      skills: [
        { name: "OAuth 2.0", level: "Advanced" },
        { name: "JWT", level: "Advanced" },
        { name: "Swagger", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "GraphQL", level: "Intermediate" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Azure Repos", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Jenkins", level: "Intermediate" },
        { name: "Grafana", level: "Intermediate" },
        { name: "ELK Stack", level: "Intermediate" },
      ],
    },
    {
      category: "Other",
      skills: [
        { name: "WebSockets", level: "Intermediate" },
        { name: "AEM CMS", level: "Intermediate" },
        { name: "Jira", level: "Advanced" },
        { name: "Confluence", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Responsive Design", level: "Expert" },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills">
      <div className="container skills__container">
        <div className="content flex-centered">
          <span>Technical Skills</span>
        </div>
        <div className="skills__block">
          <div className="skills__categories">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className={`skills__category ${
                  selectedCategory === index ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(index)}
              >
                {category.category}
              </div>
            ))}
          </div>
          <div className="skills__details-container">
            <h3>{skillsData[selectedCategory].category}</h3>
            <div className="skills__content">
              {skillsData[selectedCategory].skills.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <HiBadgeCheck className="skills__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
