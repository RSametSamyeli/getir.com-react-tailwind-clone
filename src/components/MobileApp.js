import React from 'react'

const MobileApp = () => {
  return (
    <div className="md:container mx-auto bg-primary-brand-color bg-mobile-app-background  mt-7 lg:rounded-lg flex items-center justify-between">
      <div className="flex flex-col  text-center tgap-y-3 p-10 ">
        <h3 className="text-2xl text-white font-bold  tracking-tighter">
          Getir'i indirin!
        </h3>
        <p className="text-base text-white font-semibold ">
          istediğiniz ürünler dakikalar içinde kapınızda
        </p>
        <nav className="flex  gap-x-2 mt-5">
          <a href="#" className="transition-all hover:scale-95 transform">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a href="#" className="transition-all hover:scale-95 transform">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a href="#" className="transition-all hover:scale-95 transform">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </nav>
      </div>

      <picture className=" hidden md:block md:pt-5 ">
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
      </picture>
    </div>
  )
}

export default MobileApp
