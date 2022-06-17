import { useEffect, useState } from 'react'
const useAddresses = chainId => {
  const [addresses, setAddresses] = useState()

  useEffect(() => {
    if (chainId === parseInt(process.env.REACT_APP_CHAIN_ID, 10)) {
      setAddresses({
        sarcophagusToken: process.env.REACT_APP_SARCO_TOKEN_ADDRESS,
        SarcoStakingProxy: process.env.REACT_APP_SARCO_STAKING_PROXY_ADDRESS,
        SarcoVotingRightsProxy: process.env.REACT_APP_SARCO_VOTING_RIGHTS_PROXY_ADDRESS
      })
    }
  }, [chainId])

  return addresses
}

export {
  useAddresses
} 