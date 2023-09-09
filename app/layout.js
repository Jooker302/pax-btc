import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PaxBTC Coin',
  description: 'PaxBTC by DxSale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/main.jpeg'></link>
      </head>
      <body className='bg-[#2F2F2F]'>{children}</body>
    </html>
  )
}
