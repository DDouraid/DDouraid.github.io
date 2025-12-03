'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaAward, FaCode } from 'react-icons/fa'

export default function About() {
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
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="gradient-text">À propos de moi</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Majeur de classe – Étudiant en ingénierie informatique (classe terminale), 
              passionné par l'<span className="text-blue-400 font-semibold">IA/ML</span>, 
              l'intégration de <span className="text-purple-400 font-semibold">LLMs</span>, 
              les <span className="text-cyan-400 font-semibold">systèmes multi-agents</span> et 
              l'<span className="text-pink-400 font-semibold">Agentic AI</span>. 
              Expertise en <span className="text-green-400 font-semibold">Angular</span>, 
              <span className="text-green-400 font-semibold"> Spring Boot</span>, 
              <span className="text-green-400 font-semibold"> Java</span>, 
              <span className="text-green-400 font-semibold"> Python</span>, 
              <span className="text-green-400 font-semibold"> Flutter</span> et méthodes 
              <span className="text-yellow-400 font-semibold"> Agile</span>. 
              Orienté résultats, avec expérience en recherche pour transformer des idées 
              innovantes en solutions concrètes et projets complexes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Majeur de Classe</h3>
              <p className="text-gray-400">
                Étudiant en ingénierie informatique - Classe terminale
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mb-4">
                <FaCode className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Full-Stack Developer</h3>
              <p className="text-gray-400">
                Expertise en développement web et mobile
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 mb-4">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI Enthusiast</h3>
              <p className="text-gray-400">
                Passionné par l'IA/ML, les systèmes multi-agents et l'Agentic AI
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

