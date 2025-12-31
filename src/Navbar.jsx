import { Link, useLocation } from "react-router-dom";
import "./Header.css";
export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <nav className="nav">
      {!isHome && (
        <Link to="/" className="nav-item">
          Home
        </Link>
      )}
      <Link to="/skeleton" className="nav-item">
        Skeleton View
      </Link>
      <Link to="/texture" className="nav-item">
        Textured View
      </Link>
      <Link to="/fps" className="nav-item">
        FPS View
      </Link>
    </nav>
  );
}
