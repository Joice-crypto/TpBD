
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Brasileirão',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  return (
    
    <html lang="en">
      <body className={inter.className}>
      <UserProvider>
        <Header></Header>
        {children}
        <Footer></Footer>
        </UserProvider>
        </body>
      
    </html>
  )
}
