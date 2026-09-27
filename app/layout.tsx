import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timothy Le — Software Engineer',
  description: 'Software engineering student at UC Irvine, focused on backend engineering, web development, and AI. Explore my work and experience.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
