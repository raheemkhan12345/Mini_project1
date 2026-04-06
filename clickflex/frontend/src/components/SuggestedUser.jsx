import React, { useState } from 'react'


const SuggestedUser = ({user}) => {
    const [isFollowing, setIsFollowing] = useState(user.isFollowing);

// handle follow button click
    const handleFollow = () =>{
        setIsFollowing(!isFollowing);
    }
  return (
    <div className='suggested-user'>
      <div className='user'>
        <img src={user.userImage} alt={user.username} />
        <span>{user.username}</span>
      </div>

      <button onClick={handleFollow}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  )
}

export default SuggestedUser
