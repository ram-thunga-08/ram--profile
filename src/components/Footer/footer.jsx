import "./footer.scss";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        RAM TUNGA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#work-experience">Work Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/rama-t-799a78256"
          target="_blank"
          rel="noreferrer"
          className="social-media-icons"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ram-thunga-08"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;ramtunga. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
