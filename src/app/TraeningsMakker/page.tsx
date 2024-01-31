import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import TM_header from './TMComponents/TMheader'

const TraeningsMakker = () => {
  const links = [
    {label: "Push", href: "./TraeningsMakker/Push" },
    {label: "Pull", href: "./TraeningsMakker/Pull" },
    {label: "Legs", href: "./TraeningsMakker/Legs" },
    {label: "Exercises", href: "./TraeningsMakker/Exercises" },
    {label: "Calender", href: "./TraeningsMakker/Calender" },
    {label: "Profile", href: "./TraeningsMakker/Profile" },
  ]

  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <TM_header Name="TræningsMakker"/>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full items-center pt-12 space-y-7">
          {links.map(link => <Link href={link.href} key={link.href} className={classNames({
            "text-white": true,
            "text-xl":true,
            "border-2": true,
            "rounded-2xl": true,
            "bg-slate-800": true,
            "w-11/12": true,
            "items-center": true,
            "p-auto": true,
            "text-center": true,
            "py-4": true,
          })}>
            {link.label}
          </Link>)}
        </div>  
      </div>
    </main>
  )
}

export default TraeningsMakker