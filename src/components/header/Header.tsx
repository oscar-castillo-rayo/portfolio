import "./header.css";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

interface Props {
  darkMode: boolean;
  toogleDarkMode: () => void;
}

const Header = ({ darkMode, toogleDarkMode }: Props) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Portfolio</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="theme-toogle"
        onClick={toogleDarkMode}
        aria-label={darkMode ? "Light Mode" : "Dark Mode"}
      >
        {darkMode ? <IoIosSunny color="gold" /> : <IoIosMoon />}
      </button>
    </header>
  );
};

export default Header;
