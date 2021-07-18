import React, {useReducer} from 'react'
import BankContext from './BankContext'
import BankReducer from './BankReducer'
import axios from 'axios'
const BankState = props => {
    const InitState = {
        History: [],
        loading: false,
        error: false,
        success: false,
        msgerror: false,
        msgsuccess: false,
    }
    const [state, dispatch] = useReducer(BankReducer, InitState)
    // ---------------------------------

    // TRANSFER
    const Transfer = async (amount, account) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            setloading()
            const res = await axios.put(`http://127.0.0.1:8000/api/transfer/${account}`, {amount}, config)
            dispatch({
                type: 'TRANSFER_SUCCESS',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSFER_FAIL'
            })
        }
    }



    // MESSAGE POST
    const Message = async msg => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            setloading()
            const res = await axios.post(`http://127.0.0.1:8000/api/message/`, msg, config)
            dispatch({
                type: 'MESSAGE_SUCCESS',
                payload: res.data
            })      
        } catch (err) {
            dispatch({
                type: 'MESSAGE_FAIL'
            })
        }
    }

    // GET HISTORYS
    const getHistory = async () => {
        try {
            setloading()
            const res = await axios('http://127.0.0.1:8000/api/history/')
            dispatch({
                type: 'HISTORY_LIST',
                payload: res.data.data
            })
        } catch (err) {
            Clear()
        }
    }

    const Clear = () => {
        dispatch({
            type: 'CLEAR'
        })
    }
    const setloading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }
    //---------------------------------- 
    return (
        <BankContext.Provider value={{
            History: state.History,
            loading: state.loading,
            error: state.error,
            success: state.success,
            msgerror: state.msgerror,
            msgsuccess: state.msgsuccess,
            Transfer,
            Clear,
            Message,
            getHistory
        }}>
            {props.children}
        </BankContext.Provider>
    )
}

export default BankState
