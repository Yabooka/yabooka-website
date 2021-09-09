import Link from 'next/link'
import Button from '@/components/button'
import CustomImage from '@/components/image'
import Line from '@/components/line'

export default function Intro() {
  return (
    <div className='section'>
      <div className='flex flex-col items-center gap-y-10 md:flex-row md:gap-x-20 md:justify-between'>
        {/* leva strana */}
        <div className='md:w-1/2'>
          <Line title='intro' />
          <div>
            <h2 className='font-EB text-2xl md:text-4xl mt-11 mb-4'>
              Servis elektronskih uređaja
            </h2>
            <div className='font-EL text-sm leading-6'>
              <span className='font-EB'>Kvalitetno i povoljno</span> vršimo
              servis elektronskih uređaja svih brendova. <br />
              <br />
              <u>Specijalizovani smo pre svega za servis Apple uređaja</u> -
              mobilnih telefona, tableta, laptopova i desktop računara, ali
              uspešno rešavamo i probleme na Android uređajima, kao i na svim
              ostalim kućnim aparatima (TV, gaming konzole, monitori, PC
              računari...).
            </div>
          </div>
          <Button>
            <Link href='/kontakt'>kontakt</Link>
          </Button>
        </div>
        {/* desna strana */}
        <div className='relative h-96 md:w-1/2'>
          <CustomImage
            src={'/images/imac.png'}
            layout='fill'
            objectPosition='right'
            alt='imac'
          />
        </div>
      </div>
    </div>
  )
}
