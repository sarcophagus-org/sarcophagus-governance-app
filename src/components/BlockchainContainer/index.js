import React from 'react'
import { useData } from '../../context/blockchain'
import Heading from '../layout/Heading'
import Section from '../layout/Section'

const ColumnContainer = ({ children }) => <div className="flex flex-col mx-8">{ children }</div>
const Value = ({children}) => <div className="">{ children }</div>

const BlockchainContainer = () => {
  const { balance, vrBalance, totalSupply, votingRights} = useData()
  return (
    <Section addClassnames="mt-8 py-8 flex">
      <ColumnContainer>
        <Heading varient="heading-two" label="Your SARCO balance" />
        <Value>{ balance } </Value>
      </ColumnContainer>
      <ColumnContainer>
        <Heading varient="heading-two" label="Total SARCO supply" />
        <Value>{ totalSupply } </Value>
      </ColumnContainer>
      <ColumnContainer>
        <Heading varient="heading-two" label="Your Voting Rights balance" />
        <Value>{ vrBalance } </Value>
      </ColumnContainer>
      <ColumnContainer>
        <Heading varient="heading-two" label="Your Voting Rights" />
        <Value>{ votingRights } </Value>
      </ColumnContainer>
    </Section>
  )
}

export default BlockchainContainer