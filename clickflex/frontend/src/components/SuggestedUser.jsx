import React, { useEffect, useState } from 'react'


const SuggestedUser = ({user , onFollow}) => {
    const [isFollowing, setIsFollowing] = useState(user.isFollowing);

    useEffect(() => {
        setIsFollowing(user.isFollowing);
    }, [user.isFollowing]);

// handle follow button click
    const handleFollow = () =>{
        onFollow(user.id);
    };
  return (
    <div className='suggested-user'>
      <div className='user'>
        <img src={user.userImage} alt={user.username} />
        <span>{user.username}</span>
      </div>

      <button onClick={handleFollow}>
        {user.isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  )
}

export default SuggestedUser
