'use client'

import { removeItem, updateQuantity, TCartItem } from '@/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Item() {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItem(itemId))
  }

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
  }

  const cartItems = useSelector((state: { cart: TCartItem[] }) => state.cart)

  return (
    <div className="flex flex-1">
      <div>{cartItems.length}</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
            <button
              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
