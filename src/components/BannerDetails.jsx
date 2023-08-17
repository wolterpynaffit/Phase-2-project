import React from 'react'

const BannerDetails = () => {
  return (
    <div  className={'banner-container'}>

    <img src = "https://www.freecodecamp.org/news/content/images/size/w1000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" 
      style={{ width: '100%', height: 'auto' }} className='faded-image'/>

    <div className = {'banner-details'}>
        <h1> Title </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nihil voluptatem enim nesciunt harum iste quo molestiae? Quisquam qui perspiciatis eos iure tempore vitae nulla magnam aliquid vero. Sed, blanditiis?</p>
        <button className = {'button-play'}> <i className="fa-solid fa-play" style={{fontSize:'2rem'}}></i> Play </button>
        <button className = {'button-more'}>  <i className="fa-solid fa-circle-info" style={{fontSize:'2rem'}}></i> More Info </button>
    </div>
        <div className={'shuffle-button'}>
           <button> Shuffle </button>
        </div>
    </div>
  )
}

export default BannerDetails