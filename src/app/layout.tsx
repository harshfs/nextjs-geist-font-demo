import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Nexsyco - Elite Freelance Developers & Tech Solutions',
  description: 'Connect with top 1% vetted developers from around the world. Build faster, scale flexibly, and innovate with confidence.',
  keywords: 'freelance developers, tech solutions, software development, web development, mobile apps',
  authors: [{ name: 'Nexsyco Team' }],
  openGraph: {
    title: 'Nexsyco - Elite Freelance Developers',
    description: 'Connect with top 1% vetted developers from around the world.',
    url: 'https://nexsyco.com',
    siteName: 'Nexsyco',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
