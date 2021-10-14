import Link from 'next/link'
import Button from '@/components/button'
import CustomImage from '@/components/image'
import Line from '@/components/line'

export default function ZamenaDelova() {
  return (
    <div className='flex items-center justify-center h-96 mb-20'>
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-10 md:justify-between'>
        {/* leva strana */}
        <div className='relative md:w-1/2'>
          <CustomImage
            src={'/images/iphonex.png'}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            alt='zamena delova'
          />
        </div>
        {/* desna strana */}
        <div className='md:w-1/2 mb-20 md:mb-0'>
          <Line title='zamena delova' />
          <div>
            <h2 className='font-EB text-2xl md:text-4xl mt-11 mb-4'>
              Baterije, ekrani, kućišta
            </h2>
            <div className='font-EL text-sm leading-6'>
              Loše baterije, polomljeni ekrani, neispravni zvučnici,
              mikrofoni...vršimo zamenu svih delova po{' '}
              <span className='font-EB'>veoma povoljnim cenama</span> i u što
              kraćem roku. Trudimo se da ugrađujemo <u>originalne delove</u>{' '}
              kada god je to moguće.
              <br />
              <br />
              Garancija na zamenjene delove je{' '}
              <span className='font-EB'> 3 do 6 meseci</span>, u zavisnosti od
              samog dela.
            </div>
          </div>
          <Button>
            <Link href='/kontakt'>zakažite servis</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
