import Image from 'next/image'
import Link from 'next/link'

import type { TProductCard } from '@/types'
import { Card, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

import { StarFilledIcon } from '@radix-ui/react-icons'

export default function ProductCard({
  id,
  name,
  sizes,
  color,
  price,
  rating,
  imageURL,
  isBestSeller,
  isNew,
}: TProductCard) {
  return (
    <Card className="group relative w-[300px] !p-0">
      {isBestSeller && (
        <Badge className="absolute right-7 top-[-12.5px] h-[25px] !bg-red-600 uppercase text-white">
          BestSeller
        </Badge>
      )}
      {isNew && (
        <Badge
          variant="destructive"
          className="absolute left-7 top-[-12.5px] h-[25px] !bg-blue-700 uppercase text-white"
        >
          New
        </Badge>
      )}
      <CardContent>
        <div className="relative h-[300px] overflow-hidden rounded-xl bg-primary/[0.035] !p-0">
          {/* //TODO: Set correct sizes */}
          <Image
            src={imageURL}
            alt="Product Image"
            fill
            className="bg-center object-contain"
          />
        </div>
      </CardContent>
      <CardFooter className="grid gap-4">
        <div className="flex justify-between text-lg font-semibold">
          <p>{name}</p>
          <p>${price}</p>
        </div>

        <div className="flex justify-center text-primary">
          {Array.from({ length: rating }, (_, index) => (
            <StarFilledIcon key={index} className="size-6" />
          ))}
        </div>
        <Link
          href={`/products/${id}?color=${encodeURIComponent(color)}&size=${sizes[1]}`}
          className="grid"
        >
          <Button
            variant="secondary"
            className="!ring-0 transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
          >
            Buy now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
