import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

import "./AboutUs.css";

function AboutUs() {
  const navigate = useNavigate();

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
       <button type="button" onClick={() => navigate("/")}>
        Back to the home page
      </button>
    </main>
  );
}

export default AboutUs;
