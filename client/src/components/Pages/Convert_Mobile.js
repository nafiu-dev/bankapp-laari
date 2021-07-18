import React, {useEffect, useState} from 'react'
import ConvertMobileIn from './ConvertMobileIn'
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

const Convert_Mobile = props => {

    // RESPONSIVE FUNCTIONS
    window.onresize = () => {
        if(window.innerWidth > 450){
            props.history.push('/')
        }
    }


    
    const [currencyoptions, setcurrencyoptions] = useState([])
    const [fromCurrency, setfromCurrency] = useState()
    const [tocurrency, settocurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)


    let toamount, fromamount
    if (amountInFromCurrency) {
        fromamount = amount
        toamount = amount * exchangeRate
    } else {
        toamount = amount
        fromamount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstcurrency = Object.keys(data.rates)[26]
                setcurrencyoptions([data.base, ...Object.keys(data.rates)])
                setfromCurrency(firstcurrency)
                // setfromCurrency(data.base)
                settocurrency(data.base)
                setExchangeRate(data.rates[firstcurrency])
            })
    }, [])


    // for currency changeing time
    useEffect(() => {
        if(fromCurrency != null && tocurrency != null){ 
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${tocurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[tocurrency]))
        }
    }, [fromCurrency, tocurrency])


    const handlefromamountchange = e => {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }


    const handletoamountcurrency = e => {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }


    return (
        <div className="container mobile convert-M">
            <h4>Convert Currency</h4>
            <div className="monverter-main">
                <ConvertMobileIn 
                    currencyoptions = {currencyoptions}
                    selectedcurrency = {fromCurrency}
                    onchangecurrensy = {e => setfromCurrency(e.target.value)}
                    amount = {fromamount}
                    onchangeamount = {handlefromamountchange}
                />
                <p>to</p>
                <ConvertMobileIn 
                    currencyoptions={currencyoptions}
                    selectedcurrency = {tocurrency}
                    onchangecurrensy = {e => settocurrency(e.target.value)}
                    amount = {toamount}
                    onchangeamount = {handletoamountcurrency}
                />
            </div>
        </div>
    )
}

export default Convert_Mobile
