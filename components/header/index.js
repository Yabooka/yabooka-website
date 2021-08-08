import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 py-3 shadow-md'>
      <div className='max-w-6xl flex items-center justify-between mx-auto'>
        <div className='relative h-10 w-10'>
          <Image
            src={'/images/logo.svg'}
            objectFit='contain'
            layout='fill'
            objectPosition='left'
            alt='Logo image'
          />
        </div>
        <div>sredina</div>
        <div className='flex items-center'>
          <FaFacebookF className='mr-2 font-light' />
          <FaInstagram />
          <FaTelegramPlane />
        </div>
      </div>
    </header>
  )
}
