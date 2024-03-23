export type TProduct = {
  id: string
  name: string
  price: number
  rating: number
  desc: string
  imageVariants: {
    color: string
    imageURL: string
    isBestSeller?: boolean
    isNew?: boolean
  }[]
}

export type TProductCard = {
  name?: string
  price: number
  rating: number
  isBestSeller?: boolean
  isNew?: boolean
  imageURL: string
}
