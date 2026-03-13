import React from 'react'
import { bannerHomeStyles } from '../assets/dummyStyles'
import Navbar from './Navbar'
import video from '../assets/bannervideo.mp4'

const BannerHome = () => {
  const videoRef = useRef(null);
  return (
    <div className={bannerHomeStyles.container}>
        <div className={bannerHomeStyles.navbarWrapper}>
            <Navbar />
        </div>

    {/* bg video */}

    <div className={bannerHomeStyles.videoContainer}>
      <video ref={videoRef}></video>
    </div>

    </div>

    
  )
}

export default BannerHome
