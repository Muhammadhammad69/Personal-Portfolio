import React from 'react'

export const LayoutWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='w-[95%] 2xl:w-[1400px] mx-auto '>
{children}
    </div>
  )
}

