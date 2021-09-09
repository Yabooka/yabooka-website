import Line from '@/components/line'

export default function Informacije() {
  return (
    <div className='section'>
      <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-20 md:justify-between'>
        <div className='md:w-full'>
          <Line title='važne informacije' />
          <div className='flex items-start justify-between gap-x-20 mt-20'>
            <div className='w-1/2'>
              <h3 className='text-2xl font-EB mb-5'>Backup podataka i šifre</h3>
              <p className='text-sm'>
                Ukoliko se radi zamena nekog dela <u>neophodno</u> je da naš
                tehničar bude u mogućnosti da testira isti nakon zamene i zbog
                toga je potrebno <u>ukloniti šifre/šablone za otključavanje</u>.{' '}
                <br />
                <br />
                Naši tehničari se trude da ne ugroze podatke koji se nalaze na
                Vašem uređaju, ali ukoliko se rade intervencije na matičnim
                pločama onda je iz predostrožnosti bolje da uradite backup
                podataka.
              </p>
            </div>
            <div className='w-1/2'>
              <h3 className='text-xl font-EM mb-5'>
                Pre slanja ili donošenja uređaja na servis <u>poželjno je</u> da
                uradite backup podataka i uklonite šifre ili šablone za
                zaključavanje ukoliko ih koristite.
              </h3>
              <div className='text-md underline'>
                Servis "Yabooka" ne snosi odgovornost za gubitak podataka iz
                uređaja.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
