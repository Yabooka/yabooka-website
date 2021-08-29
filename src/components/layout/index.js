import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='pt-30 md:pt-40 px-5 md:px-0 md:max-w-mywidth mx-auto'>
        {children}
      </main>
      <Footer />
    </>
  )
}
