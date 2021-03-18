import React from 'react'
import Container from '../layout/Container'
import StakingForm from './StakingForm'
import UnStakingForm from './UnStakingForm'

const StakingContainer = () => {
  return (
    <Container varient="with-border">
      <StakingForm />
      <UnStakingForm />
    </Container>
  )
}

export default StakingContainer