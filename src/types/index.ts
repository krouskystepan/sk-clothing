export type TProduct = {
  id: string
  name: string
  price: number
  rating: number
  sizes: number[] | string[]
  desc: string
  imageVariants: {
    color: string
    imageURL: string
    isBestSeller?: boolean
    isNew?: boolean
  }[]
}

export type TProductCard = {
  id: string
  name?: string
  price: number
  rating: number
  sizes: number[] | string[]
  color: string
  isBestSeller?: boolean
  isNew?: boolean
  imageURL: string
}
