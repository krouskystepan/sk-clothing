import ProductCard from '@/components/ProductCard'
import { getAllProducts } from '@/lib/actions/products.action'

export default async function Products() {
  const products = await getAllProducts()

  return (
    <section className="container my-10">
      <h2 className="section-heading ml-6 sm:ml-12 md:ml-16 lg:ml-24 2xl:ml-32">
        Welcome to Our Product Page
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product) => (
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
            isNew={product.isNew}
          />
        ))}
      </div>
    </section>
  )
}
