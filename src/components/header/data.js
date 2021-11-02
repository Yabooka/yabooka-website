import React from 'react'
import { FaFacebookF, FaTelegramPlane, FaInstagram } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/usluge',
    text: 'usluge',
  },
  {
    id: 2,
    url: '/cenovnik',
    text: 'cenovnik',
  },
  {
    id: 3,
    url: '/cesta-pitanja',
    text: 'Česta pitanja',
  },
  // {
  //   id: 4,
  //   url: '/blog',
  //   text: 'blog',
  // },
  {
    id: 5,
    url: '/kontakt',
    text: 'kontakt',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://facebook.com/appleservisnis',
    icon: <FaFacebookF className='hover:text-fb' />,
  },
  {
    id: 2,
    url: 'https://t.me/appleservisnis',
    icon: <FaTelegramPlane className='hover:text-telegram' />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com/yabooka.rs/',
    icon: <FaInstagram className='hover:text-instagram' />,
  },
]
