import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full lg:py-8">
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-foreground">
                Resources
              </h2>
              <ul className="font-medium text-muted-foreground">
                <li className="mb-4">
                  <a href="https://nextjs.org" className="hover:underline">
                    NextJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/" className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center">
            Made by{' '}
            <Link
              href="www.krouskystepan.com"
              className="transition-all duration-200 hover:text-primary"
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
