import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, display: "flex", gap: 20 }}>
      <Link to="/">Skeleton View</Link>
      <Link to="/textured">Textured View</Link>
      <Link to="/fps">FPS View</Link>
    </nav>
  );
}
