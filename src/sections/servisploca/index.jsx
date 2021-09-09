import Link from 'next/link'
import Button from '@/components/button'
import CustomImage from '@/components/image'
import Line from '@/components/line'

export default function ServisPloca() {
  return (
    <div className='section'>
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-10 md:justify-between'>
        {/* leva strana */}
        <div className='md:w-1/2'>
          <Line title='servis matičnih ploča' />
          <div>
            <h2 className='font-EB text-2xl md:text-4xl mt-11 mb-4'>
              Kompletna popravka
            </h2>
            <div className='font-EL text-sm leading-6'>
              Popravka matičnih ploča je jedan od najzahtevnijih poslova jer se
              radi sa mikro komponentama koje su jedva vidljive golim okom i za
              takav rad neophodno je posedovati specijalizovan alat. <br />
              <br />
              Mi se trudimo da pratimo trendove i da u svakom trenutku budemo u
              mogućnosti da popravimo matičnu ploču svakog uređaja. <br />
              <br />
              Garancija na naše popravke matičnih ploča je{' '}
              <span className='font-EB'>6 meseci</span>.
            </div>
          </div>
          <Button>
            <Link href='/kontakt'>zakažite servis</Link>
          </Button>
        </div>
        {/* desna strana */}
        <div className='relative md:w-1/2'>
          <CustomImage
            src={'/images/iphone3d.png'}
            layout='fill'
            objectFit='contain'
            objectPosition='right'
            alt='zamena delova'
          />
        </div>
      </div>
    </div>
  )
}
