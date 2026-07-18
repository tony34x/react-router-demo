import "./Dashboard.css";
import { link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Emoji Critic — All About Emojis</h1>
      <p>
        The #1 Destination for Emoji Reviews on the World Wide Web Since 2020!
      </p>
      <link to="/reviews">click here to see my latest reviews!</link>
    </div>
  );
}

export default Dashboard;
