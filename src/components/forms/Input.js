import { utils } from "ethers"
import numeral from "numeral"
import React  from "react"

const Input = ({ currency, value, setValue, balance, decimals, icon, balanceName }) => {
  const calculateValue = setValue => {
    return e => {
      let normalizedValue = ""
      const inputValue = e.target.value
      if (inputValue) normalizedValue = Math.min(inputValue, numeral(utils.formatEther(balance)).value())
      setValue(normalizedValue)
    }
  }

  const makeStep = decimals => {
    return `0.${Array(decimals).fill(0).join('')}`.slice(0, -1) + '1'
  }

  const inputDisable = !(numeral(utils.formatEther(balance)).value() > 0)

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
          <div className="flex flex-wrap justify-end w-full">
            <div>{balanceName} Balance:</div>
            <div className="ml-1">{utils.formatEther(balance)}</div>
          </div>
        </div>
        <input type="number" step={makeStep(decimals)} disabled={inputDisable} required name={currency} id={currency} value={value} onChange={calculateValue(setValue)} min="1" max={utils.formatEther(balance)} className={`w-full border-2 border-gray-500 ${inputDisable ? 'text-gray-400' : 'text-white'} bg-gray-900`} placeholder={utils.formatEther(balance)} />
      </div>
    </div>
  )
}

export default Input