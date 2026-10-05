'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLock, FaUserPlus } from 'react-icons/fa'
import { useLanguage } from './LanguageProvider'

const projectMeta: {
  githubUrl: string
  isPrivate: boolean
  isForked?: boolean
  year: string
}[] = [
  { githubUrl: 'https://github.com/DDouraid', isPrivate: true, year: '2026' },
  { githubUrl: 'https://github.com/DDouraid', isPrivate: true, year: '2025' },
  { githubUrl: 'https://github.com/DDouraid/TheraBot', isPrivate: true, year: '2025' },
  { githubUrl: 'https://github.com/DDouraid/Omnitrix', isPrivate: true, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/Aawen_Devops', isPrivate: false, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/PiDev-AlphaNova', isPrivate: false, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/JobBoard', isPrivate: false, isForked: true, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/GenAi-Powered-WebApp_Orange-GenLearning', isPrivate: true, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/AgenticAi-Powered-Flutter-AgenticoApp', isPrivate: true, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/PocAIPro', isPrivate: true, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/Douraid_5SAE9_DevMobile', isPrivate: true, year: '2024' },
  { githubUrl: 'https://github.com/DDouraid/DDouraid', isPrivate: false, year: '2024' },
]

export default function Projects() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="projects"
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
          <span className="gradient-text">{t.projects.heading}</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {t.projects.items.map((project, index) => {
            const meta = projectMeta[index]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 hover:scale-105 transition-transform group relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      {meta.isForked && (
                        <span className="px-2 py-0.5 rounded bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-medium">
                          {t.projects.fork}
                        </span>
                      )}
                      {meta.isPrivate && (
                        <FaLock className="text-yellow-600 dark:text-yellow-400 text-sm" title="Repository privé" />
                      )}
                    </div>
                    <span className="text-sm text-purple-600 dark:text-purple-400">{meta.year}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-medium whitespace-nowrap ml-2">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  {meta.isPrivate ? (
                    <>
                      <a
                        href={meta.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                        title="Voir le repository (accès limité)"
                      >
                        <FaGithub />
                        <span>{t.projects.view}</span>
                      </a>
                      <a
                        href={`mailto:Douraid.dridi@esprit.tn?subject=Demande d'accès collaborateur - ${project.title}&body=Bonjour,%0D%0A%0D%0AJe souhaiterais obtenir l'accès collaborateur au repository ${project.title}.%0D%0A%0D%0AMerci pour votre considération.`}
                        className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 transition-colors text-sm bg-yellow-100 dark:bg-yellow-500/10 px-3 py-1.5 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-500/20"
                        title="Demander l'accès collaborateur"
                      >
                        <FaUserPlus />
                        <span>{t.projects.requestAccess}</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={meta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                    >
                      <FaGithub />
                      <span>{t.projects.viewCode}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
