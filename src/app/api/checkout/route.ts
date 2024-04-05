import { NextResponse } from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list()
  const avaliableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  )
  return avaliableProducts
}

export const POST = async (request: Request) => {
  const { products } = await request.json()
  const data: any = products

  let activeProducts = await getActiveProducts()

  try {
    for (const product of data) {
      const stripeProduct = activeProducts.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() == product?.name.toLowerCase()
      )
      if (stripeProduct == undefined) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: 'usd',
          },
          images: [`https://sk-clothing-shop.vercel.app${product.imageURL}`],
        })
      }
    }
  } catch (error) {
    console.error('Error in creating a new product', error)
  }

  activeProducts = await getActiveProducts()
  let stripeItems: any = []

  for (const product of data) {
    const stripeProduct = activeProducts.find(
      (prod: any) => prod?.name?.toLowerCase() == product?.name.toLowerCase()
    )

    if (stripeProduct) {
      stripeItems.push({
        price_data: {
          currency: 'usd',
          unit_amount: product.price * 100,
          product_data: {
            name: product.name,
            images: [`https://sk-clothing-shop.vercel.app${product.imageURL}`],
          },
        },
        quantity: product?.quantity,
      })
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: 'https://sk-clothing-shop.vercel.app/cart/success',
    cancel_url: 'https://sk-clothing-shop.vercel.app/cart/cancel',
  })

  return NextResponse.json({ url: session.url })
}
