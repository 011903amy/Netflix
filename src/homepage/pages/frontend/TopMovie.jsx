import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from './MovieItem';

const TopMovie = () => {
  const topMovieArray =[
    {
      img:"kdrama-1.jpg",
      year:"2017",
      genre:"Sitcom",
      duration:"7 seasons",
      title:"Young Sheldon",

    },
    {
      img:"kdrama-2.jpg",
      year:"2019",
      genre:"Drama",
      duration:"2 seasons",
      title:"Euphoria",
    },
    {
      img:"kdrama-3.jpg",
      year:"2023",
      genre:"History",
      duration:"1 seasin",
      title:"Queen Charlotte",
    },
    {
      img:"kdrama-4.jpg",
      year:"2021",
      genre:"Action",
      duration:"2 seasons",
      title:"Arcane",
    },
    {
      img:"kdrama-5.jpg",
      year:"2023",
      genre:"Action/Comedy",
      duration:"1h 50m",
      title:"Spy × Family Code: White",
    }
  ]
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    
  };
  return (
    <section>
      <div className='bg-primary py-[5rem]'>
        <div className="container">
          <h2 className='text-white'>Korean Movie</h2>
          <Slider {...settings}>
            {topMovieArray.map((item,key) => (
              <MovieItem item={item} key={key}/>
            ))}
          </Slider>
        </div>
      </div>
    </section>
    
  )
}

export default TopMovie