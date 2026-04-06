import React from "react";
import { FaHeart, FaRegComment, FaEllipsisH } from "react-icons/fa";
import "./home.css";
import { posts, suggestedUser } from "../data/data";
import SuggestedUser from "../components/SuggestedUser";

const Home = () => {
  return (
    <div className="home">
      {/*  */}
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

        {/* posts section  */}

        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-header">
              <div className="user">
                <img src={post.userImage} alt={post.username} />
                <span>{post.username}</span>
              </div>
              <span className="dots">
                <FaEllipsisH />
              </span>
            </div>

            <img className="post-img" src={post.postImage} alt={post.username} />

            <div className="post-actions">
              <span className="like-icon">
                <FaHeart />
              </span>
              <span className="comment-icon">
                <FaRegComment />
              </span>
            </div>

            <p className="likes">{post.likes} likes</p>
            <p className="caption">{post.caption}</p>
            <p className="comments">view all {post.comments} comments</p>

            <div className="add-comment">
              <img src={post.userImage} alt={post.username} />
              <input type="text" placeholder="Add a comment" />
            </div>

            <p className="time">{post.time}</p>
          </div>
        ))}
      </div>

      {/* right sidebar */}

      <div className="rightbar">
        <div className="suggested">
          <div className="suggested-header">
            <h3>Suggested for you</h3>
            <span>see all</span>
          </div>

          {suggestedUser.map((user) =>(
            <SuggestedUser key={user.id} user={user} />
          ) )}
        </div>

      </div>
      
    </div>
  );
};

export default Home;
