'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Systèmes d\'exploitation',
    skills: ['Windows', 'Linux', 'Mobile'],
  },
  {
    title: 'DevOps',
    skills: ['Git', 'CI/CD', 'Docker', 'Jenkins'],
  },
  {
    title: 'Frameworks',
    skills: ['Angular', 'Spring Boot', 'Flutter', 'Symfony', 'Unity'],
  },
  {
    title: 'Langages',
    skills: ['Java', 'Python', 'JavaScript', 'Dart'],
  },
  {
    title: 'Bases de données',
    skills: ['MySQL', 'Oracle', 'SQLite'],
  },
  {
    title: 'IA & Machine Learning',
    skills: ['Machine Learning', 'LLMs', 'Systèmes Multi-Agents', 'Agentic AI', 'Deep Learning'],
  },
  {
    title: 'Méthodologies',
    skills: ['Agile (Scrum, Kanban)', 'TDD', 'Microservices'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
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
          <span className="gradient-text">Compétences</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-lg font-semibold text-white mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-gray-300 text-sm hover:border-blue-400 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 gradient-text text-center">
            Certificats
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-300 mb-2">
                <span className="text-blue-400 font-semibold">AWS Academy Graduate</span> – Cloud Foundations (2025)
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-blue-400 font-semibold">Hashgraph Developer Certificate</span> (2025)
              </p>
              <p className="text-gray-300">
                <span className="text-blue-400 font-semibold">CCNA</span> (2024)
              </p>
            </div>
            <div>
              <p className="text-gray-300 mb-2">
                <span className="text-purple-400 font-semibold">Certificat Langue Anglaise:</span> IEUK (B2), BEC (B2)
              </p>
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Certificat Langue Française:</span> B2
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

