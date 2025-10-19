import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DefaultSeo } from 'next-seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Learning Platform - AI-Powered Education for Teachers & Students in Uganda',
  description: 'Transform education in Uganda with our AI-powered platform. Features gamified learning for students and intelligent teaching tools for educators. Start your free trial today!',
  keywords: 'AI education Uganda, smart learning platform, teacher tools Uganda, student portal, gamified learning, educational technology Uganda, online learning Uganda',
  authors: [{ name: 'Smart Learning Platform' }],
  openGraph: {
    title: 'Smart Learning Platform - AI-Powered Education in Uganda',
    description: 'Transform education with AI-powered tools for teachers and gamified learning for students across Uganda.',
    type: 'website',
    url: 'https://smartlearning.ug',
    siteName: 'Smart Learning Platform',
    locale: 'en_UG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Learning Platform - AI-Powered Education in Uganda',
    description: 'Transform education with AI-powered tools for teachers and gamified learning for students.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
