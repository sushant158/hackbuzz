import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Prizes from "./components/Prizes";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Schedule />
        <Prizes />
        <Register />
      </main>

      <footer>
        <div className="brand">
          <span>H</span>ACK<span>BUZZ</span>
        </div>

        <p>Build. Hack. Buzz. © 2026</p>
      </footer>
    </>
  );
}

export default App;