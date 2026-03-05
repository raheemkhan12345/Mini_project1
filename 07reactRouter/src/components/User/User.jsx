import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-gray-800 bg-green-600 text-xl font-bold p-5 '>
      user: {userid}
    </div>
  )
}

export default User
