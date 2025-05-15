import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'College Placement Portal',
  description: 'A platform to connect students with potential employers',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
