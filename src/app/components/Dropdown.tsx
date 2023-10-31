'use client'
import Link from 'next/link'
import React, { useState, useEffect  } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import {BiSolidDownArrow as DownArrow, BiSolidLeftArrow as LeftArrow} from "react-icons/bi"


const Dropdown = () => {
  let curPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {label: 'Home', href: '/' },
    {label: 'Projects', href: '/Projects' },
    {label: 'Contact', href: '/Contact'}
  ]
  return (
    <nav className='flex w-full justify-between fixed bg-slate-700' id='large'>
      <button onClick={() => setIsOpen((prev) => !prev)} className=" w-full justify-between flex items-center  px-1 text-3xl">
        Menu
        {!isOpen ? (<DownArrow size="1.3rem" ></DownArrow>) : (<LeftArrow size="1rem"></LeftArrow>)}
      </button>
      {
        isOpen && (
          <div className='absolute top-8 w-full  rounded-b-2xl'>
            <ul>
              {links.map(link => <Link href={link.href} key={link.href} className={classNames({
                'text-white': true,
                'text-3xl':true,
                'px-1': true,
                'w-full': true,
                'rounded-full': true,
                'block': true,
                'bg-slate-700': link.href !== curPath,
                'bg-slate-600': link.href === curPath,
                'hover:bg-slate-800': true 
              })}>
                {link.label}
              </Link>)}
            </ul>
      </div>
      )}
    </nav>
    )
}
export default Dropdown