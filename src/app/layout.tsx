import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/layouts/Header"
import Footerabv from '@/components/layouts/Footerabv'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {/*Page*/}
        <main className = "bg-white">
        {children}
        </main>
        <Footerabv/>
        </body>
    </html>
  )
}
