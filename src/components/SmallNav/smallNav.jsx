import "./smallNav.scss";
import { IoHomeOutline } from "react-icons/io5";
import { BiUser, BiBookContent, BiBookBookmark } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";

const SmallNav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="small-nav">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        aria-label="Home"
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="About"
      >
        <BiUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        aria-label="skills"
      >
        <BiBookBookmark />
      </a>
       <a
        href="#work-experience"
        onClick={() => setActiveNav("#work-experience")}
        className={activeNav === "#work-experience" ? "active" : ""}
        aria-label="Work Experience"
      >
        <BiBookContent />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Contact"
      >
        <FiPhoneCall />
      </a>
    </nav>
  );
};

export default SmallNav;
