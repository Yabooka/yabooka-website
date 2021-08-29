import { useState } from 'react'
import Page from '@/components/page'
import { pitanja } from './data'
import styles from './styles.module.css'
import { CgArrowUpO, CgArrowDownO } from 'react-icons/cg'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInDown, stagger } from './animations'
import { exit } from 'pages/animations'

export default function Pitanja() {
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }

  return (
    <motion.div exit={exit} initial='initial' animate='animate'>
      <Page
        title='Yabooka | Česta Pitanja'
        description='Često postavljana pitanja.'
      >
        <div className='mx-auto mr-32 ml-32'>
          <div className='flex relative h-2 tracking-letter text-mini'>
            <div className='w-4 md:w-8 h-px bg-black left-0 top-1/2 absolute'></div>
            <div className='relative pl-8 md:pl-12 uppercase'>faq</div>
          </div>
          <motion.h2
            variants={fadeInDown}
            className='text-2xl md:text-4xl font-EB mt-11 mb-10 text-black'
          >
            Često postavljana pitanja
          </motion.h2>
          <motion.div variants={stagger}>
            {pitanja.map((pitanje, index) => {
              return (
                <div key={index}>
                  <motion.div
                    variants={fadeInUp}
                    className='flex items-center'
                    onClick={() => {
                      toggle(index)
                    }}
                  >
                    <span className='mr-4 text-red text-2xl'>
                      {selected === index ? <CgArrowUpO /> : <CgArrowDownO />}
                    </span>
                    <div className='text-red font-EB text-2xl cursor-pointer'>
                      {pitanje.pitanje}
                    </div>
                  </motion.div>
                  <div
                    className={
                      selected === index
                        ? `${styles.odgovor} ${styles.show}`
                        : styles.odgovor
                    }
                  >
                    <div className='pb-4'>{pitanje.odgovor}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </Page>
    </motion.div>
  )
}
