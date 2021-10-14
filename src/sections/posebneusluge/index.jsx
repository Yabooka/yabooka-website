import Line from '@/components/line'

export default function PosebneUsluge() {
  return (
    <div className='flex items-center justify-center h-96 pb-20'>
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-20 md:justify-between'>
        <div className='md:w-full'>
          <Line title='posebne usluge' />
          <div className='flex flex-col md:flex-row md:items-start justify-between gap-x-10 mt-20'>
            <div className='md:w-1/3'>
              <h3 className='text-2xl font-EB mb-5'>Mail-in popravka</h3>
              <p className='text-sm'>
                <span className='font-EM'>Mail-in popravka</span> je usluga koja
                Vam omogućuje da, ukoliko niste iz Niša ili okoline, možete
                poslati Vaš uređaj bilo kojom kurirskom službom, a mi ćemo Vam
                nakon popravke poslati uređaj nazad o našem trošku.
                <br />
                <br />
                Poštarinu prilikom slanja uređaja plaćate sami.
              </p>
            </div>
            <div className='md:w-1/3'>
              <h3 className='text-2xl font-EB mb-5'>On-site preuzimanje</h3>
              <p className='text-sm'>
                Usluga <span className='font-EM'>on-site preuzimanje</span> je
                usluga koja podrazumeva preuzimanje uređaja na Vašoj adresi.
                Ukoliko iz bilo kog razloga ne možete doći do nas, možete nas
                pozvati i naš kurir će doći do Vas i preuzeti uređaj. <br />
                <br />
                <span className='font-EM'>
                  Usluga je dostupna samo za grad Niš i besplatna je.
                </span>
              </p>
            </div>
            <div className='md:w-1/3'>
              <h3 className='text-2xl font-EB mb-5'>Saradnja sa firmama</h3>
              <p className='text-sm'>
                Ukoliko ste predstavnik neke firme možete nas kontaktirati putem
                email adrese{' '}
                <span className='font-EM'>
                  <a href='mailto: yabooka.rs@gmail.com'>
                    {' '}
                    yabooka.rs@gmail.com
                  </a>
                </span>{' '}
                i informisati se o svemu što Vas zanima. Svaki vid saradnje je
                moguć.
                <br />
                <br />
                Za firme važi <u>stalni popust od 10%</u> za servis 3 i više
                uređaja istovremeno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
