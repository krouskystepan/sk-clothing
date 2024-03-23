'use server'

import { products } from '@/constants/products'
import { getXofType } from '../utils'

export const getProductById = async (id: string) => {
  return products.find((product) => product.id === id)
}

export const getBestSellers = async () => {
  const bestSellers = products.flatMap((product) =>
    product.imageVariants
      .filter((variant) => variant.isBestSeller)
      .map(({ color, ...rest }) => ({
        name: product.name,
        price: product.price,
        rating: product.rating,
        ...rest,
      }))
  )

  return getXofType(bestSellers, 3)
}

export const getNewProducts = async () => {
  const newProducts = products.flatMap((product) =>
    product.imageVariants
      .filter((variant) => variant.isNew)
      .map(({ color, ...rest }) => ({
        name: product.name,
        price: product.price,
        rating: product.rating,
        ...rest,
      }))
  )

  return getXofType(newProducts, 2)
}
