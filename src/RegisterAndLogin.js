
import React, { useState } from 'react'
import { database } from './firbase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const RegisterAndLogin = () => {

    const [login, setLogin] = useState(true)

    const history = useNavigate();

const handleSubmit =(e, type)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

if(type != 'signup') {
    createUserWithEmailAndPassword(database, email, password).then((data) => {console.log(data, "authData");

    console.log(history('/home'))
}).catch(err => {
    alert(err.code)

    setLogin(false)
    
})


    
}

else
signInWithEmailAndPassword(database, email, password).then((data) => {console.log(data, "authData");

    history('/home');

    console.log(history('/home'))
}).catch((err) => {
    alert(err.code)
    
})
   
}


  return (
    <div className='bg-gray-400 flex flex-col  justify-center items-center w-screen h-screen'>
        <h1 className='p-2 text-3xl text-white'>Wanna See Awsome Pictures?</h1>
        <form className='h-72 px-4 gap-4 flex justify-center items-center flex-col w-72 rounded-md shadow-lg bg-gray-200'  onSubmit={(e) => handleSubmit(e,login)}>
            <h1 className='text-3xl font-bold '>{login ? 'LogIn' : 'SignUp'}

            </h1>
            <input className='w-full p-2 rounded-md' name='email' placeholder='Email' type='email'/>
            <input className='w-full p-2 rounded-md ' name='password' placeholder='Password' type='password'/>
            <button className='border border-gray-400 py-2 px-4 hover:bg-gray-400 hover:text-white '>{login ? 'LogIn' : 'SignUp'}</button>
        </form>
    </div>
  )
}

export default RegisterAndLogin