import React from 'react'
import { useWeb3 } from '../web3'
import { useAddresses } from '../web3/chains'
import BlockchainContainer from './BlockchainContainer'
import Heading from './layout/Heading'

const Link = () => {
  const { chainId } = useWeb3()
  const addresses = useAddresses(chainId)
  const network = parseInt(chainId, 10) === 4 ? "rinkeby." : ""
  const etherscanURL = `https://${network}etherscan.io/address/${addresses?.SarcoStakingProxy}`
  return <a href={etherscanURL} target="_blank" rel="noreferrer noopener" className="underline text-gray-400">View on etherscan</a>
}

const Body = () => {
  return (
    <div className="flex flex-col items-center" style={{height: 'calc(100vh - 16rem'}}>
      <Heading varient="heading-one" label="SARCO Token Governence" />
      <Link />
      <BlockchainContainer />
      {/* <StakingContainer /> */}
    </div>
  )
}

export default Body