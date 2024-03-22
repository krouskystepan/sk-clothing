import BestSellers from '@/components/BestSellers'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="container flex-grow">
      <Hero />
      <BestSellers />
    </main>
  )
}
