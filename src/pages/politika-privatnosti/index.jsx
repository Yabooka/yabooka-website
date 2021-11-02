import Page from '@/components/page'

export default function Privacy() {
  return (
    <Page
      title='Yabooka | Politika Privatnosti'
      description='Apple servis Yabooka Niš - politika privatnosti.'
    >
      <div className='text-center pt-[8rem] text-4xl mb-5'>
        Politika privatnosti
      </div>
      <div className='font-ESB text-center mb-5'>
        Poslednji update: 01.11.2021.godine
      </div>
      <div className='text-xl mb-5 max-w-[800px] text-center mx-auto'>
        Mi brinemo o Vašoj privatnosti. Molimo Vas pročitajte našu politiku
        privatnosti radi detaljnijeg objašnjenja koje Vaše podatke prikupljamo,
        kako ih koristimo i kako ih čuvamo.
      </div>
      <hr />
      <p className='mt-10'>
        Informacije navedene u ovoj Politici privatnosti pokrivaju Vaše
        interakcije na svim delovima web stranice. Čvrsto verujemo u zaštitu
        Vaše privatnosti i naš je cilj da omogućimo posetiocima da pruže onoliko
        ili što manje informacija koliko im je prijatno. Ova Politika
        privatnosti reguliše našu upotrebu informacija koje nam date ili koje na
        drugi način dobijemo u pružanju naših usluga Vama. Ova politika se može
        promeniti s vremena na vreme, pa vas molimo da povremeno proveravate
        najnovije informacije. Informacije koje dostavite danas će se koristiti
        samo u skladu sa politikom koja je na snazi ​​od ovog datuma.
      </p>
      <h2 className='text-2xl font-EB text-center my-5'>
        Vrste informacija koje prikupljamo
      </h2>
      <h3 className='text-xl font-ESB text-center my-5'>Vaši lični podaci</h3>
      <p>
        Prikupljamo lične podatke kada ih posetioci dobrovoljno podnesu u našim
        anketama, porudžbinama ili obrascima za kontakt. Lični podaci se traže
        da bi se zahtev obradio. Ove informacije mogu uključivati ​​Vaše ime,
        poštansku adresu, broj telefona, adresu e-pošte i druge informacije. Sve
        informacije prikupljene na ovoj web stranici koriste se samo za interne
        svrhe!
      </p>
      <h3 className='text-xl font-ESB text-center my-5'>Lične informacije</h3>
      <p>
        Prikupljamo opšte podatke uključujući ime vašeg domena, naziv web
        stranice sa koje ste ušli na naš sajt, koje stranice posećujete na našem
        sajtu i koliko vremena provodite na svakoj stranici. Ove opšte
        informacije ne uključuju specifične informacije o Vama. Takođe možemo da
        koristimo tehnologiju „kolačića“ za dobijanje neličnih informacija od
        onlajn posetilaca. IP adrese evidentiramo za potrebe administracije
        sistema. IP adrese se evidentiraju za praćenje sesije korisnika.
        Koristimo ove informacije za praćenje i poboljšanje naših sajtova i ne
        pružamo ove informacije spoljnim stranama.
      </p>
      <h3 className='text-xl font-ESB text-center my-5'>
        Korišćenje informacija
      </h3>
      <p>
        Ni pod kojim okolnostima nećemo pružati ili otkrivati ​​prikupljene
        informacije. Ni u kom trenutku nećemo dozvoliti da se prikupljene
        informacije prodaju, trguju ili na drugi način pregledaju bilo koje
        treće strane. Servis "Yabooka" ulaže sve napore da poštuje privatnost
        naših onlajn posetilaca.
      </p>
    </Page>
  )
}
