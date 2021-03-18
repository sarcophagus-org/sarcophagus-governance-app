import { BigNumber } from "@ethersproject/bignumber"
import { useEffect, useState } from "react"
import { useWeb3 } from "../../web3"

const useAllowance = ( sarcophagusStakingContract, sarcophagusTokenContract ) => {
  const { account } = useWeb3()
  const [ allowance, setAllowance ] = useState(BigNumber.from(0))

  useEffect(() => {
      if(!!account && !!sarcophagusStakingContract && !!sarcophagusTokenContract) {
        sarcophagusTokenContract.allowance(account, sarcophagusStakingContract?.address).then(allowance => {
          setAllowance(allowance)
        }).catch(e => console.error(e))
      }
  }, [account, sarcophagusStakingContract, sarcophagusTokenContract])
  return allowance
}

export default useAllowance