"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is your professional background?",
      answer: "I'm a Computer Science graduate from Aalborg University, currently pursuing my Master's degree. My academic journey has equipped me with strong foundations in algorithms, data structures, and software engineering principles. During my studies, I've worked on various projects that have allowed me to apply theoretical knowledge to practical challenges. I'm passionate about building elegant software solutions and continuously expanding my technical expertise."
    },
    {
      question: "What technologies are you most experienced with?",
      answer: "My core expertise includes JavaScript/TypeScript ecosystem with React and Next.js for front-end development. I'm proficient with Tailwind CSS for modern, responsive styling. I also have experience with Python, Java, and C# for different application contexts. For database work, I've used both SQL (MySQL, PostgreSQL) and NoSQL solutions. I'm comfortable with Git for version control and have experience with CI/CD pipelines. I'm always eager to learn new technologies and expand my skill set based on project requirements."
    },
    {
      question: "How do you approach problem-solving and learning new technologies?",
      answer: "I believe in a systematic approach to problem-solving that starts with understanding requirements thoroughly, breaking problems down into manageable components, and researching potential solutions before implementation. When learning new technologies, I follow a hands-on approach: I start with official documentation, create small proof-of-concept projects, and then build more complex applications. I also value community resources, open-source contributions, and staying updated with industry trends through tech blogs, webinars, and conferences. Continuous learning is central to my professional philosophy."
    },
    {
      question: "Can you describe your experience with team collaboration?",
      answer: "Throughout my academic and project work, I've embraced collaborative development environments. I understand the importance of clear communication, constructive code reviews, and shared ownership of codebases. I've worked with agile methodologies, participating in sprint planning, daily stand-ups, and retrospectives. I value diverse perspectives and believe that the best solutions emerge from collaborative thinking. I'm comfortable using tools like Jira, Trello, and Slack for project management and team communication."
    },
    {
      question: "What are your career goals and interests?",
      answer: "I aim to grow into a senior developer role where I can contribute to innovative projects while mentoring junior developers. I'm particularly interested in creating user-centered applications that solve real-world problems. In the long term, I aspire to lead technical teams and contribute to architectural decisions. I'm fascinated by emerging technologies like artificial intelligence and blockchain, and I'm always exploring how these technologies can enhance software solutions. Outside of coding, I enjoy football (especially FC Barcelona), fitness, and gaming, which help me maintain a healthy work-life balance."
    },
    {
      question: "How do you handle challenging projects or tight deadlines?",
      answer: "When facing challenging projects, I start by clarifying requirements and creating a detailed plan with milestones. I prioritize tasks based on complexity and dependencies, and I'm not afraid to ask questions when needed. For tight deadlines, I focus on delivering core functionality first, followed by enhancements if time permits. I communicate proactively about progress and potential obstacles. I've found that maintaining transparent communication, setting realistic expectations, and occasionally putting in extra hours when necessary helps me deliver quality work even under pressure."
    },
    {
      question: "What sets you apart from other developers?",
      answer: "What distinguishes me is the combination of strong technical skills with a genuine passion for creating impactful software. I bring attention to detail, clean code practices, and a user-focused mindset to every project. My background in computer science gives me a solid theoretical foundation, while my practical experience enables me to implement efficient solutions. I'm equally comfortable working independently or as part of a team, and I pride myself on being adaptable and solution-oriented. I also bring a positive attitude and enthusiasm that helps maintain team morale during challenging projects."
    },
    {
      question: "Are you available for relocation or remote work?",
      answer: "I'm open to both remote work and relocation opportunities for the right position. I've developed effective remote collaboration skills during my studies and projects, and I'm comfortable with digital communication tools and asynchronous workflows. For relocation, I'm particularly interested in opportunities in major tech hubs where I can immerse myself in innovative environments. I'm willing to discuss specific arrangements based on company needs and project requirements."
    }
  ];

  return (
      <main className="bg-gradient-to-br from-[#2A3B4C] to-[#1A2B3C] min-h-screen text-white">
        {/* FAQ Header Section */}
        <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently <span className="text-[#3CAEA3]">Asked Questions</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here you&apos;ll find answers to common questions about my background, skills, and approach to development.
              These insights will help you understand what I can bring to your team.
            </p>
          </motion.div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
                <motion.div
                    key={index}
                    className="bg-[#2A3B4C] rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <button
                      className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-xl font-semibold">{item.question}</h3>
                    <span className="text-[#3CAEA3] ml-4">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                  </button>
                  <div
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                  >
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto bg-[#1A2B3C] rounded-xl my-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">
              Have More <span className="text-[#3CAEA3]">Questions?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              If you didn&apos;t find the information you&apos;re looking for, feel free to reach out directly.
              I&apos;m always happy to discuss potential opportunities or answer any other questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#3CAEA3] text-white rounded-lg font-medium hover:bg-[#2D9D92] transition duration-300"
              >
                Contact Me
              </Link>
              <Link
                  href="/"
                  className="px-6 py-3 border border-[#3CAEA3] text-[#3CAEA3] rounded-lg font-medium hover:bg-[#3CAEA3] hover:text-white transition duration-300"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>

        {/* Footer (could be imported from your existing components) */}
        <footer className="py-8 bg-[#1A2B3C] text-center text-gray-400 mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <p>© {new Date().getFullYear()} Magnus Hem Jensen. All rights reserved.</p>
          </div>
        </footer>
      </main>
  );
}