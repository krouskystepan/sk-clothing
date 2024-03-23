import { getProductById } from '@/lib/actions/products.action'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { StarFilledIcon } from '@radix-ui/react-icons'

type SearchParams = {
  color: string
  size: string
}

export default async function ProductView({
  params: { id },
  searchParams,
}: {
  params: { id: string }
  searchParams: SearchParams
}) {
  const product = await getProductById(id)

  const selectedVariant = product?.imageVariants.find(
    (variant) => variant.color === searchParams.color
  )

  const selectedSize = product?.sizes?.find(
    (size) => size === searchParams.size
  )

  if (!product || !selectedVariant || !selectedSize) return notFound()

  return (
    <section className="container my-auto grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="relative columns-2">
        {/* //TODO: Set correct sizes */}
        <Image
          src={selectedVariant?.imageURL}
          alt={product.name}
          fill
          className="size-full object-contain shadow-md"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h2 className="text-2xl font-extrabold text-gray-800">
          {product.name}
        </h2>
        <div className="mt-4 flex space-x-2 text-primary">
          {Array.from({ length: product.rating }, (_, index) => (
            <StarFilledIcon key={index} className="size-6" />
          ))}
        </div>
        <div className="mt-8">
          <p className="text-3xl font-bold text-gray-800">{product.price}$</p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800">Choose a Color</h3>
          <div className="mt-4 flex flex-wrap gap-4">
            {product.imageVariants.map((variant) => (
              <Link
                key={variant.color}
                href={`/products/${id}?color=${encodeURIComponent(variant.color)}&size=${encodeURIComponent(searchParams.size)}`}
                className={`${variant.color === searchParams.color ? 'border-gray-800' : ''} flex size-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold hover:border-gray-800`}
              >
                <div
                  style={{ backgroundColor: variant.color }}
                  className="size-full rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800">Choose a Size</h3>
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {product.sizes.map((size) => (
                <Link
                  key={size}
                  href={`/products/${id}?color=${encodeURIComponent(searchParams.color)}&size=${encodeURIComponent(size)}`}
                  className={`${size === searchParams.size ? 'border-gray-800' : ''} flex size-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold text-gray-800 hover:border-gray-800`}
                >
                  {size}
                </Link>
              ))}
            </div>
          )}
          <div className="mt-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Description</h3>
              <p className="mt-4 text-sm text-gray-800">{product.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
