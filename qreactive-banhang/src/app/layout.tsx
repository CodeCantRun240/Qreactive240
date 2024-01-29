import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          'relative',
          inter.className
        )}>
        <main className='relative overflow-hidden '>
          <Providers>
            <Navbar />
            <div className="h-full  mt-0">
              <div className="w-screen">
                {children}
              </div>
            </div>
            <Footer />
            <div className="h-full  mt-0">
              <div className="w-screen">
               
              </div>
            </div>

          </Providers>
        </main>

          
      </body>
    </html>
  )
}