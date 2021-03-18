import numeral from "numeral"
import React  from "react"

const Input = ({ currency, value, setValue, balance, decimals, icon }) => {
  const calculateValue = setValue => {
    return e => {
      let normalizedValue = ""
      const inputValue = e.target.value
      if (inputValue) normalizedValue = Math.min(inputValue, numeral(balance).value())
      setValue(normalizedValue)
    }
  }

  const makeStep = decimals => {
    return `0.${Array(decimals).fill(0).join('')}`.slice(0, -1) + '1'
  }

  const inputDisable = !(numeral(balance).value() > 0)

  return (
    <div className="flex mb-4 text-sm">
      <div className="mr-4 flex flex-col items-center w-10">
        <div className="uppercase mb-2">{currency}</div>
        <div>
          <img src={icon} alt="icon" className="w-8"/>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between mb-2 text-gray-400">
          <div className="mr-2">Amount*</div>
          <div>Balance: {balance}</div>
        </div>
        <input type="number" step={makeStep(decimals)} disabled={inputDisable} required name={currency} id={currency} value={value} onChange={calculateValue(setValue)} min="0" max={balance} className={`w-full border-2 border-gray-500 ${inputDisable ? 'text-gray-400' : 'text-white'} bg-gray-900`} placeholder={balance} />
      </div>
    </div>
  )
}

export default Input