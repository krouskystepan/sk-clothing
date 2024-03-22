import Image from 'next/image'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <Image
        src={'/logo.png'}
        width={50}
        height={50}
        alt="Logo"
        // TODO: Set correct sizes
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <ul className="flex gap-5 p-2 text-xl">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="cursor-pointer transition-all duration-200 hover:text-primary"
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Button>Sign In</Button>
    </nav>
  )
}
