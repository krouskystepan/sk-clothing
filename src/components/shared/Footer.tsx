import { footerLinks } from '@/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto ">
      <div className="mx-auto mt-10 w-full bg-primary p-6">
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {footerLinks.map((footerLink) => (
              <div>
                <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary">
                  {footerLink.title}
                </h2>
                <ul className="font-medium text-secondary">
                  {footerLink.sub.map((link) => (
                    <li className="mb-4 w-fit hover:underline">
                      <Link href={link.path} target="_blank">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <span className="text-sm text-secondary sm:text-center">
            Made by{' '}
            <Link
              href="https://krouskystepan.com"
              className="transition-all duration-200 hover:underline"
            >
              Štěpán Krouský
            </Link>{' '}
            © 2024
          </span>
        </div>
      </div>
    </footer>
  )
}
