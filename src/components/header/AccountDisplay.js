import React from 'react'
import { truncate } from '../../utils'
import icon from '../../assets/images/icon.svg'
import { useWeb3Provider } from '../../context/web3Data/hooks/useWeb3Provider'

const AccountDisplay = () => {
    const { state: { account }, connect } = useWeb3Provider()
    if (account) {
        return (
        <div className="flex justify-center items-center w-full">
            {truncate(account, 19, '...', 7)}
            <img src={icon} alt="" className="ml-6" />
        </div>
        )
    } else {
        return (
        <button className="underline text-center w-full" onClick={() => connect()}>
            Connect Web3 Account
        </button>
        )
    }
}

export default AccountDisplay