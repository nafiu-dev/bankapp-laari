import React, {useState, useEffect} from 'react'
import CurrencyConvtIn from './CurrencyConvt_In'
// const BASE_URL = 'https://api.exchangeratesapi.io/latest'
const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=93d5b966bad58f1b3c6072b94c8aedf5&format=1'

const CurrencyConvt = () => {
   
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
            // fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${tocurrency}`)
            // fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${tocurrency}`)
            fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${tocurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[tocurrency]))
            .catch(err => console.log(err))
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
    // console.log(currencyoptions)
    return (
        <div className="currencyconverter">
            <h4>convert currency</h4>
            <div className="convertor">
                <CurrencyConvtIn 
                    currencyoptions = {currencyoptions}
                    selectedcurrency = {fromCurrency}
                    onchangecurrensy = {e => setfromCurrency(e.target.value)}
                    amount = {fromamount}
                    onchangeamount = {handlefromamountchange}
                />
                <p>to</p>
                <CurrencyConvtIn 
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

export default CurrencyConvt
