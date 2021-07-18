import React, {useState, useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Transfer_Mobile = props => {
    const {setalert} = useContext(AlertContext)

    const [transfer, settransfer] = useState({
        account: '',
        amount: ''
    })
    const {amount, account} = transfer

    const HandleChange = e => {
        settransfer({
            ...transfer,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = e => {
        e.preventDefault()
        if(account !== '' && amount !== '' && account.length === 12){
            console.log(amount, account)
        }else{
            setalert('please check Transfer infomation', 'danger')
        }
    }

    // RESPONSIVE FUNCTIONS
    window.onresize = () => {
        if(window.innerWidth > 450){
            props.history.push('/')
        }
    }

    return (
        <>
            <div className="transfer-M container mobile">
                <h4>Transfer Money</h4>
                <form onSubmit={HandleSubmit}>
                    <div>
                        <label>send to <small>(account number)</small> </label>
                        <input required onChange={HandleChange} name="account" type="number" />
                    </div>
                    <div>
                        <label>amount to send</label>
                        <input required onChange={HandleChange} name="amount" type="number" />
                    </div>
                    <button type="submit" >Make Transfer</button>
                </form> 
            </div>
            <div className="space"></div>
        </>
    )
}

export default Transfer_Mobile
