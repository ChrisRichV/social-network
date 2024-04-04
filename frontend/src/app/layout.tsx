
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import background from '../../public/assets/background.png';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })
const MainHeader = dynamic(() => import('@/components/headers/MainHeader'), { ssr: false });


export const metadata: Metadata = {
  title: 'Iriesphere',
  description: 'Rastafari social-network',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
=======

      <body className={inter.className}>

>>>>>>> 7c8f7315593bd6374a3a9e6573066531c6b7bd92
        <div style={{
          backgroundImage: `url("${background.src}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}>{children}
        </div>
<<<<<<< HEAD
        <div/>
      </body>
=======


        <div />
      </body>

>>>>>>> 7c8f7315593bd6374a3a9e6573066531c6b7bd92
    </html>
  )
}