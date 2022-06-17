import { useEffect, useState } from 'react'
import { Contract } from 'ethers'
import SarcoTokenABI from '../artifacts/SarcoToken.json'
import SarcoStakingABI from '../artifacts/SarcoStaking.json'
import SarcoVotingRightsABI from '../artifacts/SarcoVotingRights.json'
import { useWeb3Provider } from "../web3Data/hooks/useWeb3Provider"
import { useAddresses } from './useAddresses'

const useSarcophagusTokenContract = () => {
  const { state: { chainId, signerOrProvider } } = useWeb3Provider()
  console.log("🚀 ~ file: useContracts.js ~ line 11 ~ chainId", chainId)
  const addresses = useAddresses(chainId)
  console.log("🚀 ~ file: useContracts.js ~ line 12 ~ addresses", addresses)
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
  const { state: { chainId, signerOrProvider } } = useWeb3Provider()
  const addresses = useAddresses(chainId)
  const [sarcophagusVotingRightsContract, setSarcophagusVotingRightsContract] = useState()

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
  const { state: { chainId, signerOrProvider } } = useWeb3Provider()
  const addresses = useAddresses(chainId)
  const [sarcophagusStakingContract, setSarcophagusStakingContract] = useState()

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
