// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case 'HISTORY_LIST':
            return {
                ...state,
                History: action.payload,
                loading: false,
            }
        case 'MESSAGE_SUCCESS':
            return {
                ...state,
                loading: false,
                msgsuccess: true,
                msgerror: false
            }
        case 'TRANSFER_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                error: false
            }
        case 'MESSAGE_FAIL':
            return {
                ...state,
                loading: true,
                msgsuccess: false,
                msgerror: true
            }
        case 'TRANSFER_FAIL':
            return {
                ...state,
                loading: true,
                success: false,
                error: true
            }
        case 'CLEAR':
            return {
                ...state,
                loading: false,
                error: false,
                success: false,
                msgerror: false,
                msgsuccess: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
} 