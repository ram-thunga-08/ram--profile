import "./about.scss";
import myProfile from "../../assets/images/my-profile.jpeg";
import { BsAward } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="content flex-centered">
          <span>About me</span>
        </div>
        <div className="about-me-section">
          <div className="about-me-pic">
            <img src={myProfile} alt="My Profile" />
          </div>
          <div className="about-me-description">
            <div className="about__cards">
              <article className="about__card">
                <BsAward className="about__card-icon" />
                <h5>Experience</h5>
                <small>8+ Years Working</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__card-icon" />
                <h5>Projects</h5>
                <small>15+ Projects</small>
              </article>
            </div>
            <p>
              Hi, I'm Ramakrishna Tunga, a Senior Frontend Developer at Picton
              Mahoney Asset Management with over 8 years of experience
              delivering high-performance, scalable web applications. I
              specialize in React.js, Next.js, TypeScript, and modern UI
              frameworks like Tailwind CSS. My expertise includes performance
              optimization, responsive design, accessibility compliance (WCAG),
              and building clean, reusable, and testable components. I'm
              passionate about creating user-centric solutions that drive
              business value.
            </p>
            <a href="#contact" className="btn">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
