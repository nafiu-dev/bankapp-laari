import React, {useContext, useEffect} from 'react'
import BankContext from '../../../context/banks/BankContext'
const History = () => {
    const {getHistory, History} = useContext(BankContext)
    useEffect(() => {
        getHistory()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="history">
            <h4>transfer history</h4>
            <ul>
                {
                    History.map((historys, index) => (
                        <li key={index} >
                            <div className={`history_report ${historys && historys.sent_type ? 'income' : 'expance'}`}>
                                <h5>{historys.amount} USD </h5>
                                <p> <span>{historys && historys.sent_type ? 'from: ' : 'to: '}</span> {historys.name} </p>
                            </div>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default History
