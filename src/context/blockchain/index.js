import { createContext, useContext } from 'react'
import { useSarcophagusStakingContract, useSarcophagusTokenContract, useSarcophagusVotingRightsContract } from './useContracts'
import { useSarcoBalance } from './useBalance'
import { useCurrentBlock } from './useBlocks'
import useVotingRightsContract from './useVotingRightsContract'
import { getVotingRightPercentage } from '../../utils/bigNumbers'
import useAllowance from './useAllowance'

let context

const createDataRoot = () => {
  context = createContext()
  context.displayName = 'Data Provider'
  const Provider = context.Provider

  
  return ({ children }) => {
    const sarcophagusTokenContract = useSarcophagusTokenContract()
    console.log("🚀 ~ file: index.js ~ line 19 ~ sarcophagusTokenContract", sarcophagusTokenContract)
    const sarcophagusStakingContract = useSarcophagusStakingContract()
    console.log("🚀 ~ file: index.js ~ line 21 ~ sarcophagusStakingContract", sarcophagusStakingContract)
    const sarcophagusVotingRightsContract = useSarcophagusVotingRightsContract()
    
    const currentBlock = useCurrentBlock()
    console.log("🚀 ~ file: index.js ~ line 23 ~ currentBlock", currentBlock)

    const balance = useSarcoBalance(sarcophagusTokenContract, currentBlock)
    console.log("🚀 ~ file: index.js ~ line 26 ~ balance", balance)
    const allowance = useAllowance(sarcophagusStakingContract, sarcophagusTokenContract, currentBlock)

    const { totalSupply, vrBalance } = useVotingRightsContract( sarcophagusVotingRightsContract, currentBlock )
    const votingRights = getVotingRightPercentage(vrBalance, totalSupply)

    const dataContext = {
      sarcophagusTokenContract,
      sarcophagusStakingContract,
      sarcophagusVotingRightsContract,
      balance,
      allowance,
      vrBalance,
      totalSupply,
      votingRights,
    }
    return <Provider value={dataContext}>{children}</Provider>
  }
}

const DataProvider = createDataRoot()

const useData = () => {
  return useContext(context)
}

export { DataProvider, useData }