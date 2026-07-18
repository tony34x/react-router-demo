import { NavLink } from "react-router-dom";
import "./NavBar.css";



const customClassName = ({ isActive }) =>
  "menu__link" + (isActive ? " menu__link--active" : "");

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Emoji Reviews
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        About Me
      </NavLink>
    </nav>
  );
}

export default NavBar;
