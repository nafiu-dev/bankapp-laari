import React from 'react'

const History_Mobile = props => {

    // RESPONSIVE FUNCTIONS
    window.onresize = () => {
        if(window.innerWidth > 450){
            props.history.push('/')
        }
    }

    return (
        <div className="container mobile history-M">
            <h4>Transfer History</h4>
        
            <ul>
                <li>
                    <div className="history_report income">
                        <h5>500 USD </h5>
                        <p> <span>From:</span> namefrom </p>
                    </div>
                </li>

                <li>
                    <div className="history_report expance">
                        <h5>700 USD </h5>
                        <p> <span>to:</span> namefrom </p>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default History_Mobile
