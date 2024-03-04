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
              of my projects that I have made myself or with my group while studying at Aalborg
              university(AAU). If you want to know more about my experience and competences you go to the
              CV page and take a look.
              If you have any questions, feel free to contact me.</p>
          </div>
        </div>
        <div className="flex my-10 w-11/12">
          <div className="w-1/2 mr-3">
            <ul className="list-disc list-inside">
              <li className="text-2xl font-bold">I am goal-oriented</li>
              <p className="text-xl pl-5 ">
                As a person, I am goal-oriented and efficient. I work hard to become as good as possible at what I do
              </p>
            </ul>
          </div>
          <div className="w-1/2 ml-3">
            <ul className="list-disc list-inside">
              <li className="text-2xl font-bold">I am a team player</li>
            </ul>
            <p className="text-xl ml-5">
              I can promise that I am a team player who understands that as a team, we are stronger and can go the farthest.
            </p>
          </div>
        </div>
        <div className="flex items-center my-10 w-11/12">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">
              Education
            </h2>
            <p className="text-xl">
              Bachelor in Data Science, Aalborg University (2021-2024), <br/>
              Master in Software, Aalborg University (2024-2026)
            </p>
        </div>
        <div className="items-center my-10 w-1/2">
          <h2 className="text-2xl font-bold">
            Skills and Competences
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-xl">
              Experience with the programming languages Java, C#, JavaScript, C,<p className="pl-5"> HTML, Python and CSS</p>
            </li>
            <li className="text-xl">
              Basic knowledge about databases and SQL
            </li>
            <li className="text-xl">
              Experiences with software engineering in cooperation with a team
            </li>
            <li className="text-xl">
              The ability to work in teams and communicate efficiently with colleagues<p className="pl-5">and customers</p> 
            </li>
            <li className="text-xl">
              Analytical way of thinking and problem-solving abilities 
            </li>
          </ul>
        </div>
          </div>
      </div>
    </main>
  )
}