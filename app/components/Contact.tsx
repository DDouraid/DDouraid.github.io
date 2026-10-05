'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMeta = [
    { icon: FaEnvelope, href: 'mailto:Douraid.dridi@esprit.tn', color: 'text-blue-600 dark:text-blue-400' },
    { icon: FaPhone, href: 'tel:+21658861240', color: 'text-green-600 dark:text-green-400' },
    { icon: FaMapMarkerAlt, href: 'https://www.google.com/maps?q=Bizerte,Tunisia', color: 'text-red-600 dark:text-red-400' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/0douraid/', color: 'text-blue-600 dark:text-blue-500' },
    { icon: FaGithub, href: 'https://github.com/DDouraid', color: 'text-gray-700 dark:text-gray-400' },
  ]

  return (
    <section
      id="contact"
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
          <span className="gradient-text">{t.contact.heading}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-8">
            {t.contact.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {t.contact.items.map((info, index) => {
              const meta = contactMeta[index]
              const Icon = meta.icon
              return (
                <motion.a
                  key={index}
                  href={meta.href}
                  target={meta.href.startsWith('http') ? '_blank' : undefined}
                  rel={meta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm dark:shadow-none`}>
                    <Icon className={`text-xl ${meta.color}`} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <a
              href="mailto:Douraid.dridi@esprit.tn"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              {t.contact.send}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
