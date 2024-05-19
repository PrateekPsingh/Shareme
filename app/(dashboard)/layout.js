import React from 'react'
import SideNav from './_components/SideNav.js'
import TopHeader from './_components/TopHeader.js'
import { Upload } from 'lucide-react'

function layout({ children}) {
  return (
    <div>
        {/* <div className='h-full hidden md:block w-64 flex-col fixed inset-y-0 z-50 '>
        <SideNav/>
          </div> */}
          <div className=''>
            
            <TopHeader/>
            
          {children} 
          </div>
        
        </div>
  )
}

export default layout

