import './Banner.css'

import React from 'react'

const Banner = () => {
  return (
    <>
        <div className='banner-div'>
            <div className="overlay">
                <h1 id="banner-title">Wellcome to our Blogs Website</h1>
            </div>
            <img src="/media/Banner.jpg" alt="" width={'100%'} height={'750px'} style={{objectFit:"cover"}}/>
        </div>    
    </>
  )
}

export default Banner