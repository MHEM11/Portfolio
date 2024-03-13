"use client"
import React from "react"
import NavAndDD from "./components/Headers"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <NavAndDD />
      <div className="flex flex-col justify-center items-center pt-10 md:pt-0">
        <div className="text-center w-11/12 md:w-4/5">
          <h2 className="text-3xl items-center font-bold">Hi there!</h2>
          <img src="./PB.jpg" alt="ME" className="my-5 h-60 w-60 rounded-full m-auto"></img>
          <h2 className="text-3xl items-center font-bold">I am Magnus Hem </h2>
          <div className="my-10  items-center justify-center">
            <p className="text-xl my-10">I am a 23 year old Computer Science student at Aalborg University (AAU), currently on the hunt for a job while taking the last semester of my bachelor, and for my up coming semesters on my masters in Computer Science. Welcome to my portfolio! Here you can find some of the projects I have made, some of which were made in a group at Aalborg University (AAU), or get to know me on the FAQ page. On the current page you can see my work experience, education, skills and competences, however, this does not necessarily cover all of the knowledge an competences I have acquired while studying. If you have any questions, feel free to contact me.</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10 w-11/12 md:w-4/5">
          <h2 className="text-2xl font-bold">
            Work Experience
          </h2>
          <ul className="list-disc items-center">
            <li className="text-xl items-center">
            Responz (before Jysk Telemarketing) (October 2019 - February 2022) - Customer and sales service assistant, specialising in wired- and wireless broadband
            <ul className="list-disc mx-4 mr-16">
              <li className="text-lg ">
                My key responsibilities were customer service and sales at first, after 6 months I was moved to the broadband support team where
                the main responsibility was to provide support for existing customers who experienced problems with their broadband connection.
              </li>
            </ul>
            </li>
          </ul>
        </div>
        <div className="flex w-4/5 justify-between pb-10">
          <div className=" flex flex-col items-center w-3/12">
            <h2 className="text-2xl font-bold">
              Education
            </h2>
            <ul className="list-disc space-y-1">
              <li className="text-xl">
              Bachelor in Computer Science, Aalborg University (2021-2024)
              </li>
              <li className="text-xl">
              Master in Computer Science, Aalborg University (2024-2026)
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-4/12">
            <h2 className="text-2xl font-bold">
              Skills and Competences
            </h2>
            <ul className="list-disc space-y-1">
              <li className="text-xl">
                Experience with the programming languages Java, C#, JavaScript, C, HTML, Python and CSS
              </li>
              <li className="text-xl">
                Basic knowledge about databases and SQL
              </li>
              <li className="text-xl">
                Experiences with software engineering in cooperation with a team
              </li>
              <li className="text-xl">
                The ability to work in teams and communicate efficiently with colleagues and customers
              </li>
              <li className="text-xl">
                Analytical way of thinking and problem-solving abilities
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-3/12">
            <h2 className="text-2xl font-bold">
              Get in touch
            </h2>
            <p className="text-xl">
              I am currently looking for a job, so if your in need of my expertise feel free to get in touch and send a <a className="inline text-blue-500" href="mailto:jensenmagnushem@gmail.com">mail</a> and I will get back to you.
            </p>
        </div>
        </div>
      </div>
    </main>
  )
}