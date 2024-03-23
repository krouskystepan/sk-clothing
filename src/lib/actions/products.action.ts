'use server'

import { products } from '@/constants/products'
import { getXofType } from '../utils'

export const getAllProducts = async () => {
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const allVariants = products.flatMap((product) => {
    return product.imageVariants.map((variant) => ({
      id: product.id,
      name: product.name,
      sizes: product.sizes,
      price: product.price,
      rating: product.rating,
      color: variant.color,
      imageURL: variant.imageURL,
      isBestSeller: variant.isBestSeller || false,
      isNew: variant.isNew || false,
    }))
  })

  const shuffledVariants = shuffleArray(allVariants)

  return shuffledVariants
}

export const getProductById = async (id: string) => {
  return products.find((product) => product.id === id)
}

export const getBestSellers = async () => {
  const bestSellers = products.flatMap((product) =>
    product.imageVariants
      .filter((variant) => variant.isBestSeller)
      .map(({ ...rest }) => ({
        id: product.id,
        name: product.name,
        sizes: product.sizes,
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
      .map(({ ...rest }) => ({
        id: product.id,
        name: product.name,
        sizes: product.sizes,
        price: product.price,
        rating: product.rating,
        ...rest,
      }))
  )

  return getXofType(newProducts, 2)
}
