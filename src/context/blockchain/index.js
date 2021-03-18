import { createContext, useContext } from 'react'
import { useSarcophagusStakingContract, useSarcophagusTokenContract, useSarcophagusVotingRightsContract } from './useContracts'
import { useSarcoBalance } from './useBalance'
import { useCurrentBlock } from './useBlocks'
import useStakingContract from './useStakingContract'
import useVotingRightsContract from './useVotingRightsContract'
import { getDecimalNumber, getVotingRightPercentage } from '../../utils/bigNumbers'

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
    const balanceBN = useSarcoBalance(sarcophagusTokenContract, currentBlock)

    const { stake, unStake } = useStakingContract(sarcophagusStakingContract)
    const { totalSupplyBN, vrBalanceBN } = useVotingRightsContract( sarcophagusVotingRightsContract, currentBlock )
    
    const totalSupply = getDecimalNumber(totalSupplyBN, 18)
    const balance = getDecimalNumber(balanceBN, 18)
    const vrBalance = getDecimalNumber(vrBalanceBN, 18)
    const votingRights = getVotingRightPercentage(vrBalanceBN, totalSupplyBN)

    const dataContext = {
      sarcophagusTokenContract,
      sarcophagusStakingContract,
      sarcophagusVotingRightsContract,
      balance,
      vrBalance,
      totalSupply,
      votingRights,
      stake, 
      unStake
    }
    return <Provider value={dataContext}>{children}</Provider>
  }
}

const DataProvider = createDataRoot()

const useData = () => {
  return useContext(context)
}

export { DataProvider, useData }