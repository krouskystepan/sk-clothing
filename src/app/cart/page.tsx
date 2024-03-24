import Item from './Item'

export default function CartPage() {
  // if (!cart) return <div> No items in cart</div>

  // const cartItems = JSON.parse(cart)

  console.log()

  return (
    <>
      {/* <div>
        {cartItems.map((item: any, index: any) => (
          <div key={index}>
            <p>
              Name: {item.name} {index}
            </p>
          </div>
        ))}
      </div> */}
      <Item />
    </>
  )
}
