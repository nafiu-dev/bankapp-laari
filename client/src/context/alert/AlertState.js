import React, {useReducer} from 'react'
import uuid from 'uuid/dist/v1'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'

const AlertState = props => {
    const InitState = []
    const [state, dispatch] = useReducer(AlertReducer, InitState)
    //-----------------------------
    
    // SET ALERT
    const setalert = (msg, type, timeout = 2000) =>{
        const _id = uuid()
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type, _id}
        })
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT',
                payload: _id
            })
        }, timeout)
    }

    //-----------------------------
    return (
      <AlertContext.Provider value={{
          alerts: state,
          setalert
      }}>
          {props.children}
      </AlertContext.Provider>
    )
}

export default AlertState