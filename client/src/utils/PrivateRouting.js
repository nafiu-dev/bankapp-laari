import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'

const PrivateRouts = ({ component: Component, ...rest }) => {
    const {token, loading} = useContext(AuthContext)
    return (
        <Route {...rest} render={props => !token && loading ? (
            <Redirect to='/login' />
        ) : ( 
            <Component {...props} />
        )} />
      
    )
}

export default PrivateRouts
