'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const roles = [
  'AI & Full Stack Engineer',
  'Expert en systèmes multi-agents',
  'Intégration de LLMs',
  'Développeur Full-Stack',
]

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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
    hidden: { y: 20, opacity: 0 },
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
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 dark:from-blue-900/20 via-purple-100/30 dark:via-purple-900/20 to-white dark:to-black" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/dd-removebg-preview (1).png"
              alt="Douraid Dridi"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Douraid Dridi</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-lg">
            Ingénieur Junior
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="gradient-text font-semibold"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
        >
          Diplômé en génie informatique (ESPRIT), spécialisé dans l'orchestration
          multi-agents, l'intégration de LLMs et le développement full-stack. Passionné
          par la construction de produits IA de bout en bout.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm md:text-base text-gray-700 dark:text-gray-300"
        >
          <a
            href="https://www.google.com/maps?q=Bizerte,Tunisia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
            Bizerte, Tunisie
          </a>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <a
            href="mailto:Douraid.dridi@esprit.tn"
            className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaEnvelope className="text-blue-600 dark:text-blue-400" />
            Douraid.dridi@esprit.tn
          </a>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <a
            href="tel:+21658861240"
            className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaPhone className="text-blue-600 dark:text-blue-400" />
            +216 58 861 240
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/DDouraid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors glow-effect"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-2xl text-gray-900 dark:text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/0douraid/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors glow-effect"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400" />
          </motion.a>
          <motion.a
            href="mailto:Douraid.dridi@esprit.tn"
            className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors glow-effect"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="text-2xl text-gray-900 dark:text-white" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span>Découvrir plus</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

