import { products } from '@/constants/products'
import React from 'react'

export default function ProductById() {
  return (
    <>
      {products.map((product) => {
        console.log(product)

        const selectedColor = '#EBE2D7'

        const selectedVariant = product.imageVariants.find(
          (variant) => variant.color === selectedColor
        )

        return (
          <div className="w-52" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            {product.imageVariants.map((variant) => (
              <div
                key={variant.color}
                className="size-32"
                style={{ backgroundColor: variant.color }}
              />
            ))}
            {selectedVariant && (
              <img src={selectedVariant.imageURL} alt={product.name} />
            )}
          </div>
        )
      })}
    </>
  )
}
