import Page from '@/components/page'
import ReactFullpage from '@fullpage/react-fullpage'
import VracanjePodataka from '@/sections/vracanjepodataka'
import ZamenaDelova from '@/sections/zamenadelova'
import ServisPloca from '@/sections/servisploca'

const anchors = ['vraćanje-podataka', 'zamena-delova', 'servis-ploča']

const Usluge = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    render={({ state, fullpageApi }) => {
      return (
        <Page
          title='Yabooka | Usluge'
          description='Usluge koje pruža Apple servis Yabooka. Zamena delova - ekrana, baterija, flet kablova, servis matičnih ploča.'
        >
          {/* vracanje podataka */}
          <VracanjePodataka />
          {/* zamena delova */}
          <ZamenaDelova />
          {/* maticne ploce */}
          <ServisPloca />
        </Page>
      )
    }}
  />
)

export default Usluge
