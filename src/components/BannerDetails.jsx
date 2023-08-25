import React from 'react'


const BannerDetails = () => {


  return (
    <div  className={'banner-container'}>

    <img src = "https://picsum.photos/2400/900" 
     className='faded-image'/>

    <div className = {'banner-details'}>
        <h1  style= {{fontFamily: 'Slackside One', fontSize: '10rem'}}> Flatiron</h1>
        <h2><em> Tiff's Phase 2 project </em></h2>
        <p>  In the heart of the digital realm, a captivating tale unfolds as "Flatiron" : Tiff's Phase 2 Journey" invites you to witness the incredible transformation of a project from its humble beginnings to its soaring heights. This inspirational documentary chronicles the journey of Tiff's Phase 2 project, an endeavor that defies limits and redefines what's possible in the world of web development. Journey alongside Tiff as she embarks on an extraordinary adventure through code and creativity. "Flatiron" takes you behind the scenes, giving you an intimate look at the challenges, triumphs, and defining moments that shaped this remarkable project. From the initial concept to the intricate design, every pixel and line of code reveals a story of dedication and innovation.</p>
        <button className = {'button-play'}> <i className="fa-solid fa-play" style={{fontSize:'2rem'}}></i> Play </button>
        <button className = {'button-more'}>  <i className="fa-solid fa-circle-info" style={{fontSize:'2rem'}}></i> More Info </button>
    </div>

    </div>
  )
}

export default BannerDetails