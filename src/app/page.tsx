'use client'
import React from "react"
import Headers from "./components/Headers"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <Headers />
      <div className="flex justify-center items-center pt-10 sm:pt-0">
        <div className="text-center w-8/10 sm:w-3/5">
          <h2 className="text-3xl items-center font-bold">Hi there!</h2>
          <img src="./PB.jpg" alt="ME" className="my-5 h-60 w-60 rounded-full m-auto"></img>
          <h2 className="text-3xl items-center font-bold">I am Magnus Hem </h2>
          <div className="my-10">
            <p className="text-xl my-10">This is my portfolio. <br></br> Here you
              can read about me and get to know me. You can also take a look at some
              of my projects that i have made myself or with my group while studying.
              If you have any questions, feel free to contact me.</p>
            <p className="text-xl">
              I am studying a bachelor in computer science (2021-2024) at Aalborg
              university(AAU). I have always had an interest in computers, and
              how they work. Therefore I decided to make my hobby my work. Even
              though the basics of computer science was my hobby before I started,
              I have still learned a lot about software engineering and even more
              about what teamwork really is, when it comes to working together in a
              professional environment. Through courses and the group projects at
              AAU, I have learned to challenge myself, which I think is one of my
              strengths. I believe that working together as a team will get you
              further than you can on your own. I have rarely said no to a challenge
              as i believe that if you challenge yourself, you will learn from it,
              even if you fail. There is always a lesson to be thought through
              success and through failures. Lessons you would not want to miss.
            </p>
          </div>
          <div className="flex my-10">
            <div className="w-1/2 mr-3">
              <ul className="list-disc list-inside">
                <li className="text-2xl font-bold">I am goal-oriented</li>
              </ul>
              <p className="text-xl">
                As a person, I am goal-oriented and efficient. I work hard to become as good as possible at what I do
              </p>
            </div>
            <div className="w-1/2 ml-3">
              <ul className="list-disc list-inside">
                <li className="text-2xl font-bold">I am a team player</li>
              </ul>
              <p className="text-xl">
              I can promise that I am a team player who understands that as a team, we are stronger and can go the farthest.
              </p>
            </div>
          </div>
          <div className="items-center my-10">
            <h2 className="text-2xl font-bold">
              Education
            </h2>
            <p className="text-xl">
              Bachelor in Data Science, Aalborg University (2021-2024), <br/>
              Master in Software, Aalborg University (2024-2026)
            </p>
          </div>
          <div className="items-center my-10">
            <h2 className="text-2xl font-bold">
              Skills and Competence
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-xl">
                Experience with the programming languages Java, C#, JavaScript, C, HTML, Python and CSS
              </li>
              <li className="text-xl">
                Basic knowledge about databases and SQL
              </li>
              <li className="text-xl">
                Experiences with software engineering i cooperation with a team
              </li>
              <li className="text-xl">
                The ability to work in teams and communicate efficiently with colleagues and customers 
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