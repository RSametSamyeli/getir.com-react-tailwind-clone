import React from 'react'
import Menu from './ui/Menu'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiGlobe } from 'react-icons/bi'

const Footer = () => {
  const menus = [
    {
      title: `Getir'i keşfedin`,
      items: [
        {
          title: 'Hakkımızda',
        },
        {
          title: 'Kariyer',
        },
        {
          title: 'İletişim',
        },
        {
          title: 'Covid 19 Duyuru',
        },
        {
          title: 'Sosyal Sorumluluk Projeleri',
        },
      ],
    },
    {
      title: `Yardıma mı ihtiyacınız var?
      `,
      items: [
        {
          title: 'Sıkça Sorulan Sorular',
        },
        {
          title: 'Kişisel Verilerin Korunması',
        },
        {
          title: 'Gizlilik Politikası',
        },
        {
          title: 'Kullanım Koşulları',
        },
        {
          title: 'Çerez Politikası',
        },
      ],
    },
    {
      title: `İş Ortağımız Olun`,
      items: [
        {
          title: 'Bayimiz Olun',
        },
        {
          title: 'Deponuzu Kiralayın',
        },
        {
          title: 'GetirYemek Restoranı Olun',
        },
        {
          title: 'Covid 19 Duyuru',
        },
        {
          title: 'Getir Çarşı İşletmesi Olun',
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto mt-10 bg-white p-2">
      <div className="grid  md:grid-cols-2   md:grid-cols-4 md:pt-10 md:px-4 gap-y-6  ">
        <section>
          <nav className="flex flex-col gap-y-4 ">
            <h6 className="text-lg text-primary-brand-color font-semibold">
              Getir'i indirin!
            </h6>
            <a href="AppStore">
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt=""
                className="w-40 h-12"
              />
            </a>
            <a href="Google Play">
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt=""
                className="w-40 h-12"
              />
            </a>

            <a href="Huwai App Gallery">
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt=""
                className="w-40 h-12"
              />
            </a>
          </nav>
        </section>
        {menus.map((menu, index) => (
          <Menu key={index} {...menu} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row   justify-center md:justify-between items-center border-t mt-6 pt-6 border-gray-200 md:px-4 ">
        <div className="flex gap-x-8  text-xs">
          <span className="">© 2021 Getir Bilgi</span>
          <a href="{}" className="text-primary-brand-color hover:underline  ">
            Bilgi Toplumu Hizmetleri
          </a>{' '}
        </div>
        <div>
          <nav className="flex gap-x-3 items-centers ">
            <a
              href="facebook"
              className="w-8 h-8 text-gray-700 hover:text-primary-brand-color  hover:bg-primary-brand-color rounded-lg hover:bg-opacity-10 flex items-center justify-center hover:scale-95 transition-all  transform "
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="Twitter"
              className="w-8 h-8 text-gray-700 hover:text-primary-brand-color  hover:bg-primary-brand-color rounded-lg hover:bg-opacity-10 flex items-center justify-center hover:scale-95 transition-all  transform"
            >
              <FaTwitter size={21} />
            </a>
            <a
              href="İnstagram"
              className="w-8 h-8 text-gray-700 hover:text-primary-brand-color  hover:bg-primary-brand-color rounded-lg hover:bg-opacity-10 flex items-center justify-center hover:scale-95 transition-all  transform"
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="Blobe"
              className=" flex items-center justify-center gap-x-3 text-gray-700 hover:text-primary-brand-color  hover:bg-primary-brand-color rounded-lg hover:bg-opacity-10  hover:scale-95 transition-all  transform"
            >
              <BiGlobe size={20} /> <span>Türkçe(TR)</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
