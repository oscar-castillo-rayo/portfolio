import { useEffect, useState } from "react";
import { About, Contact, Footer, Header, Hero, Projects, Skills } from ".";
import "../index.css";
import "./Portfolio.css";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Tema actual:", darkMode ? "oscuro" : "claro");

    // Aplicar clase al elemento HTML o documentElement (mejor que body)
    if (darkMode) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  }, [darkMode]);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`portfolio ${darkMode ? "dark-theme" : "light-theme"}`}>
      <Header darkMode={darkMode} toogleDarkMode={toogleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <div className="background">
        <div className="gradient-decoration decoration-1"></div>
        <div className="gradient-decoration decoration-2"></div>
      </div>
    </div>
  );
}

export default Portfolio;
