import { BigNumber } from "@ethersproject/bignumber"
import { utils } from "ethers"
import { useEffect, useState } from "react"
import { useData } from "../../context/blockchain"
import { useTransaction } from "../../context/blockchain/useTransaction"
import { useWeb3 } from "../../web3"

const useStaking = (varient) => {
  const { account } = useWeb3()
  const { balance, allowance, sarcophagusTokenContract, sarcophagusStakingContract } = useData()
  const [ sarco, setSarco ] = useState(0)
  const [ sarcoBN, setSarcoBN] = useState(BigNumber.from(0))
  const [ buttonText, setButtonText ] = useState(varient)
  const { contractCall, pending } = useTransaction()
  const [ callData, setCallData ] = useState([])
  const [ buttonEnabled, setButtonEnabled ] = useState(false)
  
  useEffect(() => {
    setButtonEnabled(!pending && (sarcoBN.gt(0)))
  }, [pending, sarcoBN])

  useEffect(() => {
    setSarco(0)
  }, [account])

  useEffect(() => {
    setSarcoBN(utils.parseUnits((sarco || 0).toFixed(18), 18))
  }, [ sarco ])

  useEffect(() => {
    if (allowance.lt(sarcoBN)) {
      setButtonText("Approve SARCO")
      if ( sarcophagusTokenContract ) {
        setCallData([
          sarcophagusTokenContract.approve,
          [sarcophagusStakingContract?.address, BigNumber.from(2).pow(BigNumber.from(256)).sub(BigNumber.from(1))],
          "Approving SARCO...", "SARCO approval failed!", "SARCO approval made!"
        ])}
      } else {
        setButtonText(varient === "Stake" ? "Stake my SARCO" : "Unstake my SARCO")
        if ( sarcophagusStakingContract ) {
          if(varient === 'Stake'){
            setCallData([
              sarcophagusStakingContract.stake,
              [sarcoBN, { }],
              "staking coins...", "staking failed!", "staking made!",
              () => {
                setSarco(0)
                setCallData([])
              }
            ])
          } else {
            setCallData([
              sarcophagusStakingContract.unstake,
              [sarcoBN, { }],
              "unstaking coins...", "unstaking failed!", "unstaking made!",
              () => {
                setSarco(0)
                setCallData([])
              }
            ])
          }
        }
      }
    }, [allowance, sarcoBN, sarcophagusStakingContract, sarcophagusTokenContract, varient, account])

  const calls = e => {
    e.preventDefault()
    contractCall(...callData)
  }

  
  return { balance, buttonText, buttonEnabled, calls, sarco, setSarco } 
}

export default useStaking