import Page from '@/components/page'
import Button from '@/components/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Kontakt() {
  return (
    <Page
      title='Yabooka | Kontakt'
      description='Kontaktirajte nas i saznajte sve što vas zanima.'
    >
      <div className='py-10'>
        <div className='flex relative h-2 tracking-letter text-mini'>
          <div className='w-4 md:w-8 h-px bg-black left-0 top-1/2 absolute'></div>
          <div className='relative pl-8 md:pl-12 uppercase'>kontakt</div>
        </div>
        <div>
          <div className='relative h-10 md:h-16 mt-16 mb-2'>
            <Image
              src={'/logos/logo-text.svg'}
              layout='fill'
              objectFit='contain'
              objectPosition='left'
            />
          </div>
          <p className='mb-2'>
            Servis elektronskih uređaja - mobilnih telefona, laptopova, tableta
          </p>
          <div className='font-EM text-tiny uppercase tracking-small'>
            <div className='mb-2'>
              PIB: <span className='font-EL'>112594185</span> // Matični broj:{' '}
              <span className='font-EL'>66216438</span> // Tekući račun:{' '}
              <span className='font-EL'>200-3346280101980-89</span>
            </div>
          </div>
          <div className='flex mt-16'>
            <div className='mr-20'>
              <div className='font-EM text-3xl'>Svrljig</div>
              <div className='font-EL text-md mb-5'>(sedište)</div>
              <div className='font-EL text-xl mb-5'>+381 (677) 209 310</div>
              <div className='font-EL text-md mb-4'>
                Sretena Milića 1, 18360 Svrljig
              </div>

              <Link href='#'>
                <a className='font-EB text-tiny uppercase tracking-small hover:text-red'>
                  vidi na mapi
                </a>
              </Link>
            </div>
            <div className='ml-20'>
              <div className='font-EM text-3xl'>Niš</div>
              <div className='font-EL text-md mb-5'>(izdvojeno mesto)</div>
              <div className='font-EL text-xl mb-5'>+381 (677) 209 310</div>
              <div className='font-EL text-md mb-4'>
                Gornjomatejevačka 83b, 18000 Niš
              </div>
              <Link href='#'>
                <a className='font-EB text-tiny uppercase tracking-small hover:text-red'>
                  vidi na mapi
                </a>
              </Link>
            </div>
          </div>

          <div className='flex items-center mt-10 mr-5'>
            <Link href='https://facebook.com/yabooka.rs'>
              <a target='_blank' className='mr-5'>
                <Button>Facebook</Button>
              </a>
            </Link>
            <Link href='https://www.instagram.com/yabooka.rs/'>
              <a target='_blank' className='mr-5'>
                <Button>Instagram</Button>
              </a>
            </Link>
            <Link href='https://t.me/appleservisnis'>
              <a target='_blank' className='mr-5'>
                <Button>Telegram</Button>
              </a>
            </Link>
            <Link href='https://invite.viber.com/?g2=AQALwmIxg%2F3E40v3cgVQiMytDg28mnblb1vmTA5w3mNRcbjpwlEEO9u9YnXSYRhN'>
              <a target='_blank' className='mr-5'>
                <Button>Viber</Button>
              </a>
            </Link>
          </div>
          <div className='text-md w-full max-w-1/2 text-center mt-10'>
            Za sve informacije i pitanja možete nam se obratiti putem email
            adrese{' '}
            <span className='font-ESB text-xl'>yabooka.rs[at]gmail.com</span>
          </div>
        </div>
      </div>
    </Page>
  )
}
