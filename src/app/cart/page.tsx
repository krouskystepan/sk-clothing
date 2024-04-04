'use client'

import { useState } from 'react'
import { updateQuantity, TCartItem } from '@/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isOrderLoading, setIsOrderLoading] = useState(false)

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
  }

  const cartItems = useSelector((state: { cart: TCartItem[] }) => state.cart)

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const checkout = async () => {
    setIsOrderLoading(true)
    try {
      const modifiedCartItems = cartItems.map((item) => {
        const idParts = item.id.split('-')
        const size = idParts[idParts.length - 1].trim().toUpperCase()
        return {
          ...item,
          name: `${item.name} - ${size}`,
        }
      })

      const response = await fetch(
        `https://sk-clothing.vercel.app/api/checkout`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ products: modifiedCartItems }),
        }
      )

      if (response.ok) {
        const responseData = await response.json()
        if (responseData.url) {
          router.push(responseData.url)
        }
      } else {
        // Handle error cases here
      }
    } catch (error) {
      // Handle fetch errors
    } finally {
      setIsOrderLoading(false)
    }
  }

  return (
    <section className="relative my-10 flex-1">
      <div className="container flex !max-w-3xl flex-col">
        <h2 className="section-heading">Order Summary</h2>
        <>
          {cartItems.length > 0 ? (
            <>
              <ul className="flex w-full flex-col rounded-md">
                {cartItems.map((item) => {
                  const parts = item.id.split(' - ')

                  const color = parts[1]
                  const size = parts[2]

                  return (
                    <li
                      key={item.id}
                      className="my-2.5 flex w-full flex-col justify-between gap-0 border-b-2 border-secondary sm:flex-row sm:gap-5"
                    >
                      <div className="flex flex-row justify-center">
                        <div className="relative size-28">
                          <Image src={item.imageURL} alt="Product" fill />
                        </div>
                        <div className="ml-5 flex flex-col justify-center">
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <h3 className="text-lg text-gray-500">
                            Size: {size}
                          </h3>
                          <h3 className="flex items-center gap-[6px] text-lg text-gray-500">
                            Color:
                            <div
                              className="size-[16px] rounded-full border border-black"
                              style={{ backgroundColor: color }}
                            />
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-between gap-3 py-3">
                        <div className="space-x-3">
                          <Button
                            variant={'outline'}
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="size-8"
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant={'outline'}
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="size-8"
                          >
                            +
                          </Button>
                        </div>
                        <p className="mr-1 block text-lg font-semibold text-primary">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="flex w-full flex-col items-center justify-between border-b border-secondary pb-6 pt-3 sm:flex-row sm:items-center lg:px-6">
                <p className="mx-2 w-full text-2xl font-semibold leading-9 max-sm:mb-4 max-sm:text-center">
                  Subtotal
                </p>

                <p className="mx-2 text-3xl font-bold text-primary">
                  ${totalPrice}
                </p>
              </div>
              <div className="mx-auto max-lg:max-w-lg">
                <p className="mb-5 mt-6 text-center text-base font-normal leading-7 text-gray-500">
                  Shipping taxes, and discounts calculated at checkout
                </p>
                <p className="mx-auto mb-6 max-w-fit rounded-lg border-2 border-yellow-500 bg-yellow-100 px-4 py-2 text-sm uppercase text-yellow-500">
                  Example card: 4242 4242 4242 4242
                </p>
                <Button
                  className={`w-full cursor-pointer rounded-full px-6 py-7 text-center text-lg font-semibold ${
                    isOrderLoading ? 'bg-primary/80' : ''
                  }`}
                  onClick={checkout}
                  disabled={isOrderLoading}
                >
                  {isOrderLoading ? 'Loading...' : 'Checkout'}
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <h3 className="text-lg">Your cart is empty</h3>
              <Link href="/products">
                <Button variant="default" className="px-7 py-5">
                  Shop now
                </Button>
              </Link>
            </div>
          )}
        </>
      </div>
    </section>
  )
}
