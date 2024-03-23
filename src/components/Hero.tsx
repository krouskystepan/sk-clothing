import { Button } from './ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="mt-[2rem] flex w-full gap-10">
      <div className="flex aspect-square w-1/2 flex-col items-start gap-5">
        <h1 className="mt-10 text-6xl font-bold">Welcome to SK Clothing</h1>
        <p className="text-base">
          We are a shop that manufactures and procures everything ourselves. We
          strive for the highest and fastest quality and delivery of our
          products
        </p>
        <Button variant="default" className="px-6 py-5">
          Shop now
        </Button>
      </div>
      <div className="relative w-1/2 overflow-hidden rounded-md">
        <div className="h-full w-full bg-black" />
        // TODO: Set correct sizes
        <Image
          src="/image-10.jpg"
          fill
          alt="Hero image"
          className="opacity-95"
        />
      </div>
    </div>
  )
}
