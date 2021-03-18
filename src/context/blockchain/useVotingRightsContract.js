import { BigNumber } from "@ethersproject/bignumber"
import { useEffect } from "react"
import { useState } from "react"
import { useWeb3 } from "../../web3"

const useVotingRightsContract = (sarcophagusVotingRightsContract, blockNumber) => {
  const { account, provider } = useWeb3()
  const [ totalSupply, setTotalSupply ] = useState(BigNumber.from(0))
  const [ vrBalance, setBalance ] = useState(BigNumber.from(0))

  useEffect(() => {
    if(provider && blockNumber) {
      // @param uint256 _blockNumber
      sarcophagusVotingRightsContract?.totalSupply().then( totalSupply => {
        setTotalSupply(totalSupply)
      }).catch(e => console.error('Error total supply', e))
    }
  }, [ provider, sarcophagusVotingRightsContract, blockNumber ])

  useEffect(() => {
    if(provider && blockNumber) {
       // @param address _owner
       sarcophagusVotingRightsContract?.balanceOf(account).then( balance => {
        setBalance(balance)
      }).catch(e => console.error('Error balance', e))
    }
  }, [ provider, sarcophagusVotingRightsContract, blockNumber, account ])
  


  return { totalSupply, vrBalance }
}

export default useVotingRightsContract