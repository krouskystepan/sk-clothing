import { getNewProducts } from '@/lib/actions/products.action'
import ProductCard from './ProductCard'

export default async function NewProducts() {
  const newProducts = await getNewProducts()

  return (
    <section className="mx-auto mb-10 mt-16 max-w-5xl">
      <h3 className="section-heading">Explore new products</h3>
      <div className="flex grow flex-wrap justify-center gap-5">
        {newProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            color={product.color}
            name={product.name}
            sizes={product.sizes}
            price={product.price}
            rating={product.rating}
            imageURL={product.imageURL}
            isNew={product.isNew}
          />
        ))}
      </div>
    </section>
  )
}
