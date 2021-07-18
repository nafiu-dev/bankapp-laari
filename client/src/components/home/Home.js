import React from 'react'
import CurrencyConvt from './component/CurrencyConvt'
import Massage from './component/Massage'
import Transfer from './component/Transfer'
import Welcome from './component/Welcome'
import History from './component/History'
import WelcomeMobile from './WelcomeMobile'

const Home = () => {
    return (
        <>
            <div className="container desktop first-box">
                {/* welcome */}
                <Welcome />
                {/* currency converter */}
                <CurrencyConvt />
            </div>

            <div className="container desktop secound-box">
                {/* transfermoney */}
                <Transfer />
                {/* message */}
                <Massage />
            </div>

            <div className="container desktop third-box">
                <History />
            </div>


            {/* place the mmobile home here */}
            <WelcomeMobile />
            
        </>
    )
}

export default Home
