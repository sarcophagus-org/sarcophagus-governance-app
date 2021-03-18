import React from 'react'
import logo from '../../assets/images/logo.png'
import lock from '../../assets/images/lock.svg'
import Input from '../forms/Input'
import { Button } from '../forms/Button'
import useStaking from '../hooks/useStaking'
import { useData } from '../../context/blockchain'

const UnStakingForm = () => {
  const { buttonText, buttonEnabled, calls, sarco, setSarco } = useStaking("Unstake")
  const { vrBalance } = useData()
  return (
    <form onSubmit={calls} style={{width: '18.5rem'}}>
        <div className="mt-2 flex flex-col">
          <Input currency="sarco" value={sarco} setValue={setSarco} balance={vrBalance} decimals={18} icon={logo} />
        </div>
        <div className="mt-4">
          <Button type="submit" disabled={!buttonEnabled} icon={lock}>
            {buttonText}
          </Button>
        </div>
      </form>
  )
}

export default UnStakingForm