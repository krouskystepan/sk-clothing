'use server'

import { products } from '@/constants/products'

export const getProductById = async (id: string) => {
  return products.find((product) => product.id === id)
}

export const getBestSellers = async () => {
  const bestSellers = products.flatMap((product) =>
    product.imageVariants
      .filter((variant) => variant.bestSeller)
      .map(({ color, ...rest }) => ({
        name: product.name,
        price: product.price,
        rating: product.rating,
        ...rest,
      }))
  )

  // Deduplicate the bestSellers array based on the product name
  const uniqueBestSellers = []
  const seenNames = new Set()

  for (const seller of bestSellers) {
    if (!seenNames.has(seller.name)) {
      uniqueBestSellers.push(seller)
      seenNames.add(seller.name)
    }
  }

  // Return only the top 3 unique best sellers
  return uniqueBestSellers.slice(0, 3)
}
