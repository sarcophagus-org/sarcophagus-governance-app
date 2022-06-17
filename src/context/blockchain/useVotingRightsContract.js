import { BigNumber } from "@ethersproject/bignumber"
import { useEffect } from "react"
import { useState } from "react"
import { useWeb3Provider } from "../web3Data/hooks/useWeb3Provider"

const useVotingRightsContract = (sarcophagusVotingRightsContract, blockNumber) => {
  const { state: { provider, account } } = useWeb3Provider()
  const [totalSupply, setTotalSupply] = useState(BigNumber.from(0))
  const [vrBalance, setBalance] = useState(BigNumber.from(0))

  useEffect(() => {
    if (provider) {
      sarcophagusVotingRightsContract?.totalSupply().then(totalSupply => {
        setTotalSupply(totalSupply)
      }).catch(e => console.error('Error total supply', e))
    }
  }, [provider, sarcophagusVotingRightsContract, blockNumber])

  useEffect(() => {
    if (provider && blockNumber && account) {
      sarcophagusVotingRightsContract?.balanceOf(account).then(balance => {
        setBalance(balance)
      }).catch(e => console.error('Error balance', e))
    }
  }, [provider, sarcophagusVotingRightsContract, blockNumber, account])



  return { totalSupply, vrBalance }
}

export default useVotingRightsContract