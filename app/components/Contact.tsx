'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'Douraid.dridi@esprit.tn',
      href: 'mailto:Douraid.dridi@esprit.tn',
      color: 'text-blue-400',
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: '+216 58 861 240',
      href: 'tel:+21658861240',
      color: 'text-green-400',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localisation',
      value: 'Bizerte, Tunisie',
      href: 'https://www.google.com/maps?q=Bizerte,Tunisia',
      color: 'text-red-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: '/in/0douraid/',
      href: 'https://www.linkedin.com/in/0douraid/',
      color: 'text-blue-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/DDouraid',
      href: 'https://github.com/DDouraid',
      color: 'text-gray-400',
    },
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
          <span className="gradient-text">Contact</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <p className="text-center text-gray-300 text-lg mb-8">
            Intéressé par une collaboration ? N'hésitez pas à me contacter !
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-xl ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
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
              Envoyer un message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

