'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Douraid Dridi
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/DDouraid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/0douraid/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:Douraid.dridi@esprit.tn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Douraid Dridi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

