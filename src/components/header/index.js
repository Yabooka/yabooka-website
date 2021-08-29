import { useState } from 'react'
import Image from 'next/image'
import Link from '@/components/link'

import styles from './styles.module.css'
import { links, social } from './data'

export default function Header() {
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <header
      className={`${styles.header} ${showLinks ? styles.menu_open : undefined}`}
    >
      <nav className={styles.nav}>
        <div className={styles.icon_container} onClick={toggleLinks}>
          <div className={styles.menuicon}>
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
          </div>
        </div>
        <div className={styles.logo}>
          <Link href='/' alt='logo'>
            <a>
              <Image
                src={'/logos/samo-logo600x600.svg'}
                width={35}
                height={35}
              />
            </a>
          </Link>
        </div>
        <div className={styles.mobile_menu}>
          <div className={styles.links}>
            <ul className={styles.menu}>
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id} className={styles.menu_item}>
                    <Link href={url}>
                      <a>{text}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <ul className={styles.menu}>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id} className={styles.menu_item}>
                  <Link href={url}>
                    <a className='text-white flex items-center pl-4'>{icon}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
