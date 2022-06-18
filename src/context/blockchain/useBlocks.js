import { useEffect, useState } from "react"
import { useWeb3Provider } from "../web3Data/hooks/useWeb3Provider"

const useCurrentBlock = () => {
    const [currentBlock, setCurrentBlock] = useState(0)
    const { state: { provider } } = useWeb3Provider()
  
    useEffect(() => {
      if (!provider) return
  
      provider.getBlockNumber().then(blockNumber => {
        setCurrentBlock(blockNumber)
      }).catch(console.error)
  
      const getBlockNumber = blockNumber => {
        setCurrentBlock(blockNumber)
      }
  
      provider.on('block', getBlockNumber)
  
      return () => {
        provider.removeListener('block', getBlockNumber)
      }
    }, [provider])
  
    return currentBlock
  }

export {
    useCurrentBlock
}