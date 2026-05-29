import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vaishnavi Srinath — AI & Software Engineer',
  description: 'Software Engineer specializing in AI/ML systems, scalable backend infrastructure, and data engineering. Ex-Philips SDE, ML Research Assistant at SFSU.',
  keywords: ['Software Engineer', 'AI Engineer', 'ML Engineer', 'Data Engineer', 'Python', 'Java', 'Cloud'],
  authors: [{ name: 'Vaishnavi Srinath' }],
  openGraph: {
    title: 'Vaishnavi Srinath — AI & Software Engineer',
    description: 'Building systems that stay up, scale under pressure, and surface meaningful insight.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
