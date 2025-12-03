'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLock, FaUserPlus } from 'react-icons/fa'

const projects = [
  {
    title: 'TheraBot',
    description: 'Application mobile de soutien psychologique basée sur l\'IA générative.',
    technologies: ['Dart', 'Flutter', 'IA Générative'],
    category: 'Mobile / IA',
    isPrivate: true,
    githubUrl: 'https://github.com/DDouraid/TheraBot',
    year: '2025',
  },
  {
    title: 'Omnitrix',
    description: 'Powerful AI tool',
    technologies: ['AI', 'Machine Learning'],
    category: 'IA / Machine Learning',
    isPrivate: true,
    githubUrl: 'https://github.com/DDouraid/Omnitrix',
    year: '2024',
  },
  {
    title: 'Aawen_Devops',
    description: 'Simple Maven project for DevOps pipeline',
    technologies: ['Docker', 'Maven', 'DevOps', 'CI/CD'],
    category: 'DevOps',
    isPrivate: false,
    githubUrl: 'https://github.com/DDouraid/Aawen_Devops',
    year: '2024',
  },
  {
    title: 'PiDev-AlphaNova',
    description: 'Projet de développement avec architecture moderne',
    technologies: ['Java', 'Spring Boot'],
    category: 'Web Development',
    isPrivate: false,
    githubUrl: 'https://github.com/DDouraid/PiDev-AlphaNova',
    year: '2024',
  },
  {
    title: 'JobBoard',
    description: 'JobBoard-MS est un projet académique conçu pour former les étudiants à l\'architecture microservices à travers une application de gestion des offres d\'emploi.',
    technologies: ['HTML', 'Microservices', 'Spring Boot', 'Angular'],
    category: 'Web / Microservices',
    isPrivate: false,
    githubUrl: 'https://github.com/DDouraid/JobBoard',
    isForked: true,
    year: '2024',
  },
  {
    title: 'GenAi-Powered-WebApp_Orange-GenLearning',
    description: 'Conception et développement d\'une plateforme éducative pour la génération du contenu dédiée aux colaborateurs Orange (LLM, IA générative, VR).',
    technologies: ['AI', 'Web App', 'Generative AI'],
    category: 'IA Générative / Web',
    isPrivate: true,
    githubUrl: 'https://github.com/DDouraid/GenAi-Powered-WebApp_Orange-GenLearning',
    year: '2024',
  },
  {
    title: 'AgenticAi-Powered-Flutter-AgenticoApp',
    description: 'AgenticO AI App: Conception et développement d\'une application mobile multi‑agents pour les développeurs (génération de code depuis UI, refactoring, doc auto, tests, sécurité).',
    technologies: ['Flutter', 'Dart', 'Agentic AI'],
    category: 'Mobile / IA Agentique',
    isPrivate: true,
    githubUrl: 'https://github.com/DDouraid/AgenticAi-Powered-Flutter-AgenticoApp',
    year: '2024',
  },
  {
    title: 'PocAIPro',
    description: 'Proof of Concept pour une application IA professionnelle',
    technologies: ['AI', 'POC'],
    category: 'IA / POC',
    isPrivate: true,
    githubUrl: 'https://github.com/DDouraid/PocAIPro',
    year: '2024',
  },
  {
    title: 'Douraid_5SAE9_DevMobile',
    description: 'Projet de développement mobile académique',
    technologies: ['Mobile', 'Flutter'],
    category: 'Mobile Development',
    isPrivate: true,
    githubUrl: 'https://github.com/DDouraid/Douraid_5SAE9_DevMobile',
    year: '2024',
  },
  {
    title: 'DDouraid',
    description: 'Repository principal',
    technologies: ['Portfolio'],
    category: 'Portfolio',
    isPrivate: false,
    githubUrl: 'https://github.com/DDouraid/DDouraid',
    year: '2024',
  },
]

export default function Projects() {
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
          <span className="gradient-text">Mes Projets GitHub</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform group relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {project.isForked && (
                      <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                        Fork
                      </span>
                    )}
                    {project.isPrivate && (
                      <FaLock className="text-yellow-400 text-sm" title="Repository privé" />
                    )}
                  </div>
                  <span className="text-sm text-purple-400">{project.year}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium whitespace-nowrap ml-2">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 items-center">
                {project.isPrivate ? (
                  <>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                      title="Voir le repository (accès limité)"
                    >
                      <FaGithub />
                      <span>Voir</span>
                    </a>
                    <a
                      href={`mailto:Douraid.dridi@esprit.tn?subject=Demande d'accès collaborateur - ${project.title}&body=Bonjour,%0D%0A%0D%0AJe souhaiterais obtenir l'accès collaborateur au repository ${project.title}.%0D%0A%0D%0AMerci pour votre considération.`}
                      className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm bg-yellow-500/10 px-3 py-1.5 rounded-lg hover:bg-yellow-500/20"
                      title="Demander l'accès collaborateur"
                    >
                      <FaUserPlus />
                      <span>Demander l'accès</span>
                    </a>
                  </>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <FaGithub />
                    <span>Voir le code</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

