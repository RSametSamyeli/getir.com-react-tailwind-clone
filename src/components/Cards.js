import React, { useState, useEffect } from 'react'
import cardsData from '../api/cards.json'

const Cards = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsData)
  }, [])

  return (
    <div className=" container mx-auto grid grid-cols-1  md:grid-cols-3 gap-4 md:gap-x-4 md:px-4 ">
      {cards.length &&
        cards.map((card) => (
          <div className="flex flex-col  items-center justify-center  text-center rounded-lg p-10  bg-white shadow-xl  ">
            <img src={card.image} className=" w-150 h-150 mb-6 " />
            <h6 className="text-primary-brand-color font-semibold text-lg  ">
              {' '}
              {card.title}{' '}
            </h6>
            <p className="text-sm text-gray-700 mt-2"> {card.description} </p>
          </div>
        ))}
    </div>
  )
}

export default Cards
