import "./leftsidenav.css";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>

         <li>
          <NavLink to='/' className={({isActive}) => isActive ? "nav-item active" : "nav-item"} >
          <img src="/icons/explore.png" alt="" />
          <span>Explore</span>
          </NavLink>
         </li>

          <li>
            <NavLink to="/models" className="nav-item">
              <img src="/icons/models.png" alt="" />
              <span>Models</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/casting" className="nav-item">
              <img src="/icons/casting.png" alt="" />
              <span>Casting</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu" className="nav-item">
              <img src="/icons/menu.png" alt="" />
              <span>Menu</span>
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default LeftSideNav;