import React from 'react'
import logo from '../../assets/images/logo.png'
import Input from '../forms/Input'
import { Button } from '../forms/Button'
import useStaking from '../hooks/useStaking'

const StakingForm = () => {
  const { balance, buttonText, buttonEnabled, calls, sarco, setSarco } = useStaking("Stake")
  return (
    <form onSubmit={calls} className="w-72">
      <div className="mt-2 flex flex-col">
        <Input currency="sarco" balanceName="SARCO" value={sarco} setValue={setSarco} balance={balance} decimals={18} icon={logo} />
      </div>
      <div className="text-sm text-gray-400">
        Stake SARCO to increase your Voting Rights balance
      </div>
      <div className="mt-4">
        <Button type="submit" disabled={!buttonEnabled}>
          {buttonText}
        </Button>
      </div>
    </form>
  )
}

export default StakingForm