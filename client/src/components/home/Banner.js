import React from 'react'
import './Banner.css';
import Carousel from 'react-material-ui-carousel'

const data = [
  "/Images/hero-1.jpg",
  "/Images/hero-2.jpg",
  "/Images/hero-3.jpg",
  "/Images/hero-4.jpg",
  "/Images/hero-5.jpg",
  "/Images/hero-6.jpg"
];

const Banner = () => {
  return (
    <>
    <Carousel className="carousel" 
    autoPlay={true} 
    animation='slide'
    indicators={false}
    navButtonsAlwaysVisible={false}
    cycleNavigation={true}
    navButtonsProps={{
      style:{
        backgroundColor:'transparent',
        color:'black',
        height:"250px",
        width:"87px",
        margin:"0 auto",    
        marginTop:'0 auto',    
        cursor:'pointer',
        borderRadius:"5px",
        border:"2px solid white",
        }
    }}
    navButtonsWrapperProps= {{
      style:{
      position: "absolute",
      height:"40px",
      backgroundColor: "transparent",
      top: "0px",
      }
    }}
    >
     { data && Object.keys(data).length &&
      data.map((image,i)=>{
        return(
          <>
          <img src={image} alt="" className='banner-img'/>
          </>
        )
      })
     }
    </Carousel>
    <div>
       <div class="hero-section">
            <div class="hero-mess">
                <p><center>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="" class="link">Click here to go to amazon.in</a></center></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner
