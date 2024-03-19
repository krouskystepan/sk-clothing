type TProduct = {
  id: string;
  name: string
  desc: string
  imageVariants: {
    color: string
    imageURL: string
    bestseller?: boolean
  }[]
}
