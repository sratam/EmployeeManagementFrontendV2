import React from 'react'
import { useContext } from 'react'
import { LoginContext } from './AppWrapper'
import { Navigate } from 'react-router-dom';


function Protect({children}) {
    const {token}  = useContext(LoginContext);

    if(!token){
        return <Navigate to="/login"/>
    }

  return (
    <>
    {children}
    </>
  )
}

export default Protect
