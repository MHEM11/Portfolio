"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiCsharp
} from "react-icons/si";

export default function Home() {
  return (

      <main className="bg-gradient-to-br from-[#2A3B4C] to-[#1A2B3C] min-h-screen text-white">
        {/* Navigation will be imported from your existing components */}

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-[#3CAEA3]">Magnus Hem</span>
                </h1>
                <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
                  Computer Science Graduate & Developer
                </h2>
              </motion.div>

              <motion.p
                  className="text-lg text-gray-300 leading-relaxed my-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}

              >
                I'm a passionate software developer with a Bachelor's in Computer Science from Aalborg University,
                currently pursuing my Master's. I build modern web applications and enjoy turning complex problems into elegant solutions.
              </motion.p>

              <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}

              >
                <Link href="/Projects" className="px-6 py-3 bg-[#3CAEA3] text-white rounded-lg font-medium hover:bg-[#2D9D92] transition duration-300">
                  View My Work
                </Link>
                <Link href="mailto:jensenmagnushem@gmail.com" className="px-6 py-3 border border-[#3CAEA3] text-[#3CAEA3] rounded-lg font-medium hover:bg-[#3CAEA3] hover:text-white transition duration-300">
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <motion.div
                className="md:w-2/5 mt-10 md:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}


            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#3CAEA3] rounded-full opacity-20 blur-xl"></div>
                <img
                    src="./PB.jpg"
                    alt="Magnus Hem Jensen"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#3CAEA3] mx-auto relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-[#1A2B3C]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="text-[#3CAEA3]">&lt;</span> My Skills <span className="text-[#3CAEA3]">/&gt;</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
                { icon: <SiReact className="text-blue-400" />, name: "React" },
                { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
                { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
                { icon: <SiPython className="text-blue-500" />, name: "Python" },
                { icon: <FaJava className="text-red-500" />, name: "Java" },
                { icon: <SiCsharp className="text-purple-500" />, name: "C#" },
                { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
              ].map((skill, index) => (
                  <motion.div
                      key={index}
                      className="flex flex-col items-center p-6 bg-[#2A3B4C] rounded-lg hover:bg-[#3A4B5C] transition duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <div className="text-5xl mb-3">{skill.icon}</div>
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">
              <span className="text-[#3CAEA3]">Featured</span> Projects
            </h2>
            <Link href="/Projects" className="text-[#3CAEA3] hover:underline">
              View All Projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "TræningsMakker",
                description: "A fitness tracking app that helps users track their workout progress and remember their previous weights for exercises.",
                image: "/project1.jpg", // You'll need to add these images
                tech: ["React", "Next.js", "Tailwind CSS"],
                link: "/TraeningsMakker"
              },
              {
                title: "ToDo List",
                description: "A simple but effective todo application with state management and user-specific lists.",
                image: "/project2.jpg",
                tech: ["React", "Prisma", "Next.js"],
                link: "/ToDo-List"
              }
            ].map((project, index) => (
                <motion.div
                    key={index}
                    className="bg-[#2A3B4C] rounded-xl overflow-hidden shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gray-700 flex items-center justify-center">
                    <div className="text-4xl text-[#3CAEA3]">
                      {project.title === "TræningsMakker" ?
                          <span className="flex items-center justify-center h-full">🏋️‍♂️</span> :
                          <span className="flex items-center justify-center h-full">✓</span>}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-[#1A2B3C] text-sm rounded-full">
                      {tech}
                    </span>
                      ))}
                    </div>
                    <Link href={project.link} className="text-[#3CAEA3] font-medium hover:underline">
                      View Project →
                    </Link>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>

        {/* About Me Preview */}
        <section className="py-20 px-6 bg-[#1A2B3C]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 md:pr-10">
                <h2 className="text-3xl font-bold mb-6">
                  About <span className="text-[#3CAEA3]">Me</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a Computer Science graduate from Aalborg University with a passion for building software that solves real problems.
                  My journey in tech began with a fascination for computers, which turned into a hobby, and eventually became my career path.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I believe in challenging myself to grow, embracing teamwork, and continuously learning new technologies.
                  When I'm not coding, I enjoy watching FC Barcelona matches, gaming, and spending time with friends and family.
                </p>
                <Link href="/FAQ" className="text-[#3CAEA3] font-medium hover:underline">
                  Learn more about me →
                </Link>
              </div>

              <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {[
                    { label: "Located in", value: "Denmark" },
                    { label: "Education", value: "MSc Computer Science" },
                    { label: "Study at", value: "Aalborg University" },
                    { label: "Interests", value: "Football, Fitness, Gaming" },
                  ].map((item, index) => (
                      <div key={index} className="bg-[#2A3B4C] p-5 rounded-lg">
                        <h3 className="text-sm text-gray-400">{item.label}</h3>
                        <p className="text-lg font-medium mt-1">{item.value}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Get <span className="text-[#3CAEA3]">In Touch</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently looking for new opportunities where I can apply my skills and continue to grow as a developer.
                Whether you have a question, want to discuss a potential project, or just want to say hello, feel free to reach out!
              </p>
              <div className="flex flex-col space-y-4">
                <a
                    href="mailto:jensenmagnushem@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-[#3CAEA3] transition duration-300"
                >
                  <FaEnvelope className="text-xl" />
                  <span>jensenmagnushem@gmail.com</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/magnus-hem-jensen-7112b0225/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-[#3CAEA3] transition duration-300"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/MHEM11"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-[#3CAEA3] transition duration-300"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#2A3B4C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]"
                      placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#2A3B4C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]"
                      placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#2A3B4C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]"
                      placeholder="Your message"
                  ></textarea>
                </div>
                <button
                    type="button"
                    className="w-full py-3 bg-[#3CAEA3] text-white rounded-lg font-medium hover:bg-[#2D9D92] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-[#1A2B3C] text-center text-gray-400">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="mailto:jensenmagnushem@gmail.com" className="hover:text-[#3CAEA3] transition duration-300">
                <FaEnvelope className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/magnus-hem-jensen-7112b0225/" target="_blank" rel="noreferrer" className="hover:text-[#3CAEA3] transition duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/MHEM11" target="_blank" rel="noreferrer" className="hover:text-[#3CAEA3] transition duration-300">
                <FaGithub className="text-xl" />
              </a>
            </div>
            <p>© {new Date().getFullYear()} Magnus Hem Jensen. All rights reserved.</p>

          </div>
        </footer>
      </main>
  );
}