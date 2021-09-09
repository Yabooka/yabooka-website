import Page from '@/components/page'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Button from '@/components/button'

import { fadeInUp, fadeInDown, stagger } from './animations'
import { popravke, zamena } from './data'

import { exit } from 'pages/animations'

export default function Cenovnik() {
  return (
    <motion.div
      exit={exit}
      initial='initial'
      animate='animate'
      className='md:pt-20'
    >
      <Page title='Yabooka | Cenovnik' description='Cenovnik nasih usluga.'>
        <motion.h1
          variants={fadeInDown}
          className='text-center text-2xl md:text-4xl font-EB mb-2 text-black'
        >
          Cene popravki na matičnim pločama
        </motion.h1>
        <motion.p variants={fadeInDown} className='text-center font-EL'>
          U cene su uračunati i potrebni elementi za zamenu (čipovi,
          kondenzatori, diode, otpornici)
        </motion.p>
        <motion.div
          variants={stagger}
          className='grid md:grid-cols-2 md:gap-x-16 md:gap-y-8 mb-12 mt-10'
        >
          {popravke.map((item, index) => {
            return (
              <motion.div variants={fadeInUp} key={index}>
                <p className='text-red uppercase font-EB text-xl border-b border-red mb-2 mt-4 md:mt-0 tracking-small'>
                  {item.title}
                </p>
                {item.content.map((c, i) => (
                  <motion.div
                    variants={fadeInUp}
                    className='flex justify-between font-EL'
                    key={i}
                  >
                    <p className='mb-2'>{c.uredjaj}</p>
                    <p className='mb-2'>{c.cena}</p>
                  </motion.div>
                ))}
              </motion.div>
            )
          })}
        </motion.div>
        <h1 className='text-center text-2xl md:text-4xl font-EB mb-2 text-black'>
          Cene zamene delova
        </h1>
        <p className='text-center font-EL'>
          Cene su date okvirno i uključuju i potrebne delove za zamenu
          (baterija, ekran i slično).
          <br />
          Kako se cene delova često menjaju, a zavise i od kvaliteta samog dela,
          obavezno nas kontaktirajte kako bi smo Vam dali preciznije
          informacije.
        </p>
        <div className='grid md:grid-cols-2 md:gap-x-16 md:gap-y-8 mb-12 mt-10'>
          {zamena.map((item, index) => {
            return (
              <div key={index}>
                <p className='text-red uppercase font-EB text-xl border-b border-red mb-2 mt-4 md:mt-0 tracking-small'>
                  {item.title}
                </p>
                {item.content.map((c, i) => (
                  <div className='flex justify-between font-EL' key={i}>
                    <p className='mb-2'>{c.uredjaj}</p>
                    <p className='mb-2'>{c.cena}</p>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
        <div className='text-center font-EL'>
          <p>
            Za cene zamene ostalih delova, koji nisu navedeni u cenovniku, kao i
            za cene popravki kvarova koji nisu na listi, molimo Vas
            kontaktirajte nas.
          </p>
          <Button>
            <Link href='/kontakt' className='mx-auto'>
              Kontaktirajte nas
            </Link>
          </Button>
        </div>
      </Page>
    </motion.div>
  )
}
