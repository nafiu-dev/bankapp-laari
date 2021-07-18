import React, {useReducer} from 'react'
import AuthReducer from './AuthReducer'
import AuthContext from './AuthContext'
import axios from 'axios'
import SetauthToken from '../../utils/SetauthToken'

const AuthState = props => {
    const InitState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: false,
        error: false
    }
    const [state, dispatch] = useReducer(AuthReducer, InitState)
    // -----------------------------------------------------------
    
    const loaduser = async () => {
        if(localStorage.token){
            SetauthToken(localStorage.token)
        }
        try {
            setloading()
            const res = await axios.get('http://127.0.0.1:8000/api/user/')
            dispatch({
                type: 'USER_LOARED',
                payload: res.data.user
            })
        } catch (err) {
            dispatch({
                type: 'AUTH_ERROR'
            })
        }
    }

    const Login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            setloading()
            const res = await axios.post('http://127.0.0.1:8000/api/login/', formData, config)
            dispatch({
                type: 'LOGIN_USER',
                payload: res.data
            })
            
            loaduser()
        } catch (err) {
            dispatch({
                type: 'LOGIN_FAIL',
                // payload: err.response.data.msg
            })
        }
    }


    //LOGOUT------| REMOVE THE token
    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }
    // CLEAR THE ERRORS |-- clear errors if there is any errors
    const clearError = () => {
        dispatch({
            type: 'CLEAR_ERRORS'
        })
    }
    // loading the request
    const setloading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    // ---------------------------------------------------
    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            loading: state.loading,
            error: state.error,
            Login,
            clearError,
            logout,
            loaduser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
