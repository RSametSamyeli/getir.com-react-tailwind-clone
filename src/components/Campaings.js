import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Banners from '../api/banners.json'
import Title from '../components/ui/Title'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

//Slider
function NextButton({ onClick, className }) {
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  )
}
function PrevButton({ onClick, className }) {
  return (
    <button className={`${className} text-purple-700`} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  )
}

const Campaings = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    setBanners(Banners)
  }, [])

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    arrows: true,

    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,

    // Responsive
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="md:container mx-auto md:py-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>

      <Slider className="-mx-4 " {...settings}>
        {banners &&
          banners.map((banner, index) => (
            <div key={banner.id} className="px-2">
              <picture className=" block">
                <img src={banner.image} className="rounded-lg  " />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default Campaings
