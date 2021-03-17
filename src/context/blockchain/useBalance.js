import { useState, useEffect } from 'react'
import { BigNumber } from 'ethers'
import { useWeb3 } from '../../web3'

const useSarcoBalance = (sarcophagusTokenContract, currentBlock) => {
  const { account } = useWeb3()
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