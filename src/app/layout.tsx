import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoCraftHub',
  description: 'EcoCraftHub is an innovative platform that leverages the creator economy to empower small businesses and e-commerce stores with sustainable product design solutions. It combines no-code/low-code development tools, AI-driven sustainability analytics, and a community marketplace for eco-friendly resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
