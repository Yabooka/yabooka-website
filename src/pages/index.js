import Page from '@/components/page'
import Intro from '@/sections/intro'
import PosebneUsluge from '@/sections/posebneusluge'
import Informacije from '@/sections/informacije'

export default function Home() {
  return (
    <Page
      title='Yabooka | Home'
      description='Servis Apple uredjaja Niš, servis android uređaja Niš, zamena baterija macbook Niš, zamena baterija iphone Niš, zamena ekrana macbook, zamena ekrana iphone'
    >
      <Intro />
      <PosebneUsluge />
      <Informacije />
    </Page>
  )
}
