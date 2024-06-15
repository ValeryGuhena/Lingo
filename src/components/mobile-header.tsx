import React from 'react'
import { MobileSidebar } from './mobile-sidebar'

const MobileHeader = () => {
  return (
    <div className='lg:hidden px-6 h-12 flex items-center bg-green-500 top-0 w-full z-50'>
      <MobileSidebar/>
    </div>
  )
}

export default MobileHeader