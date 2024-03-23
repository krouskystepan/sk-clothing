import { getBestSellers } from '@/lib/actions/products.action'
import Product from './shared/Product'

export default async function BestSellers() {
  const bestSellers = await getBestSellers()

  return (
    <section className="mx-auto mt-20  max-w-5xl ">
      <h3 className="section-heading">Buy our best-selling products</h3>
      <div className="flex grow flex-wrap justify-center gap-5">
        {bestSellers.map((bestSeller, index) => (
          <Product
            key={index}
            name={bestSeller.name}
            rating={bestSeller.rating}
            price={bestSeller.price}
            imageURL={bestSeller.imageURL}
            isBestSeller={bestSeller.isBestSeller}
          />
        ))}
      </div>
    </section>
  )
}
