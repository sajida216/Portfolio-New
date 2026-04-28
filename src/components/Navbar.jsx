import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <div className="circle">S</div> */}
        <div>
          <h3 className="name">Ayishath Sajidha</h3>
          <p style={{fontWeight:"bold"}}>MERN DEVELOPER</p>
        </div>
      </div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">HOME</NavLink>
        <NavLink to="/about" className="nav-link">ABOUT</NavLink>
        <NavLink to="/skills" className="nav-link">SKILLS</NavLink>
        <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
        <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
      </div>

      
    </nav>
  );
}

export default Navbar;