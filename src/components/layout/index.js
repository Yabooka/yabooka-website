import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='px-5 md:max-w-mywidth mx-auto'>{children}</main>
      <Footer />
    </>
  )
}
