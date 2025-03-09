import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const inter = Roboto({
  subsets: ["latin"], weight: ["400"]})

export const metadata: Metadata = {
  title: "Magnus Hem - portfolio",
  description: "Magnus Hem's portfolio, made for Magnus Hem and made by Magnus Hem",
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
