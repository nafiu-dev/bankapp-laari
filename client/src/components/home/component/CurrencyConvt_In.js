import React from 'react'

const CurrencyConvt_In = props => {
    const {currencyoptions, selectedcurrency, onchangecurrensy, amount, onchangeamount} = props

    return (
        <div className="convertor-box-one">
            <input value={amount} onChange={onchangeamount}  className="convertorNUM" type="number" />
            <select  value={selectedcurrency} onChange={onchangecurrensy}  className="convertorSELECT" id="">
                {
                    currencyoptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CurrencyConvt_In
