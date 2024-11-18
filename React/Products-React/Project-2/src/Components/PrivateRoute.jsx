import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute(props) {
    const IsLoggedIn =true;
  return (
    <div>
        {IsLoggedIn ? <>{props.children}</> : <><Navigate to={"/login"}/></>}
    </div>
  )
}
