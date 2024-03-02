"use client"
import React from "react"
import NavAndDD from "./../components/Headers"
import Link from "next/link"

const Projects = () => {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <NavAndDD />
      <div className="flex justify-center items-center pt-10 md:pt-0 pb-10">
        <div className="flex flex-col justify-center text-center w-11/12 md:w-3/5">
          <h2 className="text-3xl">
            School Projects
          </h2>
          <div className="flex flex-col justify-center items-center">
            <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
              <li className="text-2xl">
              Intelligent Wastemangment (1st Semester, Sep. 2021 - Dec. 2021)
              </li>
            </ul>
            <p className="w-10/12 text-xl">
              In this project I learned the basics of working in a team and learned how to work with problem based learning. I also learned the basics of programming.
            </p>

            <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
              <li className="text-2xl">
                Visualization of Algorithms and Data Structures (2nd Semester, Jan. 2022 - May 2022)
              </li>
            </ul>
            <p className="w-10/12 text-xl">
              In this project I learned to work with algorithms and compose effective code. I also started learning different programming languages and get a better understanding of programming.
            </p>
            
            <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
              <li className="text-2xl">
              Sales management system for Dialægt (3rd Semester, Sep. 2022 - Dec. 2022)
              </li>
            </ul>
            <p className="w-10/12  text-xl">
              In this project I learned how to work with object oriented programming and complex systems. I got experience with developing more advance programs. I also learned to work with professional partners as this project was in collaboration with Dialægt.
            </p>
            
            <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
              <li className="text-2xl">
              Arduino Concurrent Extension (4th Semester, Jan. 2023 - May 2023)
              </li>
            </ul>
            <p className="w-10/12 text-xl">
              In this project I learned how to work design, define and implement a programming language. I got to know how a computer works on a deeper level and learned how to work with a Arduino.
            </p>
            
            <ul className="list-disc list-inside items-center mt-5 text-center justify-center">
              <li className="text-2xl">
              Sentiment Analysis and Effects of Preprocessing (5th Semester, Sep. 2023 - Dec 2023)
              </li>
            </ul>
            <p className="w-10/12 mb-10 text-xl">
              In this project I learned how to work with a machine and how it learns. I got to test and experiment with some of the features that effects the machines ability to learn and got to work with different classification algorithms. 
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl">
              Hobby Projects
            </h2>
            <h2 className="text-xl py-5">
              Through out my time at Aalborg University I have work on small hobby-projects, so that I could learn more about different programming languages and get better at programming. Some of the projects have been released so that I can use them myself, and other have not been released or are not done yet. Such projects are available on GitHub Check out the projects released and ready to use bellow. <p className="hidden text-xl md:contents">You can also take a look at my GitHub page, by clicking the github logo in the top right corner</p>
            </h2>
            <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
              <Link href="./TraeningsMakker" className="flex justify-center">
                <div className="border bg-slate-600 md:border-none rounded-lg py-5 md:px-5 w-full hover:shadow-sm hover:scale-105 transition-all hover:shadow-slate-300 shadow-slate-200 text-xl">
                  <h1 className="font-bold">Træningsmakker - TM</h1>
                  <p className="px-3 pt-3 hidden md:contents">TM is helpful for those who have a hard time remembering how much weight the lifted last time for a given exercise. With TM one can keep track of how much weight to use on each exercise</p>  
                </div>
              </Link>
              <p className="px-3 pt-2 text-xl md:hidden">TM is helpful for those who have a hard time remembering how much weight the lifted last time for a given exercise. With TM one can keep track of how much weight to use on each exercise</p>
              <Link href="./ToDo-List" className="flex justify-center">
                <div className="border bg-slate-600 md:border-none rounded-lg py-5 md:px-5 w-full hover:shadow-sm hover:scale-105 transition-all hover:shadow-slate-300 shadow-slate-200 text-xl">
                  <h1 className="font-bold">ToDo-List</h1>
                  <p className="px-3 pt-3 hidden md:contents">ToDo-list is an app with a user name and by typing the username you get access to a "private" todo list. This app was made to get used to using Prisma on a very basic level. There is not much privacy/security within the app, but this was not the aim of the project.</p>  
                </div>
              </Link>
              <p className="px-3 pt-2 text-xl md:hidden">ToDo-list is an app with a username and by typing the username you get access to a "private" todo list. This app was made to get used to using Prisma on a very basic level. There is not much privacy/security within the app, but this was not the aim of the project. The app is formatted to a normal phone as this was the primary device for the app's use case.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects