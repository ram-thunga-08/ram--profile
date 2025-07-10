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
                <small>8+ Projects</small>
              </article>
            </div>
            <p>
              Hi, I'm Ramakrishna Tunga, a Seasoned Senior Front-End Developer
              with over 8 years of experience delivering high-performance,
              scalable, and user-centric web applica􀆟ons using React.js,
              Next.js, TypeScript, and Node.js. Adept at building clean,
              reusable, and testable components using modern UI frameworks such
              as Tailwind CSS and Material UI. Proven exper􀆟se in performance
              op􀆟miza􀆟on, responsive design, and accessibility (WCAG), with a
              strong command of HTML5, CSS3, and modern JavaScript (ES6+).
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
