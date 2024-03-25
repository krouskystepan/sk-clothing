import { getBestSellers } from '@/lib/actions/products.action'
import ProductCard from './ProductCard'

export default async function BestSellers() {
  const bestSellers = await getBestSellers()

  return (
    <section className="mx-auto mt-20  max-w-5xl ">
      <h2 className="section-heading">Buy our best-selling products</h2>
      <div className="flex grow flex-wrap justify-center gap-5">
        {bestSellers.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            color={product.color}
            name={product.name}
            sizes={product.sizes}
            price={product.price}
            rating={product.rating}
            imageURL={product.imageURL}
            isBestSeller={product.isBestSeller}
          />
        ))}
      </div>
    </section>
  )
}
