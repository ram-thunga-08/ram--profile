import About from "../About/about";
import Contact from "../Contact/contact";
import Navbar from "../Navbar/navbar";
import Waves from "../Waves/waves";
import Footer from "../Footer/footer";
import "./layout.scss";
import SmallNav from "../SmallNav/smallNav";
import Skills from "../Skills/skills";
import WorkExperience from "../WorkExperience/workExperience";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Waves />
      <SmallNav />
      <About />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
