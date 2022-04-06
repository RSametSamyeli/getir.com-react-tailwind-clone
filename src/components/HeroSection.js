/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Slider from 'react-slick'
import ReactFlagsSelect from 'react-flags-select'
import { FaFacebook } from 'react-icons/fa'
import { useWindowWidth } from '@react-hook/window-size'

const HeroSection = () => {
  const [selected, setSelected] = useState('TR')
  const windowWidth = useWindowWidth()

  const phones = {
    US: '+1',
    DE: '+22',
    TR: '+90',
    IT: '+5',
    IN: '+7',
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  }

  return (
    <div className="relative h-auto md:h-500  ">
      {windowWidth >= 768 && (
        <div className=" relative md:absolute bg-gradient-to-r from-purple-600 to-transparent inset-0  z-10"></div>
      )}
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full  object-cover  bg-center  no-repeat   h-500   "
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            ></img>
          </div>

          <div>
            <img
              className="w-full object-cover  bg-center  no-repeat h-500 "
              src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            ></img>
          </div>

          <div>
            <img
              className="w-full  object-cover bg-center  no-repeat    h-500"
              src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            ></img>
          </div>
        </Slider>
      )}
      <div className="md:container  mx-auto    ">
        <div className="relative md:absolute  top-0 z-20  mx-auto   flex justify-between items-center  container md:px-4  w-full ">
          <div className="     md:h-500 flex justify-between  items-center  w-full">
            <div className="hidden md:block ">
              <img
                src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                alt=""
              />
              <h3 className="font-semibold  text-4xl  text-white mt-8">
                Dakikalar içinde kapınızda
              </h3>
            </div>
            <div className="w-full  md:w-96 rounded-lg  p-6  bg-white  sm:shadow-lg sm:border-2 ">
              <h3 className="text-primary-brand-color text-center font-semibold mb-4">
                Giriş Yap Veya Kayıt Ol
              </h3>

              <div className="grid gap-y-4">
                <div className="flex gap-x-2">
                  <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    customLabels={phones}
                    placeholder="Select Language"
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="flag-select"
                  />
                  <label className="flex-1 relative group  block">
                    <input
                      required
                      className="w-full h-14 px-4 rounded bg-white border-2 border-gray-200 transition-colors cursor-pointer group-hover:border-primary-brand-color  outline-none pt-4 peer "
                    />
                    <span className="absolute h-full top-0 left-0 flex items-center mx-4 text-sm text-gray-400 transition-all peer-focus:h-5  peer-focus:text-primary-brand-color peer-focus:text-xs  peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs   ">
                      Telefon Numarası
                    </span>
                  </label>
                </div>
                <button className="bg-brand-yellow h-12 flex items-center justify-center w-full text-sm text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color transition-colors rounded-lg  font-semibold">
                  Telefon numarası ile devam et
                </button>
                <hr className="h-[1px] bg-gray-300 my-2" />
                <button className="bg-blue-700 bg-opacity-10 px-4 text-opacity-80 h-12 flex items-center  w-full text-sm text-primary-brand-color hover:text-white hover:bg-blue-700 transition-colors rounded-lg  font-semibold">
                  <FaFacebook size={24} />{' '}
                  <span className="mx-auto">Facebook ile devam et</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
