'use client'

import { removeItem, updateQuantity, TCartItem } from '@/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Item() {
  const dispatch = useDispatch()

  // Example: Remove an item from the cart
  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItem(itemId))
  }

  // Example: Update item quantity
  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
  }

  // Log cart items to console
  const cartItems = useSelector((state: { cart: TCartItem[] }) => state.cart) // Specify the correct key

  return (
    <div className="flex flex-1">
      <div>{cartItems.length}</div>
      {/* Your other cart UI components */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            {/* Add buttons for removing or updating quantity */}
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
