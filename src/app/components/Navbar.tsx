"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import { FaLinkedin, FaGithub } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { RiMenu4Line } from "react-icons/ri"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const curPath = usePathname()

  const links = [
    { label: "About", href: "/" },
    { label: "Projects", href: "/Projects" },
    { label: "FAQ", href: "/FAQ" }
  ]

  // Add scroll detection for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [curPath])

  return (
      <nav className={classNames({
        "fixed w-full z-50 transition-all duration-300": true,
        "bg-slate-700/95 backdrop-blur-sm shadow-md": scrolled,
        "bg-slate-700/80": !scrolled
      })}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <div className="text-white font-bold text-xl">
              <Link href="/">
              <span className="text-gray-100 hover:text-blue-200 transition-colors">
                Magnus Hem
              </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {links.map(link => (
                  <Link href={link.href} key={link.href}>
                    <div className="relative group">
                  <span className={classNames({
                    "text-white text-lg transition-colors": true,
                    "text-blue-300": link.href === curPath
                  })}>
                    {link.label}
                  </span>
                      {/* Underline animation on hover and active */}
                      <span className={classNames({
                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full": true,
                        "w-full": link.href === curPath
                      })}></span>
                    </div>
                  </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                  href="mailto:jensenmagnushem@gmail.com"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  aria-label="Email"
              >
                <IoIosMail size="1.7rem" />
              </a>
              <a
                  href="https://www.linkedin.com/in/magnus-hem-jensen-7112b0225/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  aria-label="LinkedIn"
              >
                <FaLinkedin size="1.5rem" />
              </a>
              <a
                  href="https://github.com/MHEM11"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  aria-label="GitHub"
              >
                <FaGithub size="1.5rem" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                  aria-label="Toggle menu"
              >
                <RiMenu4Line size="1.8rem" className={isOpen ? "text-blue-300" : "text-white"} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-slate-800 shadow-lg overflow-hidden"
              >
                <div className="px-4 py-5">
                  <div className="flex flex-col space-y-4">
                    {links.map(link => (
                        <Link href={link.href} key={link.href}>
                    <span className={classNames({
                      "text-white text-xl block px-3 py-2 rounded-md transition-colors": true,
                      "bg-slate-700 text-blue-300": link.href === curPath,
                      "hover:bg-slate-700": true
                    })}>
                      {link.label}
                    </span>
                        </Link>
                    ))}

                    {/* Social Icons in Mobile Menu */}
                    <div className="flex space-x-6 mt-4 px-3 py-2">
                      <a
                          href="mailto:jensenmagnushem@gmail.com"
                          className="text-white hover:text-blue-300"
                          aria-label="Email"
                      >
                        <IoIosMail size="1.7rem" />
                      </a>
                      <a
                          href="https://www.linkedin.com/in/magnus-hem-jensen-7112b0225/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-blue-300"
                          aria-label="LinkedIn"
                      >
                        <FaLinkedin size="1.5rem" />
                      </a>
                      <a
                          href="https://github.com/MHEM11"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-blue-300"
                          aria-label="GitHub"
                      >
                        <FaGithub size="1.5rem" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  )
}

export default Navbar