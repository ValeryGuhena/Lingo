import MobileHeader from '@/components/mobile-header'
import { Sidebar } from '@/components/sidebar'
import React, { ReactNode } from 'react'

const LearnLayout = ({children}:{children:ReactNode}) => {
  return (
   <>
   <MobileHeader/>
   <Sidebar className='hidden lg:flex'/>
    <main className='lg:pl-[256px] h-full  lg:pt-0'>
      <div className="max-w-[1056px] mx-auto h-full ">{children}</div>
    </main>
   </>
  )
}

export default LearnLayout