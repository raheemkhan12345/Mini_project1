import React from "react";
import "./home.css";
import { posts, suggestedUsers } from "../data/data";
import Post from "../components/Post";
import SuggestedUser from "../components/SuggestedUser";

const Home = () => {
  return (
    <div className="home">

      <div className="feed">

        {/* banner */}
        <div className="banner">
          <div className="banner-text">
            <h1>How To Become A Model ?</h1>
            <p>Ever Thought About Modeling ?</p>
            <p>Become A Model Now</p>
            <button>Learn More</button>
          </div>
        </div>

        {/* posts */}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}

      </div>

      {/* right sidebar */}
      <div className="rightbar">

        <div className="suggested">
          <div className="suggested-header">
            <h3>Suggested for you</h3>
            <span>See all</span>
          </div>

          {/* suggested users */}
          {suggestedUsers.map((user) => (
            <SuggestedUser key={user.id} user={user} />
          ))}

        </div>

      </div>

    </div>
  );
};

export default Home;