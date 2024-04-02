import '../styles/globals.css'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'InfinixSoft - Your App. Our Passion',
  description: 'InfinixSoft offers strategy, business and product development (mobile, social and internet technologies) to startup and enterprise clients.',
  keywords: ['Next.js', 'React', 'JavaScript', "HTML", "Web3", "Web2", "Metaverse", "Smart Contracts", "NodeJs", "Blockchain", "iOS", "Ruby", "Rails", "Apps", "Mobile", "Web Development", "Android", "Software", "StartUps"],
  manifest: './site.webmanifest',
  icons: {
    icon: [
      { url: '/img/favicons/favicon_infinix.ico', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/img/favicons/apple-touch-icon.png'
  },
  openGraph: {
    title: 'InfinixSoft - Your App. Our Passion',
    description: 'InfinixSoft offers strategy, business and product development (mobile, social and internet technologies) to startup and enterprise clients.',
    url: 'https://infinixsoft.com',
    siteName: 'InfinixSoft',
    images: [
      {
        url: 'https://infinixsoft.com/OG-IMAGE-SOFT.webp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
export const viewport = {
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
          <Script
        onLoad={() => {
          (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3929516,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        }}
      />

      <Script async="" src="//connect.facebook.net/en_US/fbds.js" />
      <Script async="" src="https://www.google-analytics.com/analytics.js" />
      <Script src="https://js.hscollectedforms.net/collectedforms.js" type="text/javascript" id="CollectedForms-22404315" data-leadin-portal-id="22404315" data-leadin-env="prod" data-loader="hs-scriptloader" data-hsjs-portal="22404315" data-hsjs-env="prod" data-hsjs-hublet="na1" />
      <body>{children}</body>
    </html>
  )
}
