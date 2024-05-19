import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
   <header className="bg-white ">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4 sm:px-6 lg:px-8 border-b">
    

    <div className="flex flex-1 items-center justify-between md:justify-between gap-5">
        
    
    
        <Image src='./logo.svg' width={120} height={120} />
    
    
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-xl">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Upload </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About us </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact us </a>
          </li>

          
          
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            href="/upload"
          >
            Get Started
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar