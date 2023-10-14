import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Potloodgum',
  description: 'Goede doelen, goede websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
