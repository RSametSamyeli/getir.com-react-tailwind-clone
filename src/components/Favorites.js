import React, { useState, useEffect } from 'react'
import Title from './ui/Title'
import Products from '../api/products.json'
import ProductItem from './ui/ProductItem'

const Favorites = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
    <div className="container mx-auto py-6 md:px-4 ">
      <Title>Favoriler</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-white rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default Favorites
