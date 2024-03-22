import React from 'react'
import Product from './shared/Product'
import { getBestSellers } from '@/lib/actions/products.action'

export default async function BestSellers() {
  const bestSellers = await getBestSellers()
  console.log(bestSellers)

  return (
    <section className="flex-0 mx-auto mt-20 flex max-w-5xl grow flex-wrap justify-center gap-5">
      {bestSellers.map((bestSeller, index) => (
        <Product
          key={index}
          name={bestSeller.name}
          rating={bestSeller.rating}
          price={bestSeller.price}
          imageURL={bestSeller.imageURL}
          bestSeller={bestSeller.bestSeller}
        />
      ))}
    </section>
  )
}
