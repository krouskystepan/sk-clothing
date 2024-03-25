'use client'

import { TCartItem } from '@/store/cartSlice'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function CartNavButton() {
  const totalQuantity = useSelector((state: { cart: TCartItem[] }) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  )

  return (
    <Link
      className="relative cursor-pointer py-2"
      href={'/cart'}
      aria-label="Cart Icon"
    >
      {totalQuantity > 0 && (
        <div className="absolute -top-1 left-3">
          <p className="flex size-1 items-center justify-center rounded-full bg-red-500 p-[10px] text-xs text-white">
            {totalQuantity}
          </p>
        </div>
      )}
      <ShoppingCart />
    </Link>
  )
}
