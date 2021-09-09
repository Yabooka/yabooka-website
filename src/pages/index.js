import Page from '@/components/page'
import ReactFullpage from '@fullpage/react-fullpage'
import Intro from '@/sections/intro'
import PosebneUsluge from '@/sections/posebneusluge'
import Informacije from '@/sections/informacije'

const anchors = ['intro', 'posebne-usluge', 'važne-informacije']

const Home = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    render={({ state, fullpageApi }) => {
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
    }}
  />
)

export default Home
