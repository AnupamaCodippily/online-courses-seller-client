import React from 'react'
import { Route } from 'react-router-dom'
import NotFound404 from '../layouts/NotFound404';
const AuthRoute : React.FC <{ component: any , path: string } > = ({component, path}) => {

    let isAuthenticated = false;
    return (
        <Route path={path} component={isAuthenticated ?  component : NotFound404} />
    )
}

export default AuthRoute
