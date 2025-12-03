import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Douraid Dridi | Full-Stack Developer & AI Enthusiast',
  description: 'Portfolio of Douraid Dridi - Full-Stack Developer, AI/ML Enthusiast, and Computer Engineering Student',
  keywords: 'Douraid Dridi, Full-Stack Developer, AI, Machine Learning, Angular, Spring Boot, Flutter, Portfolio',
  authors: [{ name: 'Douraid Dridi' }],
  openGraph: {
    title: 'Douraid Dridi | Full-Stack Developer & AI Enthusiast',
    description: 'Portfolio of Douraid Dridi - Full-Stack Developer, AI/ML Enthusiast',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

