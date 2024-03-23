import BestSellers from '@/components/BestSellers'
import Hero from '@/components/Hero'
import NewProducts from '@/components/NewProducts'

export default function Home() {
  return (
    <main className="container flex-grow">
      <Hero />
      <BestSellers />
      <NewProducts />
    </main>
  )
}
