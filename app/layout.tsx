import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Douraid Dridi | AI & Full Stack Engineer',
  description: 'Portfolio of Douraid Dridi — AI & Full Stack Engineer specializing in multi-agent orchestration, LLM integration, and full-stack product development.',
  keywords: 'Douraid Dridi, AI Engineer, Full Stack Engineer, Multi-agent, LLM, LangGraph, LangChain, FastAPI, React, Next.js, Flutter, Spring Boot, Portfolio',
  authors: [{ name: 'Douraid Dridi' }],
  openGraph: {
    title: 'Douraid Dridi | AI & Full Stack Engineer',
    description: 'AI-focused engineer specializing in multi-agent orchestration, LLM integration, and full-stack product development.',
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

