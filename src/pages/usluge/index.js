import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
import Page from '@/components/page'

export default function Usluge() {
  return (
    <Page
      title='Yabooka | Usluge'
      description='Usluge koje pruža Apple servis Yabooka. Zamena delova - ekrana, baterija, flet kablova, servis matičnih ploča.'
    >
      {/* vracanje podataka */}
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-10 md:justify-between md:mb-40'>
        {/* leva strana */}
        <div className='md:w-1/2'>
          <div className='flex relative h-2 tracking-letter text-mini'>
            <div className='w-4 md:w-8 h-px bg-black left-0 top-1/2 absolute'></div>
            <div className='relative pl-8 md:pl-12 uppercase'>
              vraćanje podataka
            </div>
          </div>
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
              <br />
              Ukoliko ne uspemo da dođemo do podataka
              <span className='font-EB'> NE PLAĆATE NIŠTA</span>.
            </div>
          </div>
          <Button>
            <Link href='/kontakt'>zakažite servis</Link>
          </Button>
        </div>
        {/* desna strana */}
        <div className='relative md:w-1/2'>
          <Image
            src={'/images/cracked4.png'}
            layout='fill'
            objectFit='contain'
            alt='zamena delova'
          />
        </div>
      </div>
      {/* zamena delova */}
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-10 md:justify-between md:mb-40'>
        {/* leva strana */}
        <div className='relative md:w-1/2'>
          <Image
            src={'/images/iphonex.png'}
            layout='fill'
            objectFit='contain'
            alt='zamena delova'
          />
        </div>
        {/* desna strana */}
        <div className='md:w-1/2 mb-20 md:mb-0'>
          <div className='flex relative h-2 tracking-letter text-mini'>
            <div className='w-4 md:w-8 h-px bg-black left-0 top-1/2 absolute'></div>
            <div className='relative pl-8 md:pl-12 uppercase'>
              zamena delova
            </div>
          </div>
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
      {/* maticne ploce */}
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-10 md:justify-between md:mb-40'>
        {/* leva strana */}
        <div className='md:w-1/2'>
          <div className='flex relative h-2 tracking-letter text-mini'>
            <div className='w-4 md:w-8 h-px bg-black left-0 top-1/2 absolute'></div>
            <div className='relative pl-8 md:pl-12 uppercase'>
              servis matičnih ploča
            </div>
          </div>
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
          <Image
            src={'/images/iphone3d.png'}
            layout='fill'
            objectFit='contain'
            alt='zamena delova'
          />
        </div>
      </div>
    </Page>
  )
}
