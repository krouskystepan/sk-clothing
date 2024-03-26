'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'
import Link from 'next/link'
import CartNavButton from '../cart/CartNavButton'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isSignIn = true

  return (
    <header className="sticky left-0 top-0 z-10 bg-white p-4 shadow-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <Image
          src={'/logo.webp'}
          width={50}
          height={50}
          alt="Logo"
          // TODO: Set correct sizes
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <ul className="hidden gap-5 p-2 text-xl sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer transition-all duration-200 hover:text-primary"
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-4">
          {isSignIn ? <CartNavButton /> : <Button>Sign In</Button>}
          <button
            onClick={() => setIsOpen(true)}
            className={`block cursor-pointer sm:hidden`}
            aria-label="Open Mobile Navigation"
          >
            <Menu />
          </button>
        </div>
      </nav>
      <nav
        className={`absolute left-0 top-0 block h-screen w-full bg-white duration-500 sm:hidden ${
          isOpen ? '-translate-y-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="fixed right-6 top-6 z-20 ml-auto cursor-pointer"
          aria-label="Close Mobile Navigation"
        >
          <X className="size-8" />
        </button>
        <ul className="flex h-full flex-col items-center justify-center gap-10 text-4xl font-medium">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="transition-all duration-150 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              <Link href={link.path} className="cursor-pointer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
