import { utils } from 'ethers'
import React from 'react'
import { useData } from '../../context/blockchain'
import Heading from '../layout/Heading'
import Section from '../layout/Section'

const ColumnContainer = ({ children }) => <div className="flex flex-col items-center whitespace-no-wrap w-48">{ children }</div>
const Value = ({children}) => <div className="">{ children }</div>

const BlockchainContainer = () => {
  const { balance, vrBalance, totalSupply, votingRights} = useData()
  return (
    <Section addClassnames="mt-8 py-8 flex">
      <ColumnContainer>
        <Heading varient="heading-two" label="Mys SARCO balance" />
        <Value>{ utils.formatEther(balance) } </Value>
      </ColumnContainer>
      <ColumnContainer>
        <Heading varient="heading-two" label="Total Voting Rights" />
        <Value>{ utils.formatEther(totalSupply) } </Value>
      </ColumnContainer>
      <ColumnContainer>
        <Heading varient="heading-two" label="My Voting Rights" />
        <Value>{ utils.formatEther(vrBalance) } </Value>
      </ColumnContainer>
      <ColumnContainer>
        <Heading varient="heading-two" label="My Voting Power" />
        <Value>{ votingRights } </Value>
      </ColumnContainer>
    </Section>
  )
}

export default BlockchainContainer