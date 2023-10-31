import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const inter = Roboto({
  subsets: ['latin'], weight: ['400']})

export const metadata: Metadata = {
  title: 'Magnus Hem - portfolio',
  description: 'Made by Magnus Hem Jensen',
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
