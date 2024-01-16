import { auth } from '@clerk/nextjs'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ModeToggle } from './mode-toggle';
import { HelpCircle, Settings } from 'lucide-react';
import { UserBox } from './user-box';

export const Navbar = () => {
  const { userId } = auth();
  
  return (
    <div className='h-[10vh] z-30 bg-[#F6F9FC] dark:bg-[#1F1F1F] border-b'>
      <div className="flex items-center justify-between py-3 px-6">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={"/logo.svg"} alt='logo' width={40} height={40} />
            <span className='pl-2 tesxt-[22px] opacity-75'>Drive</span>
          </div>
        </Link>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          <div className="p-2 hover:bg-secondary rounded-full transition" role='button'>
            <HelpCircle className='w-5 h-5' />
          </div>
          <div className="p-2 hover:bg-secondary rounded-full transition" role='button'>
            <Settings className='w-5 h-5' />
          </div>
          {userId ? (
            <UserBox />
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  )
}