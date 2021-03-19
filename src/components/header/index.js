import React  from 'react'
import AccountDisplay from './AccountDisplay'
import logo from '../../assets/images/logo.png'
import wallet from '../../assets/images/wallet.svg'

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-2 mb-16">
      <div className="w-24 p-1">
        <img src={logo} alt="logo" />
      </div>

      <div className="flex items-center justify-center">
        <div>
          <img src={wallet} alt="wallet" className="" />
        </div>
        <div className="ml-3 text-sm text-gray-300 ">
          <AccountDisplay />
        </div>
      </div>
    </div>
  )
}

export default Header