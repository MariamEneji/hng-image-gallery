import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterAndLogin from './RegisterAndLogin'
import App from './App'

const PasswordLogin = () => {
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path='/' element={<RegisterAndLogin />} />
            <Route path='/home' element={<App />} />

        </Routes>

    </div>

    </BrowserRouter>
  )
}

export default PasswordLogin