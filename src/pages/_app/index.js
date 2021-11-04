import 'tailwindcss/tailwind.css'
import '@/styles/global.css'
import Layout from '@/components/layout'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
      />
      <Script strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GTAG}', {
          page_path: window.location.pathname,
        })`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
