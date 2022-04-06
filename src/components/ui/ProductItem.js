import React from 'react'
import { FiPlus } from 'react-icons/fi'

export default function ProductItem({ product }) {
  return (
    <div className="relative flex flex-col items-center text-center gap-y-2 p-3  rounded-lg  bg-white border-2">
      <button className="absolute   right-3 flex items-center justify-center    text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color rounded  ">
        <FiPlus size={20} />
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-sm text-primary-brand-color font-semibold ">
        {' '}
        {product.price} TL{' '}
      </div>
      <div className="text-lg font-semibold text-gray-900">
        {' '}
        {product.title}{' '}
      </div>
      <div className="text-sm text-gray-500"> {product.alt} </div>
    </div>
  )
}
