import React from 'react'
import { NavLink} from 'react-router-dom'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SwapHorizRoundedIcon from '@material-ui/icons/SwapHorizRounded';
import HistoryIcon from '@material-ui/icons/History';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

// import AuthContext from '../../context/auth/AuthContext'

const footer = () => {
    // const {user, loaduser} = useContext(AuthContext)

    const token = 0
    return (
        <>
            <footer className="footerdesktop desktop">
                <p> <span>laari</span> &copy; 2020</p>
            </footer>

            {
                token ? (
            
                <footer className="footermobile mobile">
                
                    <NavLink exact to='/' >
                        {/* <p>home</p> */}
                        <HomeRoundedIcon />
                    </NavLink>
            

                    <NavLink to='/transfer'>
                        {/* <p>tran</p> */}
                        <TransferWithinAStationIcon />
                    </NavLink>
                
                    
                    
                    <NavLink to="/history">
                        {/* <p>hity</p> */}
                        <HistoryIcon />
                    </NavLink>

                    <NavLink to="/convert">
                        {/* <p>conv</p> */}
                        <SwapHorizRoundedIcon />
                    </NavLink>
        
                </footer>
                ) : null
            }
        </>
    )
}

export default footer
