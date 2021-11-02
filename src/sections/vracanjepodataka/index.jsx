import Link from 'next/link'
import Button from '@/components/button'
import CustomImage from '@/components/image'
import Line from '@/components/line'

export default function VracanjePodataka() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-10 md:justify-between'>
        {/* leva strana */}
        <div className='md:w-1/2'>
          <Line title='vraćanje podataka' />
          <div>
            <h2 className='font-EB text-2xl md:text-4xl mt-11 mb-4'>
              Imate važne podatke u telefonu?
            </h2>
            <div className='font-EL text-sm leading-6'>
              Ne brinite, mi Vam možemo pomoći.
              <br />
              Jedini način da se dođe do slika, brojeva, video snimaka je da se
              telefon popravi, odnosno da se osposobi onoliko koliko je dovoljno
              da bi podaci mogli da se očitaju iz memorije.
              <br />
              <u>Mi imamo iskustva sa tim.</u>
            </div>
          </div>
          <Button>
            <Link href='/kontakt'>zakažite servis</Link>
          </Button>
        </div>
        {/* desna strana */}
        <div className='relative md:w-1/2'>
          <CustomImage
            src={'/images/cracked4.png'}
            layout='fill'
            objectFit='contain'
            objectPosition='right'
            alt='vracanje podataka'
          />
        </div>
      </div>
    </div>
  )
}
