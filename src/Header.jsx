import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="minimal-header">
      <div className="header-inner">

        <h1 className="site-title">
          Web-Based UI with Improved UX for Intuitive Interactions
        </h1>

        <nav className="nav">
          <Link to="/" className="nav-item">Skeleton View</Link>
          <Link to="/texture" className="nav-item">Textured View</Link>
          <Link to="/fps" className="nav-item">FPS View</Link>
        </nav>
        
      </div>
    </header>
  );
}
