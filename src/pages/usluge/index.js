import Page from '@/components/page'
import VracanjePodataka from '@/sections/vracanjepodataka'
import ZamenaDelova from '@/sections/zamenadelova'
import ServisPloca from '@/sections/servisploca'

export default function Usluge() {
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
}
