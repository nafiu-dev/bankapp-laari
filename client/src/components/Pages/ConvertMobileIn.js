import React from 'react'

const ConvertMobileIn = props => {
    const {currencyoptions, selectedcurrency, onchangecurrensy, amount, onchangeamount} = props
    return (
        <div className="convertor-box-M">
            <input value={amount} onChange={onchangeamount} className="convNUM" type="number" />
            <select value={selectedcurrency} onChange={onchangecurrensy}className="convSELECT" id="">
                {
                    currencyoptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default ConvertMobileIn
