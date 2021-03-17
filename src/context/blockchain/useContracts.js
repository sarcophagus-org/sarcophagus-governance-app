import { useEffect, useState } from 'react'
import { Contract } from 'ethers'
import { useWeb3 } from '../../web3'
import { useAddresses } from '../../web3/chains'
import SarcoTokenABI from '../artifacts/SarcoToken.json'
import SarcoStakingABI from '../artifacts/SarcoStaking.json'
import SarcoVotingRightsABI from '../artifacts/SarcoVotingRights.json'

const useSarcophagusTokenContract = () => {
  const { chainId, signerOrProvider } = useWeb3()
  const addresses = useAddresses(chainId)
  const [sarcophagusTokenContract, setSarcophagusTokenContract] = useState()

  useEffect(() => {
    if (!chainId || !addresses || !signerOrProvider) return
    try {
      const contract = new Contract(addresses.sarcophagusToken, SarcoTokenABI, signerOrProvider)
      setSarcophagusTokenContract(contract)
    } catch (e) {
      console.error('Token Contract: ', e)
    }
  }, [chainId, signerOrProvider, addresses])

  return sarcophagusTokenContract
}
const useSarcophagusVotingRightsContract = () => {
  const { chainId, signerOrProvider } = useWeb3()
  const addresses = useAddresses(chainId)
  const [ sarcophagusVotingRightsContract, setSarcophagusVotingRightsContract ] = useState()

  useEffect(() => {
    if (!chainId || !addresses || !signerOrProvider) return
    try {
      const contract = new Contract(addresses.SarcoVotingRightsProxy, SarcoVotingRightsABI, signerOrProvider)
      setSarcophagusVotingRightsContract(contract)
    } catch (e) {
      console.error('Voting Rights Contract: ', e)
    }
  }, [chainId, signerOrProvider, addresses])

  return sarcophagusVotingRightsContract
}
const useSarcophagusStakingContract = () => {
  const { chainId, signerOrProvider } = useWeb3()
  const addresses = useAddresses(chainId)
  const [ sarcophagusStakingContract, setSarcophagusStakingContract ] = useState()

  useEffect(() => {
    if (!chainId || !addresses || !signerOrProvider) return
    try {
      const contract = new Contract(addresses.SarcoStakingProxy, SarcoStakingABI, signerOrProvider)
      setSarcophagusStakingContract(contract)
    } catch (e) {
      console.error('Staking Contract: ', e)
    }
  }, [chainId, signerOrProvider, addresses])

  return sarcophagusStakingContract
}



export { 
  useSarcophagusTokenContract,
  useSarcophagusVotingRightsContract,
  useSarcophagusStakingContract
 }
