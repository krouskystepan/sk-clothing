'use client'

import CartItems from './CartItems'

export default function CartPage() {
  return (
    <section className="relative my-10 flex-1">
      <div className="container flex !max-w-3xl flex-col">
        <h2 className="section-heading">Order Summary</h2>
        <CartItems />
      </div>
    </section>
  )
}
