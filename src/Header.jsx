import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="minimal-header">
      <div className="header-inner">

        <h1 className="site-title">
          Web-Based UI with Improved UX for Intuitive Interactions
        </h1>
        <Navbar/>
        
      </div>
    </header>
  );
}
