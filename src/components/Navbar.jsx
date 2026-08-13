import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <a className="brand" href="#home">
        <span>H</span>ACK<span>BUZZ</span>
      </a>

      <button
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
        <a href="#prizes">Prizes</a>
        <a href="#register">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;