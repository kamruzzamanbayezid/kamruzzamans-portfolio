import { useGSAP } from "@gsap/react";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Pages/Sections/AboutMe/AboutMe";
import Contact from "./Pages/Sections/Contact/Contact";
import Home from "./Pages/Sections/Home/Home";
import Projects from "./Pages/Sections/Projects/Projects";
import Skills from "./Pages/Sections/Skills/Skills";
import Marquee from "./UI/Marquee/Marquee";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { setDocumentTitle } from "./Utils/TitleUtils";

const websiteName = "Portfolio of mdhasankha";

export default function App() {
  const navRef = useRef();
  const [activeSection, setActiveSection] = useState("home");

  useGSAP(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.6,
        });
      } else {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.6,
        });
      }
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.getAttribute("data-title");
        }
      });

      setDocumentTitle(currentSection, websiteName);
      setActiveSection(currentSection.toLowerCase());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the title on page load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-primary">
      {/* <!-- navbar --> */}
      <header ref={navRef} className="sticky top-0 bg-primary z-50">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </header>

      {/* <!-- home --> */}
      <section data-title="Home" id="home" className="py-20">
        <Home />
      </section>

      {/* <!-- marquee --> */}
      <section data-title="Home" className="bg-btn-primary py-10 lg:py-24 ">
        <div className="border-t-[1px] border-b-[1px] border-white lg:pb-6">
          <Marquee />
        </div>
      </section>

      {/* <!-- about me --> */}
      <section data-title="About" id="about" className="py-24 bg-secondary">
        <AboutMe />
      </section>

      {/* <!-- skills --> */}
      <section data-title="Skills" id="skills" className="py-24">
        <Skills />
      </section>

      {/* <!-- projects --> */}
      <section data-title="Projects" id="projects" className="py-24">
        <Projects />
      </section>

      {/* <!-- Contact --> */}
      <section data-title="Contact" id="contact" className="py-24">
        <Contact />
      </section>
    </div>
  );
}
