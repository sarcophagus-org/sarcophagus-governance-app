
import { useState, useEffect } from 'react'
import { getDefaultProvider } from 'ethers'

const useFallbackConnect = (previousProvider) => {
  const [provider, setProvider] = useState(null)

  useEffect(() => {
    if (previousProvider) {
      setProvider(null)
      return
    }

    if (provider) {
      return
    }

    const defaultProvider = getDefaultProvider(parseInt(process.env.REACT_APP_CHAIN_ID, 10), {
      alchemy: process.env.REACT_APP_ALCHEMY_KEY,
      etherscan: process.env.REACT_APP_ETHERSCAN_KEY,
      infura: process.env.REACT_APP_INFURA_KEY,
    })
    setProvider(defaultProvider)

  }, [provider, previousProvider])

  return provider
}

export { useFallbackConnect }