import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <section className="mx-auto my-10 grid max-w-3xl grow gap-6 bg-white px-6 sm:grid-cols-2 sm:grid-rows-1 md:gap-16">
      <div>
        <h1 className="section-heading !mt-0">Let&apos;s Talk</h1>
        <p className="mt-3 text-sm text-gray-400">
          Have some big idea or brand to develop and need help? Then reach out
          we&apos;d love to hear about your project and provide help.
        </p>
        <div className="mt-12">
          <h2 className="section-heading !text-lg font-extrabold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                <Mail className="text-primary" />
              </div>
              <a
                className="ml-3 text-sm text-primary"
                href="mailto:skclo@example.com"
              >
                <small className="block">Mail</small>
                <strong>skclo@example.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="section-heading !text-lg font-extrabold">Socials</h2>
          <ul className="mt-3 flex space-x-4">
            <li className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
              <Link href="/contact">
                <Facebook className="text-primary" />
              </Link>
            </li>
            <li className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
              <Link href="/contact">
                <Instagram className="text-primary" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <form className="ml-auto w-full space-y-4">
        <Input
          type="text"
          placeholder="Name"
          className="bg-accent px-4 py-3 text-sm outline-primary"
        />
        <Input
          type="email"
          placeholder="Email"
          className="bg-accent px-4 py-3 text-sm outline-primary"
        />
        <Input
          type="text"
          placeholder="Subject"
          className="bg-accent px-4 py-3 text-sm outline-primary"
        />
        <Textarea
          placeholder="Message"
          rows={6}
          className="bg-accent px-4 pt-3 text-sm"
        />
        <Button className="w-full">Send</Button>
      </form>
    </section>
  )
}
