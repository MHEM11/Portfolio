"use client"
import React from "react"
import NavAndDD from "./components/Headers"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <NavAndDD />
      <div className="flex flex-col justify-center items-center pt-10 md:pt-0">
        <div className="text-center w-11/12 md:w-3/5">
          <h2 className="text-3xl items-center font-bold">Hi there!</h2>
          <img src="./PB.jpg" alt="ME" className="my-5 h-60 w-60 rounded-full m-auto"></img>
          <h2 className="text-3xl items-center font-bold">I&apos;m Magnus Hem </h2>
          <div className="my-10  items-center justify-center">
            <p className="text-xl my-10">This is my portfolio. Here you
              can read about me on a personal level and get to know me. You can also take a look at some
              of my projects that I have made on my own or with my group, while studying at Aalborg
              university(AAU). If you to know me on a personal level go to the FAQ page and take a look.
              If you have any questions, feel free to contact me.</p>
          </div>
        </div>
        <div className=" flex flex-col items-center w-11/12">
          <h2 className="text-2xl font-bold">
            Education
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-xl">
            Bachelor in Data Science, Aalborg University (2021-2024), <br/>
            </li>
            <li className="text-xl">
            Master in Software, Aalborg University (2024-2026)
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center my-10 w-11/12">
          <h2 className="text-2xl font-bold">
            Skills and Competences
          </h2>
          <ul className="list-disc list-inside">
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
        <div className="flex flex-col items-center my-10 w-11/12">
          <h2 className="text-2xl font-bold">
            Work Experience
          </h2>
          <ul className="list-disc list-inside">
            <li className="">

            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}