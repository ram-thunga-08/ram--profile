import "./about.scss";
import myProfile from "../../assets/images/myImage.jpg";
import { BsAward } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
import { aboutData } from "./aboutData";

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="content flex-centered">
          <span>About me</span>
        </div>
        <div className="about-me-section">
          <div className="about-me-left">
            <div className="about-me-pic">
              <img src={myProfile} alt="My Profile" />
            </div>
            <div className="about__cards">
              <article className="about__card">
                <BsAward className="about__card-icon" />
                <h5>Experience</h5>
                <small>{aboutData.experienceCount}</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__card-icon" />
                <h5>Projects</h5>
                <small>{aboutData.projectsCount}</small>
              </article>
            </div>
          </div>
          <div className="about-me-description">
            <p>{aboutData.firstParagraph}</p>
            <p className="second-paragraph">{aboutData.secondParagraph}</p>
          </div>
        </div>
        <div className="btn-container-centered">
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
