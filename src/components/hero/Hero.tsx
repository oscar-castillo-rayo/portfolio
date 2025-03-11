import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Oscar Castillo</span>
        </h1>
        <h2 className="hero-subtitle">
          I'm <span>a Full Stack Developer</span>
        </h2>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Watch projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact me
          </a>
        </div>
        <div className="hero-image">
          <div className="background">
            <div className="gradient-decoration decoration-1"></div>
            <div className="gradient-decoration decoration-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
