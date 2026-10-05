'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from './LanguageProvider'

export default function Skills() {
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
          <span className="gradient-text">{t.skills.heading}</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-300 dark:border-blue-500/30 text-gray-800 dark:text-gray-300 text-sm hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
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
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 gradient-text text-center">
            {t.skills.certificates.heading}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {t.skills.certificates.items.map((cert, i) => (
              <p key={i} className="text-gray-700 dark:text-gray-300 text-center md:text-left">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">•</span> {cert}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 gradient-text text-center">
            {t.skills.languages.heading}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {t.skills.languages.items.map((lang, i) => (
              <div key={i} className="rounded-lg bg-gray-100 dark:bg-gray-800/60 p-4">
                <p className="text-gray-900 dark:text-white font-semibold text-lg">{lang.name}</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
