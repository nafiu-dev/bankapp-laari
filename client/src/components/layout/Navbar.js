import React, {useContext} from 'react'
// import  { Redirect } from 'react-router-dom'
// import {browserHistory} from 'react'
import AuthContext from '../../context/auth/AuthContext'
import Logo from './logo.png'
const Navbar = props=> {
    const {logout,token } = useContext(AuthContext)
    // console.log(window.innerWidth)
    
    if(window.innerWidth > 450){
        // <Redirect to='/'  />
        // props.history.push('/')
        // browserHistory.push("/");
    }
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="laari bank" />
                </a>
            </div>
            {
                token ? (
                    <button onClick={logout}>logout</button>
                ) : null
            }
        </header>
    )
}

export default Navbar
