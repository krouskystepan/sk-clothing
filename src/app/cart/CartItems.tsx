import { removeItem, updateQuantity, TCartItem } from '@/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CartItems() {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeItem(itemId))
  }

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
  }

  const cartItems = useSelector((state: { cart: TCartItem[] }) => state.cart)

  return (
    <>
      {cartItems.length > 0 ? (
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
                    <h3 className="text-lg text-gray-500">Size: {size}</h3>
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
                    {/* <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button> */}
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
      ) : (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Your cart is empy</h3>
          <Link href="/products">
            <Button variant="default" className="px-7 py-5">
              Shop now
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}
