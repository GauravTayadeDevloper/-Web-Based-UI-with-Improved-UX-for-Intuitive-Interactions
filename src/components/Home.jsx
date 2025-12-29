import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Web-Based UI with Improved UX for Intuitive Interactions
      </h1>

      <p className="home-subtitle">
        An interactive 3D visualization project built using modern web
        technologies to explore intuitive user interaction in virtual spaces.
      </p>

      <section className="home-section">
        <h2>📌 Project Overview</h2>
        <p>
          This project visualizes the Computer Science department building using
          3D graphics. It provides multiple viewing modes including a structural
          skeleton view, a fully textured walkthrough, and a first-person
          exploration mode.
        </p>
      </section>

      <section className="home-section">
        <h2>💡 Motivation</h2>
        <p>
          While learning JavaScript, I was encouraged by a college professor to
          explore Three.js. After understanding the basics, I decided to model
          my department’s new building digitally. Since the old building may be
          abandoned in the future, this project serves as a virtual
          representation and learning experiment.
        </p>
      </section>

      <section className="home-section">
        <h2>🛠 Technologies Used</h2>
        <ul>
          <li>React.js & React Router</li>
          <li>Three.js & WebGL</li>
          <li>JavaScript (ES6+)</li>
          <li>Vite</li>
          <li>GitHub Pages</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>🔗 Explore the Project</h2>
        <div className="home-links">
          <Link to="/skeleton" className="home-btn">Skeleton View</Link>
          <Link to="/texture" className="home-btn">Textured View</Link>
          <Link to="/fps" className="home-btn">FPS View</Link>
        </div>

        <div className="home-external-links">
          <a
            href="https://github.com/GauravTayadeDevloper/-Web-Based-UI-with-Improved-UX-for-Intuitive-Interactions"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>

          <a
            href="https://gauravtayadedevloper.github.io/-Web-Based-UI-with-Improved-UX-for-Intuitive-Interactions/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </section>
    </div>
  );
}
