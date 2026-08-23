import "./AboutMe.css";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();
  // Add the classNames shown below so the styles are applied.
  // Add the links as shown as shown below.
  return (
    <div className="about">
      <ul className="links">
        <li>
          <Link to="my-story">My Story</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">My Contact Info</Link>
        </li>
      </ul>
      <p>I&apos;m a simple person. I see Emojis, I write reviews.</p>
      <Outlet />
        <button type="button" onClick={() => navigate("/")}>
        Back to the review list
      </button>
    </div>
  );
}

export default AboutMe;
