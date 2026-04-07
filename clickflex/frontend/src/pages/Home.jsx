import React, { useState } from "react";
import "./home.css";
import { posts, suggestedUsers as initialSuggestedUsers } from "../data/data";
import Post from "../components/Post";
import SuggestedUser from "../components/SuggestedUser";

const Home = () => {
  // for handling local state of suggested users.
  const [suggestedUsers, setSuggestedUsers] = useState(initialSuggestedUsers);

  // handle follow/unfollow
  const handleFollowChange = (id) => {
    // for specific user 
    const updatedUsers = suggestedUsers.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isFollowing: !user.isFollowing
        };
      }
      return user;
    });

    setSuggestedUsers(updatedUsers);

    // agar API call hai to yahan karo
    // example: api.followUser(id)
  };

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
            <SuggestedUser
              key={user.id}
              user={user}
              onFollow={handleFollowChange} // yahan pass karenge
            />
          ))}

        </div>
      </div>

    </div>
  );
};

export default Home;