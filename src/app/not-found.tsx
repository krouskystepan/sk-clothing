import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-2">
      <h2 className="text-4xl font-bold">Not Found 404</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </section>
  )
}
