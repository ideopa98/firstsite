import React from 'react'
import { NavLink } from 'react-router-dom';

 const Error = () => {
    return (
        <div>
            <h1>Error 404 </h1>
            <h3> Page not found </h3>
            <NavLink to='/'> Go Home </NavLink>
        </div>
    )
}
export default Error;