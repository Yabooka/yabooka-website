import Link from 'next/link'
import { linkovi } from './data'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center md:flex-row md:justify-between text-tiny md:max-w-mywidth mx-auto py-2 mt-20 border-t border-grayBorder'>
      <div className='text-footerCopy mb-2 md:m-0'>
        Copyright © {new Date().getFullYear()} Yabooka. All rights reserved.
      </div>
      <div>
        {linkovi.map((link) => {
          const { id, url, text } = link
          return (
            <Link href={url} key={id}>
              <a className='border-r border-grayBorder px-2 md:px-3 text-footerLink hover:text-footerLinkHover hover:underline last:border-r-0 last:mr-0 last:pr-0'>
                {text}
              </a>
            </Link>
          )
        })}
      </div>
    </footer>
  )
}
