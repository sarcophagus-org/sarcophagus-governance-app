const useStakingContract = (sarcophagusStakingContract) => {

  const stake = (amount) => {
    // @param uint256 _amount
    sarcophagusStakingContract.stake(amount).then((txReceipt) => {
      console.log(txReceipt)
      return {message: 'staking successful'}
    }).catch({error: 'error staking'})
  }

  const unStake = (amount) => {
    // @param uint256 _amount
    sarcophagusStakingContract.unstake(amount).then((txReceipt) => {
      console.log(txReceipt)
      return {message: 'staking successful'}
    }).catch({error: 'error staking'})
  }

  return { stake, unStake }
}

export default useStakingContract

