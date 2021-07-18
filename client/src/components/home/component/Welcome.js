import React, {useContext, useEffect} from 'react'
import AuthContext from '../../../context/auth/AuthContext'
const Welcome = () => {
    const {user, loaduser} = useContext(AuthContext)
    useEffect(() => {
        loaduser()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="infome">
            <h3>Hello, {user && user.first_name ? user.first_name : null}</h3>
            <h4>balance: <span>{user && user.balance ? user.balance : null}</span> <span className="crr">USD</span> </h4>
            <p className="accountnumber">
                <span className="accountnumber_title">account number:</span>                
                <span className="accountnumber_number"> {user && user.account_number ? user.account_number : null}</span>
            </p>
        </div>
    )
}

export default Welcome
