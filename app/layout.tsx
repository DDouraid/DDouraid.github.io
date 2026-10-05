import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './components/LanguageProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://ddouraid.github.io'),
  title: 'Douraid Dridi | Software Engineer — AI & Full Stack',
  description: 'Portfolio of Douraid Dridi — Software Engineer specializing in multi-agent orchestration, LLM integration, and full-stack product development.',
  keywords: 'Douraid Dridi, AI Engineer, Full Stack Engineer, Multi-agent, LLM, LangGraph, LangChain, FastAPI, React, Next.js, Flutter, Spring Boot, Portfolio',
  authors: [{ name: 'Douraid Dridi' }],
  openGraph: {
    title: 'Douraid Dridi | Software Engineer — AI & Full Stack',
    description: 'Software engineer specializing in multi-agent orchestration, LLM integration, and full-stack product development.',
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
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

