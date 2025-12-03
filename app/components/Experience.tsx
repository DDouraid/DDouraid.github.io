'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const experiences = [
  {
    title: 'Stage d\'ingénieur',
    company: 'Sofrecom Tunisie',
    role: 'Ingénieur développement AI/Mobile',
    period: '07/2025 – 09/2025',
    description: [
      'AgenticO AI App: Conception et développement d\'une application mobile multi‑agents pour les développeurs (génération de code depuis UI, refactoring, doc auto, tests, sécurité).',
      'Architecture: serveur MCP, intégration LangChain, Auth Firebase, support multi‑langages.',
      'Technologie: Flutter, MCP, LangChain, Claude 3.5, OpenAI APIs, Firebase, LiteLLM.',
    ],
  },
  {
    title: 'Stage d\'immersion en entreprise',
    company: 'Sofrecom Tunisie: Equipe Recherche & Innovation',
    role: 'Ingénieur développement Full Stack Web',
    period: '07/2024 – 09/2024',
    description: [
      'Conception et développement d\'une plateforme éducative pour la génération du contenu dédiée aux colaborateurs Orange (LLM, IA générative, VR).',
      'Technologie: Angular, Spring Boot, Swagger, Unity, and LLMs.',
    ],
  },
  {
    title: 'Stage de fin d\'études',
    company: 'ArabSoft',
    role: 'Développeur Full Stack Web/Mobile',
    period: '02/2023 – 05/2023',
    description: [
      'Projet de fin d\'étude: Conception et développement d\'une application Chatroom one/one to many pour améliorer la communication en entreprise.',
      'Technologie: Angular, Spring Boot, Flutter',
    ],
  },
  {
    title: 'Stage d\'été',
    company: 'CYNAPSYS',
    role: 'Développeur Full Stack Web',
    period: '06/2022 – 07/2022',
    description: [
      'Conception et développement d\'une site RH facilitant les candidatures.',
      'Technologie: SQL, J2EE.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="gradient-text">Expérience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass rounded-xl p-6 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <FaBriefcase className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 mb-3 font-medium">{exp.role}</p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white dark:border-black transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

