import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'
const Login = props => {
    const {setalert} = useContext(AlertContext)
    const {Login, token, error, clearError} = useContext(AuthContext)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const {username, password} = user
    // console.log(props)

    useEffect(() => {
        if(token){
            props.history.push('/');
        }
        if(error){
            setalert('invalid credentials', 'danger')
            clearError()
        }
        // eslint-disable-next-line
    }, [error, token])

    const HandleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = e => {
        e.preventDefault()
        if(username === '' || password === ''){
            setalert('please enter all feilds', 'danger')
        }else{
            Login(user)
        }
    }
    return (
        <div className="container">
            <div className="login__main">
                <div className="login">
                    <div className="login__box">
                        <form onSubmit={HandleSubmit}>
                            <input onChange={HandleChange} name='username' required type="text" className="input__feild feild" placeholder="username" />
                            <input onChange={HandleChange} name='password' required type="password" className="input__feild feild" placeholder="password" />
                            <button className="submit__feild feild">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login