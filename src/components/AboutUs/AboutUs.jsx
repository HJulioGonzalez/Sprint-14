import "./AboutUs.css";
import "./AboutContent.css"
import { Link, Outlet } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <ul>
        <li>
        <Link to="site-history">Historia</Link>
      </li>
      <li>
        <Link to="site-mission">Misión</Link>
      </li>
      </ul>
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <Outlet/>
    </div>
  );
}

export default AboutUs;
