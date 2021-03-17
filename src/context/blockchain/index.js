import { createContext, useContext } from 'react'
import { useSarcophagusStakingContract, useSarcophagusTokenContract, useSarcophagusVotingRightsContract } from './useContracts'
import { useSarcoBalance } from './useBalance'
import { useCurrentBlock } from './useBlocks'

let context

const createDataRoot = () => {
  context = createContext()
  context.displayName = 'Data Provider'
  const Provider = context.Provider

  
  return ({ children }) => {
    const sarcophagusTokenContract = useSarcophagusTokenContract()
    const sarcophagusStakingContract = useSarcophagusStakingContract()
    const sarcophagusVotingRightsContract = useSarcophagusVotingRightsContract()
    
    const { currentBlock } = useCurrentBlock()
    const balance = useSarcoBalance(sarcophagusTokenContract, currentBlock)

    const dataContext = {
      sarcophagusTokenContract,
      sarcophagusStakingContract,
      sarcophagusVotingRightsContract,
      balance,
    }
    return <Provider value={dataContext}>{children}</Provider>
  }
}

const DataProvider = createDataRoot()

const useData = () => {
  return useContext(context)
}

export { DataProvider, useData }