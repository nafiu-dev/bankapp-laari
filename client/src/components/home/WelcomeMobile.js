import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {Link} from 'react-router-dom'
const Welcome_mobile = () => {
    return (

        <div className=" container home mobile">
            <h4 >Hello, firstname</h4>

            <p> <small>you'r account balance: </small> </p>
            <br />
            <div className="balance">
                <h3>122,202,00 <span>USD</span> </h3>
            </div>
            <br /><br /><br />
            <p> you'r account Number: </p>
            <div className="accnumber">
                <h4>123456789125</h4>
            </div>

            <div className="messagetext">
                <Link to="/message"> <p>Report a problem </p> <span> <ArrowRightIcon /> </span></Link>
            </div>

        </div>
    )
}

export default Welcome_mobile
// eslint-disable-next-line