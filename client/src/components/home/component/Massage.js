import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../../context/alert/AlertContext'
import AuthContext from '../../../context/auth/AuthContext'
import BankContext from '../../../context/banks/BankContext'
const Massage = () => {

    const {setalert} = useContext(AlertContext)
    const {user, loaduser} = useContext(AuthContext)
    const {Message, Clear, msgsuccess, msgerror} = useContext(BankContext)
    useEffect(() => {
        loaduser()
        if(msgsuccess){
            setalert('Message Sended', 'success')
            Clear()
        }
        if(msgerror){
            setalert('Message failed', 'danger')
            Clear()    
        }
        // eslint-disable-next-line
    }, [msgsuccess, msgsuccess])
    const [message, Setmessage] = useState({
        name: user && user.username ? user.username : '',
        text: ''
    })
    const {name, text} = message

    const HandleChange = e => {
        Setmessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(name !== '' && text !== ''){
            let newmessage = {
                name: name,
                message: text
            }
            Message(newmessage)
        }else{
            setalert('please check Message infomation', 'danger')
        }
    }

    return (
        <div className="message">
            <h4>Report a problem</h4>
            <div className="message__main">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label >your name</label>
                        <input required name="name" value={name} onChange={HandleChange} type="text" />
                    </div>
                    <div>
                        <label >your message</label>
                        <textarea required onChange={HandleChange} name="text" id="" cols="30" rows="6"></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Massage
