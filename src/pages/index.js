import Page from '@/components/Page'
import Image from 'next/image'

import styles from './styles.module.css'

export default function Home() {
  return (
    <Page
      title='Yabooka | Home'
      description='Servis Apple uredjaja - iPhone, iPad, MacBook, Samsung, Huawei, Acer, Asus, HP...'
    >
      <h1 className='text-center text-7xl max-w-4xl mx-auto font-EB mb-20'>
        Servis mobilnih uređaja svih vodećih brendova
      </h1>
      <div className={styles.image__container}>
        <Image
          src={'/logos/apple.png'}
          layout='fill'
          className={styles.image}
        />
        <Image src={'/logos/acer.png'} layout='fill' className={styles.image} />
        <Image src={'/logos/asus.png'} layout='fill' className={styles.image} />
        <Image src={'/logos/hp.png'} layout='fill' className={styles.image} />
        <Image
          src={'/logos/samsung.png'}
          layout='fill'
          className={styles.image}
        />
        <Image
          src={'/logos/huawei.png'}
          layout='fill'
          className={styles.image}
        />
      </div>
    </Page>
  )
}
