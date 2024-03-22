import { Badge } from '../ui/badge'
import { Card, CardContent, CardFooter } from '../ui/card'
import Image from 'next/image'

import type { TProductCard } from '@/types'
import { Button } from '../ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'

export default function Product({
  name,
  price,
  rating,
  imageURL,
  bestSeller,
}: TProductCard) {
  return (
    <Card className="group relative min-w-[300px] !p-0">
      {bestSeller && (
        <Badge
          variant="destructive"
          className="absolute right-7 top-[-12.5px] h-[25px] uppercase"
        >
          BestSeller
        </Badge>
      )}
      <CardContent>
        <div className="relative h-[300px] overflow-hidden rounded-xl bg-primary/[0.035] !p-0">
          {/* // TODO: Set correct sizes */}
          <Image
            src={imageURL}
            alt="Product Image"
            fill
            className="object-fit bg-center"
          />
        </div>
      </CardContent>
      <CardFooter className="grid gap-4">
        <div className="flex justify-between text-lg font-semibold">
          <p>{name}</p>
          <p>{price}$</p>
        </div>

        <div className="flex justify-center text-primary">
          {Array.from({ length: rating }, (_, index) => (
            <StarFilledIcon key={index} className="size-6" />
          ))}
        </div>

        <Button
          variant="secondary"
          className="transition-all duration-200 hover:bg-primary hover:text-secondary"
        >
          Buy now
        </Button>
      </CardFooter>
    </Card>
  )
}
