import React, {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
const Alert = () => {
    const {alerts} = useContext(AlertContext)
    return (
        alerts.length > 0 && alerts.map(alert => {
            return (
                <div  key={alert._id} className="alert">
                    <div className={`alert__main ${alert.type}`}>
                        <p>{alert.msg}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Alert
