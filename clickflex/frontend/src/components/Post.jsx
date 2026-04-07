import React, { useState } from "react";
import { FaEllipsisH, FaHeart, FaRegComment } from "react-icons/fa";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const totalComments = post.comments + comments.length;

  // handle like button click
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    setComments((prev) => [...prev, { text: comment, user: "You" }]);
    setComment("");
  };

  return (
    <div className="post">
      {/* header */}
      <div className="post-header">
        <div className="user">
          <img src={post.userImage} alt={post.username} />
          <span>{post.username}</span>
        </div>
        <span className="dots">
          <FaEllipsisH />
        </span>
      </div>

      {/* image */}
      <img className="post-img" src={post.postImage} alt={post.caption} />

      {/* actions */}
      <div className="post-actions">
        <span
          className="like-icon"
          onClick={handleLike}
          style={{ color: liked ? "#EA3B12" : "#fff" }}
        >
          <FaHeart />
        </span>
        <span className="comment-icon">
          <FaRegComment />
        </span>
      </div>
      <p className="likes">{likes} likes</p>
      <p className="caption">{post.caption}</p>
      <p className="comments">view all {totalComments} comments</p>

      {/* show new comments */}
      {comments.map((cmt, index) => (
        <p key={Date.now() + index} className="new-comment">
          <strong>{cmt.user}:</strong> {cmt.text}
        </p>
      ))}

      {/* add comment  */}
      <form className="add-comment" onSubmit={handleComment}>
        <img src={post.userImage} alt={post.username} />
        <input
          type="text"
          placeholder="add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        
      </form>
      <p className="time">{post.time}</p>
    </div>
  );
};

export default Post;
