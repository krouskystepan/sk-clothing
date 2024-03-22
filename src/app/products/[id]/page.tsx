import { products } from '@/constants/products'
import { getProductById } from '@/lib/actions/products.action'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function ProductById({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await getProductById(id)

  if (!product) return notFound()

  console.log(product)

  return (
    // <div>
    //   {products.map((product) => {
    //     console.log(product)

    //     const selectedColor = '#EBE2D7'

    //     const selectedVariant = product.imageVariants.find(
    //       (variant) => variant.color === selectedColor
    //     )

    //     return (
    //       <div className="w-52" key={product.id}>
    //         <h2>{product.name}</h2>
    //         <p>{product.desc}</p>
    //         {product.imageVariants.map((variant) => (
    //           <>
    //             <div
    //               key={variant.color}
    //               className="size-32"
    //               style={{ backgroundColor: variant.color }}
    //             />
    //             <img src={variant.imageURL} alt={product.name} />
    //           </>
    //         ))}
    //       </div>
    //     )
    //   })}
    // </div>
    <div>Product: {product.desc}</div>
  )
}
