import { useState, useEffect } from 'react'
import { BigNumber } from 'ethers'
import { useWeb3Provider } from '../web3Data/hooks/useWeb3Provider'

const useSarcoBalance = (sarcophagusTokenContract, currentBlock) => {
  const { state: { account} } = useWeb3Provider()
  const [balance, setBalance] = useState(BigNumber.from(0))

  useEffect(() => {
    if (!account || !sarcophagusTokenContract) return

    sarcophagusTokenContract.balanceOf(account).then(balance => {
      setBalance(balance)
    }).catch(console.error)
  }, [account, sarcophagusTokenContract, currentBlock])

  return balance
}

export { useSarcoBalance }