import React from 'react'
import SignOutButton from './SignOutButton'

const Jumbotron = ({children}) => {
  return (
    <div className='bg-pink-900 md:bg-gray-900 lg:bg-black flex py-10'>
        <div className='w-full px-10 gap-8 flex items-center justify-between flex-col md:flex-row'>
            <h1 className=' text-3xl w-full md:w-[40%] text-white text-center '>Want Some Cool Images?</h1>
            {children}
            <SignOutButton />
            
        </div>
    </div>
  )
}

export default Jumbotron