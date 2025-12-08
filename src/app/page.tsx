import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoAI Hub',
  description: 'A unique platform that combines AI productivity tools with climate tech solutions to help businesses track their carbon footprint and optimize operational efficiency through data-driven insights.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoAI Hub</h1>
      <p className="mt-4 text-lg">A unique platform that combines AI productivity tools with climate tech solutions to help businesses track their carbon footprint and optimize operational efficiency through data-driven insights.</p>
    </main>
  )
}
