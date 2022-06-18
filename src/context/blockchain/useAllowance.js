import { BigNumber } from "@ethersproject/bignumber"
import { useEffect, useState } from "react"
import { useWeb3Provider } from "../web3Data/hooks/useWeb3Provider"

const useAllowance = (sarcophagusStakingContract, sarcophagusTokenContract, currentBlock) => {
  const { state: { account} } = useWeb3Provider()
  const [allowance, setAllowance] = useState(BigNumber.from(0))

  useEffect(() => {
    if (!!account && !!sarcophagusStakingContract && !!sarcophagusTokenContract) {
      sarcophagusTokenContract.allowance(account, sarcophagusStakingContract.address).then(allowance => {
        setAllowance(allowance)
      }).catch(e => console.error(e))
    }
  }, [account, sarcophagusStakingContract, sarcophagusTokenContract, currentBlock])
  return allowance
}

export default useAllowance