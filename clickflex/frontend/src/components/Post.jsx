import React from 'react'
import { FaEllipsisH, FaHeart, FaRegComment } from 'react-icons/fa'

const Post = ({post}) => {
  return (
    <div className='post'>
        <div className='post-header'>
            <div className='user'>
                <img src={post.userImage} alt={post.username} />
                <span>{post.username}</span>
            </div>
            <span className='dots'><FaEllipsisH /></span>
        </div>
        <img className='post-img' src={post.postImage} alt="" />

        <div className='post-actions'>
            <span className='like-icon'><FaHeart /></span>
            <span className='comment-icon'><FaRegComment /></span>
        </div>
        <p className='likes'>{post.likes} likes</p>
        <p className='caption'>{post.caption}</p>
        <p className='comments'>view all {post.comments} comments</p>

        <div className='add-comment'>
            <img src={post.userImage} alt={post.username} />
            <input type="text" placeholder='add a comment' />
        </div>
        <p className='time'>{post.time}</p>
      
    </div>
  )
}

export default Post
