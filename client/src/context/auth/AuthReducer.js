// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case 'USER_LOARED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case 'LOGIN_USER':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case 'LOGOUT':
        case 'LOGIN_FAIL':
        case 'AUTH_ERROR':
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: true,
                user: null,
                error: true
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: false
            }
        case 'SET_LOADING': // SETINF THE LOADING
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}