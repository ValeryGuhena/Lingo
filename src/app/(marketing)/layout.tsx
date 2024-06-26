import React, { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'

const MarketingLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <main className="flex-1 flex-col items-center justify-center">{children}</main>
      <Footer/>
    </div>
  )
}

export default MarketingLayout