import React from 'react'
import { signOut } from 'firebase/auth'
import { database } from '../firebase'
import { useNavigate } from 'react-router-dom'

const SignOutButton = () => {
    const history = useNavigate()

const handleClick = () => {
    signOut(database).then(val=> {
        history('/')
    })
}

  return (
    <button className='bg-white hover:bg-gray-900 hover:text-white w-24 p-2' onClick={handleClick}>
        Sign Out
    </button>
  )
}

export default SignOutButton