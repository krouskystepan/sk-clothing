import { getNewProducts } from '@/lib/actions/products.action'
import Product from './shared/Product'

export default async function NewProducts() {
  const newProducts = await getNewProducts()

  return (
    <section className="mx-auto mt-16 max-w-5xl ">
      <h3 className="section-heading">Explore new products</h3>
      <div className="flex grow flex-wrap justify-center gap-5">
        {newProducts.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            rating={product.rating}
            price={product.price}
            imageURL={product.imageURL}
            isNew={product.isNew}
          />
        ))}
      </div>
    </section>
  )
}
