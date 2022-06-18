import React from 'react'
import { useAddresses } from '../context/blockchain/useAddresses'
import { useWeb3Provider } from '../context/web3Data/hooks/useWeb3Provider'
import BlockchainContainer from './BlockchainContainer'
import Heading from './layout/Heading'
import StakingContainer from './StakingContainer'

const Link = ({ type, address }) => {
  const { state: {chainId} } = useWeb3Provider()
  const network = parseInt(chainId, 10) === 4 ? "rinkeby." : ""
  const etherscanURL = `https://${network}etherscan.io/address/${address}`
  return <a href={etherscanURL} target="_blank" rel="noreferrer noopener">View {type} Contract on Etherscan</a>
}

const Body = () => {
  const { state: {chainId} } = useWeb3Provider()
  const addresses = useAddresses(chainId)

  return (
    <div className="flex-grow text-center">
      <Heading varient="heading-one" label="Sarcophagus Governance" />
      <div className="flex justify-center">
        <div className="mt-2 underline text-gray-400 text-sm mr-2">
          <Link type="Staking" address={addresses?.SarcoStakingProxy} />
        </div>
        <div className="mt-1">/</div>
        <div className="mt-2 underline text-gray-400 text-sm ml-2">
          <Link type="Voting Rights" address={addresses?.SarcoVotingRightsProxy} />
        </div>
      </div>
      <BlockchainContainer />
      <StakingContainer />
    </div>
  )
}

export default Body