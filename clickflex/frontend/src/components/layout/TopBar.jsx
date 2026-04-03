import "./topbar.css"; 
import { FaPlus } from "react-icons/fa";
import storiesData from "../../data/storiesData";

const TopBar = () => {
  return (
    <div className="topbar">

      <div className="topbar-left">
        <img src="/icons/logo.png" alt="logo" className="logo" />
      </div>

      <div className="stories">

        <div className="story add-story">
          <div className="circle">
            <img src="/images/user.png" alt="" />
            <span className="plus"><FaPlus /></span>
          </div>
        </div>

        {storiesData.map((item) => (
          <div className="story" key={item.id}>
            <div className="circle">
              <img src={item.image} alt="story" />
            </div>
          </div>
        ))}

      </div>

      <div className="topbar-right">
        <div className="search-box">
          <img src="/icons/search.png" alt="" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="bell">
          <img src="/icons/bell.png" alt="" />
        </div>
      </div>

    </div>
  );
};

export default TopBar;