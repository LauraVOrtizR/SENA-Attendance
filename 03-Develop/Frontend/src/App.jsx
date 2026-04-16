import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import { PasswordRestore } from './screens/passwordRestore/passwordRestore';
import { Login } from './screens/login/login';
import { PasswordRecovery } from './screens/passwordRecovery/passwordRecovery';
import { Dashboard } from './screens/superAdmin/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/password-restore' element={<PasswordRestore/>}/> */}
        {/* <Route path='/password-recovery' element={<PasswordRecovery/>}/> */}
        <Route path='/home' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
