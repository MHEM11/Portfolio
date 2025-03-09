"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaHome } from "react-icons/fa";

// Project categories
const categories = ["All", "University", "Personal"];

// Project data
const projects = [
  {
    title: "Intelligent Waste Management",
    description: "A system designed to optimize waste collection using sensors and data analysis, reducing collection costs and environmental impact.",
    image: "/project-waste.jpg", // Add these images to your public folder
    category: "University",
    technologies: ["Java", "Problem-Based Learning"],
    link: null,
    github: null,
    period: "Sep. 2021 - Dec. 2021",
    featured: true
  },
  {
    title: "Visualization of Algorithms and Data Structures",
    description: "Interactive visualization tools for common algorithms and data structures to aid in computer science education and understanding.",
    image: "/project-algo.jpg",
    category: "University",
    technologies: ["JavaScript", "HTML Canvas", "Algorithms"],
    link: null,
    github: null,
    period: "Jan. 2022 - May 2022",
    featured: true
  },
  {
    title: "Sales Management System for Dialægt",
    description: "A comprehensive sales management solution developed for Dialægt (Poster & Frame) to streamline their business operations.",
    image: "/project-sales.jpg",
    category: "University",
    technologies: ["OOP", "Database Design", "UI/UX"],
    link: null,
    github: null,
    period: "Sep. 2022 - Dec. 2022",
    featured: true
  },
  {
    title: "Arduino Concurrent Extension",
    description: "An extension of the Arduino programming language to support concurrent programming concepts, making it easier to develop complex systems.",
    image: "/project-arduino.jpg",
    category: "University",
    technologies: ["Language Design", "Arduino", "Concurrency"],
    link: null,
    github: null,
    period: "Jan. 2023 - May 2023",
    featured: true
  },
  {
    title: "Sentiment Analysis and Preprocessing",
    description: "Research on the effects of different preprocessing techniques on sentiment analysis accuracy using machine learning algorithms.",
    image: "/project-sentiment.jpg",
    category: "University",
    technologies: ["Machine Learning", "Python", "NLP"],
    link: null,
    github: null,
    period: "Sep. 2023 - Dec 2023",
    featured: true
  },
  {
    title: "TræningsMakker",
    description: "A fitness companion app that helps users track their workout progress and remember their previous weights for exercises.",
    image: "/project-tm.jpg",
    category: "Personal",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "/TraeningsMakker",
    github: null,
    period: "Ongoing",
    featured: true
  },
  {
    title: "ToDo List",
    description: "A simple but effective todo application with basic user authentication and persistent storage using Prisma.",
    image: "/project-todo.jpg",
    category: "Personal",
    technologies: ["React", "Prisma", "Next.js"],
    link: "/ToDo-List",
    github: null,
    period: "Completed",
    featured: true
  },
  {
    title: "Java - Advent of Code 2020",
    description: "Solutions to the Advent of Code 2020 challenges implemented in Java, showcasing problem-solving skills and algorithm knowledge.",
    image: "/project-aoc.jpg",
    category: "Personal",
    technologies: ["Java", "Algorithms", "Problem Solving"],
    link: null,
    github: "https://github.com/MHEM11/JavaAOC2020",
    period: "Dec. 2020",
    featured: true
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = projects.filter(
      project => activeCategory === "All" || project.category === activeCategory
  );

  return (
      <main className="bg-gradient-to-br from-[#2A3B4C] to-[#1A2B3C] text-white min-h-screen">
        {/* Fixed Home Button */}
        <div className="fixed top-6 left-6 z-50">
          <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-[#2A3B4C] rounded-lg text-white border border-[#3CAEA3] hover:bg-[#3CAEA3] transition-all duration-300 shadow-lg group"
          >
            <FaHome className="text-[#3CAEA3] group-hover:text-white" />
            <span className="font-medium">Home</span>
          </Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of projects I've worked on throughout my academic and personal journey.
              Each project represents different challenges and learning experiences.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 p-1 bg-[#2A3B4C] rounded-lg">
              {categories.map((category, index) => (
                  <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2 rounded-md transition-all duration-300 ${
                          activeCategory === category
                              ? "bg-[#3CAEA3] text-white"
                              : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {category}
                  </button>
              ))}

            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-[#2A3B4C] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-[#1A2B3C] flex items-center justify-center">
                    <span className="text-4xl">{project.title[0]}</span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-xs bg-[#3CAEA3] px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm h-20 overflow-hidden">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm text-gray-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="text-xs px-2 py-1 bg-[#1A2B3C] rounded-full"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <span className="text-xs text-gray-400">{project.period}</span>
                      <div className="flex space-x-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-300 hover:text-[#3CAEA3] transition-colors"
                            >
                              <FaGithub size={20} />
                            </a>
                        )}
                        {project.link && (
                            <Link
                                href={project.link}
                                className="text-gray-300 hover:text-[#3CAEA3] transition-colors"
                            >
                              <FaExternalLinkAlt size={18} />
                            </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold mb-6">Interested in collaborating?</h2>
            <Link
                href="mailto:jensenmagnushem@gmail.com"
                className="inline-block px-8 py-3 bg-[#3CAEA3] text-white rounded-lg font-medium hover:bg-[#2D9D92] transition duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </main>
  );
};

export default Projects;