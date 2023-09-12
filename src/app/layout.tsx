import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'To do List - Vicente',
  description: 'Simple, flexível e poderoso para a organização das suas tarefas cotidianas.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body suppressHydrationWarning={true} // This prevents extensions from causing a server/client mismatch
      >
        {children}
      </body>
    </html>
  )
}
