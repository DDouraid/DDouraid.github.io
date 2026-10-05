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
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              Majeur de classe – Ingénieur en génie informatique diplômé d'<span className="text-blue-600 dark:text-blue-400 font-semibold">ESPRIT</span>, 
              spécialisé dans l'<span className="text-purple-600 dark:text-purple-400 font-semibold">orchestration multi-agents</span>, 
              l'intégration de <span className="text-cyan-600 dark:text-cyan-400 font-semibold">LLMs</span> et le 
              <span className="text-pink-600 dark:text-pink-400 font-semibold"> développement full-stack</span>. 
              Expérience confirmée dans la livraison de fonctionnalités IA de bout en bout 
              (agents, streaming temps réel, contrôle qualité, tableaux de bord, exports).
              Orienté résultats, avec une solide expérience côté <span className="text-green-600 dark:text-green-400 font-semibold">FastAPI</span>, 
              <span className="text-green-600 dark:text-green-400 font-semibold"> React</span>, 
              <span className="text-green-600 dark:text-green-400 font-semibold"> Python</span> et 
              méthodes <span className="text-yellow-600 dark:text-yellow-400 font-semibold"> Agile</span>.
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Majeur de Classe</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Diplômé Ingénieur Informatique – ESPRIT
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mb-4">
                <FaCode className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">AI & Full Stack Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Agents IA, LLMs, APIs et produits web/mobile
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 mb-4">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Multi-agents & LLM</h3>
              <p className="text-gray-600 dark:text-gray-400">
                LangGraph, LangChain, CrewAI et orchestration
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

