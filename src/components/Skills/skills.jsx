import "./skills.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";

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
        { name: "Node.js", level: "Advanced" },
        { name: "NestJS", level: "Intermediate" },
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
      category: "AI Tools",
      skills: [
        { name: "OpenAI API", level: "Advanced" },
        { name: "Claude API", level: "Advanced" },
        { name: "TensorFlow.js", level: "Intermediate" },
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
      category: "DevOps & Other Tools",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Azure Repos", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Jenkins", level: "Intermediate" },
        { name: "Confluence", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <section id="skills">
      <div className="container skills__container">
        <div className="content flex-centered">
          <span>Technical Skills</span>
        </div>
        <div className="skills__block">
          {/* Desktop Categories */}
          {!isMobile && (
            <div className="skills__categories desktop-categories">
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
          )}

          {/* Mobile Dropdown */}
          {isMobile && (
            <div className="skills__mobile-dropdown">
              <div
                className={`skills__mobile-selected ${
                  isMobileDropdownOpen ? "active" : ""
                }`}
                onClick={toggleMobileDropdown}
              >
                <span>{skillsData[selectedCategory].category}</span>
                {isMobileDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {isMobileDropdownOpen && (
                <div className="skills__mobile-options">
                  {skillsData.map((category, index) => (
                    <div
                      key={index}
                      className={`skills__mobile-option ${
                        selectedCategory === index ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedCategory(index);
                        setIsMobileDropdownOpen(false);
                      }}
                    >
                      {category.category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

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
