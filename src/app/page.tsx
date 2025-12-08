import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoCraftHub',
  description: 'EcoCraftHub is an innovative platform that leverages the creator economy to empower small businesses and e-commerce stores with sustainable product design solutions. It combines no-code/low-code development tools, AI-driven sustainability analytics, and a community marketplace for eco-friendly resources.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoCraftHub</h1>
      <p className="mt-4 text-lg">EcoCraftHub is an innovative platform that leverages the creator economy to empower small businesses and e-commerce stores with sustainable product design solutions. It combines no-code/low-code development tools, AI-driven sustainability analytics, and a community marketplace for eco-friendly resources.</p>
    </main>
  )
}
