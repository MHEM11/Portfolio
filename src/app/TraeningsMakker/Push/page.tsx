'use client'
import React, { useState } from 'react'
import TM_header from '../TMComponents/TMheader'
import classNames from 'classnames'
import { usePathname } from 'next/dist/client/components/navigation'
import {BiSolidDownArrow as DownArrow, BiSolidLeftArrow as LeftArrow} from "react-icons/bi"

const Push = () => {
  const [isOpen, setIsOpen] = useState(false);
  let curPath = usePathname();
  
  const links = [
    {label: "Push", href: "./TraeningsMakker" },
    {label: "Pull", href: "./TraeningsMakker" },
    {label: "Legs", href: "./TraeningsMakker" },
    {label: "Exercises", href: "./TraeningsMakker" },
    {label: "Calender", href: "./TraeningsMakker" },
    {label: "Profile", href: "./TraeningsMakker" },
  ]


  return (
    <main className="bg-orange-400 text-white min-h-screen">
      <TM_header Name="Push" />
      <div className="flex flex-col w-full items-center space-y-7">
      </div>  
    </main>
  )
}

export default Push