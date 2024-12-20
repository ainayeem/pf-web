import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-[#eef2ff]">
        <div id="about-me">
          <AboutMe />
          <PersonalInfo />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      {/* <div className="bg-white h-[300vh]"></div> */}
    </div>
  );
}
