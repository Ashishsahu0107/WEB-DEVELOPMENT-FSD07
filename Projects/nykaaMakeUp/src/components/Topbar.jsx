import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { IoHelpCircleOutline, IoLocationOutline } from 'react-icons/io5'
import { MdCardGiftcard } from 'react-icons/md'

const Topbar = () => {
  return (
    <div className="bg-[#ff3f05] text-white">
      <div className="mx-auto flex h-10 max-w-[1160px] items-center justify-between px-4 text-sm font-semibold">
        <p className="hidden text-base font-bold sm:block">
          BEAUTY BONANZA Get Your Amazing Deals
        </p>

        <p className="text-sm font-bold sm:hidden">BEAUTY BONANZA</p>

        <div className="flex items-center gap-4">
          <a className="hidden items-center gap-1.5 md:flex hover:text-black" href="#app">
            <BsPhone className="text-lg" />
            <span>Get App</span>
          </a>
          <span className="hidden h-5 w-px bg-white/60 md:block" />
          <a className="hidden items-center gap-1.5 md:flex hover:text-black" href="#stores">
            <IoLocationOutline className="text-lg" />
            <span>Store &amp; Events</span>
          </a>
          <span className="hidden h-5 w-px bg-white/60 lg:block" />
          <a className="hidden items-center gap-1.5 lg:flex hover:text-black" href="#gift-card">
            <MdCardGiftcard className="text-lg" />
            <span>Gift Card</span>
          </a>
          <span className="hidden h-5 w-px bg-white/60 lg:block" />
          <a className="flex items-center gap-1.5 hover:text-black" href="#help">
            <IoHelpCircleOutline className="text-lg" />
            <span>Help</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
