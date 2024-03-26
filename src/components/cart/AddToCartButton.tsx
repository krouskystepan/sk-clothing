'use client'

import { addItem } from '@/store/cartSlice'
import { useDispatch } from 'react-redux'
import { Button } from '../ui/button'
import type { CartItem } from '@/types'

export default function AddToCartButton({
  id,
  name,
  imageURL,
  price,
  color,
  size,
}: CartItem) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const newItem = {
      id: `${id} - ${color} - ${size}`,
      name,
      imageURL,
      price,
      quantity: 1,
    }
    dispatch(addItem(newItem))
  }
  return (
    <Button className="mt-6" onClick={() => handleAddToCart()}>
      Add to cart
    </Button>
  )
}
