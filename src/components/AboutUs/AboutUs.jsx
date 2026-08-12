import { Link, Outlet } from "react-router-dom";

import "./AboutUs.css";

function AboutUs() {
  return (
    <main className="about-us">
      <ul className="links">
        <li>
         <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
      </ul>
      <p> you can find out more information about our site here.</p>
      <Outlet />
    </main>
  );
}

export default AboutUs;
