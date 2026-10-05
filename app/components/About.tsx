'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaAward, FaCode } from 'react-icons/fa'
import { useLanguage } from './LanguageProvider'

export default function About() {
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

  const cardIcons = [FaGraduationCap, FaCode, FaAward]
  const cardGradients = [
    'from-blue-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-blue-600',
  ]

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
            <span className="gradient-text">{t.about.heading}</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              {t.about.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.about.cards.map((card, index) => {
              const Icon = cardIcons[index]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${cardGradients[index]} mb-4`}
                  >
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{card.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
