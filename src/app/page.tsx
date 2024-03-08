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
          <h2 className="text-3xl items-center font-bold">I&apos;m Magnus Hem </h2>
          <div className="my-10  items-center justify-center">
            <p className="text-xl my-10">I am a 23 year old Computer Science student at Aalborg University (AAU), currently on the hunt for a job while taking the last semester of my bachelor, and for my up coming semesters on my masters in Computer Science. Welcome to my portfolio! Take a look at som of my projects that I have made on my own or with my group, while studying at Aalborg university(AAU) on the projects page, or if you to know me on a personal level go to the FAQ page and take a look. On this page you can see my work experience, education and skills and competences. I do have more skills and competences that I have acquired during the courses I have taken while studying, but these are some of my main and best ones. If you have any questions, feel free to contact me.</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10 w-11/12 md:w-4/5">
          <h2 className="text-2xl font-bold">
            Work Experience
          </h2>
          <ul className="list-disc list-inside items-center">
            <li className="text-xl items-center">
              Customer and sales service assistant, specialising in wired- and wireless broadband, at Responz (before Jysk Telemarketing) (October 2019 - February 2022)
            </li>
            <li className="text-lg px-10">
              My key responsibilities were customer service and sales at first, after 6 months I was moved to the broadband support team where
              the main responsibility was to provide support for<p className="pl-4"> existing customers who experienced problems with their broadband connection.</p>
            </li>
          </ul>
        </div>
        <div className="flex w-4/5 justify-between pb-10">
          <div className=" flex flex-col items-center w-3/12">
            <h2 className="text-2xl font-bold">
              Education
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-xl">
              Bachelor in Computer Science, Aalborg <p className="pl-4">University (2021-2024)</p>
              </li>
              <li className="text-xl">
              Master in Computer Science, Aalborg <p className="pl-4">University (2024-2026)</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-4/12">
            <h2 className="text-2xl font-bold">
              Skills and Competences
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-xl">
                Experience with the programming languages Java,<p className="pl-4"> C#, JavaScript, C, HTML, Python and CSS</p>
              </li>
              <li className="text-xl">
                Basic knowledge about databases and SQL
              </li>
              <li className="text-xl">
                Experiences with software engineering in cooperation<p className="pl-4"> with a team</p>
              </li>
              <li className="text-xl">
                The ability to work in teams and communicate <p className="pl-4">efficiently with colleagues and customers</p>
              </li>
              <li className="text-xl">
                Analytical way of thinking and problem-solving <p className="pl-4">abilities</p>
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