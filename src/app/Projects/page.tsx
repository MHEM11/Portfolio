"use client"
import React from "react"
import NavAndDD from "./../components/Headers"
import Link from "next/link"

const Projects = () => {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <NavAndDD />
      <div className="flex justify-center items-center pt-10 md:pt-0">
        <div className="flex flex-col justify-center text-center w-11/12 md:w-3/5">
          <h2 className="text-3xl">
            School Projects
          </h2>
          <div className="flex flex-col justify-center items-center">
          <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
            <li className="text-2xl">
              Intelligent Wastemanagment (1st Semester, Sep. 2021 - Dec. 2021)
            </li>
          </ul>
            <p className="w-10/12 text-xl">
              In this project I learned the basics of working in a team and learned how to work with problem based learning. I also learned the basics of programming.
            </p>
            <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
              <li className="text-2xl">
                Visualization of Algorithms and Data Structures (2st Semester, Jan. 2022 - May 2022)
              </li>
            </ul>
            <p className="w-10/12 text-xl">
              In this project i learned to work with algorithms and compose effective code. I also started learning different programming languages and get a better understanding of programming.
            </p>
            <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
              <li className="text-2xl">
              Sales management system for Dialægt (3st Semester, Sep. 2022 - Dec. 2022)
              </li>
            </ul>
            <p className="w-10/12 mb-10 text-xl">
              In this project I learned how to work with object oriented programming and complex systems. I got experience with developing more advance programs. I also learned to work with professional partners as this project was in collaboration with Dialægt.
            </p>
          </div>
          <h2 className="text-3xl">
            Hobby Projects
          </h2>
          <h2 className="text-xl py-5">
            Through out my time at Aalborg University I have work on small hobby-projects, so that i could learn more about different programming languages and get better at programming. Some of the projects have been released so that I can use them myself, and other have not been released or are not done yet. Check out the projects released and ready to use bellow. <p className="hidden text-xl md:contents">You can also take a look at my GitHub page, by clicking the github logo in the top right corner</p>
          </h2>
          <Link className="border text-xl bg-slate-800 rounded-lg mb-5 items-center py-3" href="./TraeningsMakker">TraeningsMakker</Link>
        </div>
      </div>  
    </main>
  )
}

export default Projects