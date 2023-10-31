import React from "react"
import Headers from "../components/Headers"

const Contacts = () => {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <Headers />
      <div className="flex flex-col justify-center items-center pt-10 sm:pt-0">
        <div className="text-center w-11/12 sm:w-3/5">
          <h2 className="text-2xl py-6">
            Fill out the form below and I will reach out to you as soon as possible.<br />
            You can also send me an E-mail directly by clicking the mail icon in the top right corner.
          </h2>

          <div className="flex">
            <form className="flex flex-wrap justify-between w-full text-xl" action="https://getform.io/f/e24bf9f3-badd-41af-b87c-22d915e6d27c" method="POST">
              <input type="text" name="Name" placeholder="Name" className="flex-initial w-full sm:w-4/12 rounded-lg border-white border h-12 mb-2 px-1"></input>
              <input type="text" name="Email" placeholder="E-mail" className="w-full sm:w-6/12 rounded-lg border-white border h-12 mb-2 sm:mb-5 px-1"></input>
              <textarea name="Message" className="w-full rounded-lg border-white border mb-1 sm:mb-5 px-1" placeholder="How can i help you?" rows={8}></textarea>
              <button className="w-3/5 sm:w-3/12 rounded-lg border-white border h-12 block">Send</button>
            </form>
          </div>
        </div>
      </div>
</main>
  )
}

export default Contacts