'use client'

import  { ReactNode } from 'react'
import "@/app/globals.css"

type WrapperProps = {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Wrapper