export type TProduct = {
  id: string
  name: string
  price: number
  rating: number
  desc: string
  imageVariants: {
    color: string
    imageURL: string
    bestSeller?: boolean
  }[]
}

export type TProductCard = {
  name?: string
  price: number
  rating: number
  bestSeller?: boolean
  imageURL: string
}
