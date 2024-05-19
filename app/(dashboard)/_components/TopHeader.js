import { AlignJustify } from 'lucide-react'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image';

function TopHeader() {
  return (
    <div className='flex p-5 border-b items-center justify-between '>
        
        <Image src='/logo.svg' height={150} width={150} />
        <UserButton/>


    </div>
  )
}

export default TopHeader