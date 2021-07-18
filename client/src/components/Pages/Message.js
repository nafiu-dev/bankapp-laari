import React, {useState, useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Message = props => {
    const {setalert} = useContext(AlertContext)


    const [message, Setmessage] = useState({
        name: '',
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
            console.log(text, name)
        }else{
            setalert('please check Message infomation', 'danger')
        }
    }


    // RESPONSIVE FUNCTIONS
    window.onresize = () => {
        if(window.innerWidth > 450){
            props.history.push('/')
        }
    }

    return (
        <div className="container mobile message-M">
            <h4>Report a problem</h4>
            
            <div className="message-main">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>your name</label>
                        <input required type="text" onChange={HandleChange} name="name" value={name} />
                    </div>
                    <div>
                        <label>your message</label>
                        <textarea required onChange={HandleChange} name="text" id="" cols="30" rows="6"></textarea>
                    </div>
                    <div>
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Message
