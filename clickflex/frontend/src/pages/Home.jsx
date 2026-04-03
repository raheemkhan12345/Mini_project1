import React from "react";

import "./home.css";

const Home = () => {
  return (
    <div className="home">

      {/* LEFT FEED */}
      <div className="feed">

        {/* BANNER */}
        <div className="banner">
          <div className="banner-text">
            <h1>How To Become A Model ?</h1>
            <p>Ever Thought About Modeling ?</p>
            <p>Become A Model Now</p>

            <button>Learn More</button>
          </div>
        </div>

        {/* POST 1 */}
        <div className="post">
          <div className="post-header">
            <div className="user">
              <img src="/images/model1.jpg" alt="" />
              <span>Amir</span>
            </div>
            <span className="dots">•••</span>
          </div>

          <img
            className="post-img"
            src="/images/post1.jpg"
            alt=""
          />

          <div className="post-actions">
            <span>❤️</span>
            <span>💬</span>
          </div>

          <p className="likes">100 likes</p>
          <p className="caption">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.more...
          </p>

          <p className="comments">View all 16 comments</p>

          <div className="add-comment">
            <img src="/images/model1.jpg" alt="" />
            <input type="text" placeholder="Add a Comment" />
          </div>

          <p className="time">30 minutes ago</p>
        </div>

        {/* POST 2 */}
        <div className="post">
          <div className="post-header">
            <div className="user">
              <img src="/images/model2.jpg" alt="" />
              <span>Ahmed</span>
            </div>
            <span className="dots">•••</span>
          </div>

          <img
            className="post-img"
            src="/images/post2.jpg"
            alt=""
          />

          <div className="post-actions">
            <span>❤️</span>
            <span>💬</span>
          </div>

          <p className="likes">100 likes</p>
          <p className="caption">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.more...
          </p>

          <p className="comments">View all 16 comments</p>

          <div className="add-comment">
            <img src="/images/model2.jpg" alt="" />
            <input type="text" placeholder="Add a Comment" />
          </div>

          <p className="time">30 minutes ago</p>
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="rightbar">
        <div className="suggested">
          <div className="suggested-header">
            <h3>Suggested for you</h3>
            <span>See all</span>
          </div>

          {["Muhammad", "Ahmed", "Amir", "Wally", "Fahim"].map((name, i) => (
            <div className="suggested-user" key={i}>
              <div className="user">
                <img src={`/images/model${i + 1}.jpg`} alt="" />
                <span>{name}</span>
              </div>
              <button>Follow</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
