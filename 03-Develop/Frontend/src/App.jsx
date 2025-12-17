import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import { Register } from './screens/register/register';
import {Login} from './screens/login/login';
import { PasswordRecovery } from './screens/passwordRecovery/passwordRecovery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/password-recovery' element={<PasswordRecovery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
