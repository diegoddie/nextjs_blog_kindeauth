import React from 'react'

const Container = ({ children } : {
    children: React.ReactNode
}) => {
  return (
    <div className='border-l border-r max-w-[1110px] min-h-screen flex flex-col mx-auto bg-white'>
        { children }
    </div>
  )
}

export default Container