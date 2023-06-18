import { Footer, Navbar } from '@/components'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description: 'Discaver the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
