import React from "react"
import NavAndDD from "../components/Headers"

const CV = () => {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <NavAndDD />
      <div className="flex flex-col justify-center items-center pt-10 md:pt-0">
        <div className="flex w-11/12 justify-center">
          <p className="text-3xl">
            Get to know me
          </p>
        </div>
        <div className="grid grid-cols-2 gap-36 gap-y-7 justify-center w-11/12 pt-5">
          <div>
          <p className="text-xl pb-2">
              What motivate me to do my best?
            </p>
            <p className="text-lg pl-2">
              I have never been a top level student and for that reason school
              did not really suit me well. Only few subjects got my attention,
              and in those subjects I performed and felt motivated to do my best,
              and get the best grade possible. The same goes for software engineering.
              To me software engineering is a hobby I, by taking my Masters, can
              make computer science my full time job. The possibility to work
              with my hobby has motivated me a lot during school and still drives
              me to this day
            </p>
            <p className="text-xl pb-2 mt-6">
              What do I do outside of computer science/work?
            </p>
            <p className="text-lg pl-2">
              When I am not working on a hobby project or a school project, I
              enjoy relaxing with some computer games or watch some series on
              the couch with my girlfriend. I am a very social guy and enjoy
              getting to know somebody better or maybe even get some new friends.
              In my spare time I also enjoy spending time with my friends. I am
              a huge fan of FC Barcelona and watch nearly every game, either alone
              or with some friends. I also like to go to the gym, not 
              necessarily to be fit, but I enjoy having to pressure myself to
              the limit to reach my personal goals. For me going to the gym
              strengthens the body and mind.
            </p>
            <p className="text-xl pb-2 mt-6">
              How do I continue learning and staying current in my field of work?
            </p>
            <p className="text-lg pl-2">
              To keep up with a constantly moving industry, or at least try to I
              try to use the new features added to already existing languages, and
              often try to solve Advent Of Code (AOC) exercises in new or newly
              popular languages. The use of ChatGPT or AI in general is also
              something I have tried to incorporate into my way of working and
              something that interests me a lot.
            </p>
          </div>
          <div>
          <p className="text-xl pb-2">
              Why Computer science?
            </p>
            <p className="text-lg pl-2">
              I am studying a bachelor in computer science (2021-2024) at Aalborg
              University (AAU). I have always had an interest in computers, and
              how they work. Therefore I decided to make my hobby, my work. Even
              though the basics of computer science was my hobby before I started,
              I have still learned a lot about software engineering and even more
              about what the processes going into software engineering really is.
              Through courses and the group projects at AAU, I have learned to
              challenge myself, which I think is one of my strengths. I believe
              that working together as a team will get you further than you can
              on your own. I have rarely said no to a challenge as I believe that
              if you challenge yourself, you will learn from it, even if you fail.
              There is always a lesson to be thought through success and through
              failures. Lessons you would not want to miss.
            </p>  
            <p className="text-xl pb-2 mt-6">
              How do I manage work-life balance?
            </p>
            <p className="text-lg pl-2">
              A healthy work-life balance is something that makes a great employee.
              For me it is important to give time to friends and family, as when
              I am with those people I relax the most and by that performs the
              best in the working hours. I believe that if your job excites you,
              know how to cope with stress, and when to take a break, you will
              work more efficiently and get a healthy work-life balance.
            </p>
          </div>
        </div>
      </div>
    </main>

  )
}

export default CV