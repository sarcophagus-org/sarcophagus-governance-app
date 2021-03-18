import { utils } from "ethers"
import numeral from "numeral"

export const makeNumeral = (bigNumber, decimals) => {
  return numeral(utils.formatUnits(bigNumber, decimals))
}

export const getDecimalNumber = (bigNumber, decimals) => {
  return makeNumeral(bigNumber, decimals).value()
}

export const getNumberalString = (bigNumber, decimals, isFixed) => {
  if(isFixed) return makeNumeral(bigNumber, decimals).value().toFixed().toString()
  return makeNumeral(bigNumber, decimals).input()
}

export const getVotingRightPercentage = (vrBalanceBN, totalSupplyBN) => {
  if(vrBalanceBN?.isZero()) return '0 %'
  const vr = getDecimalNumber(vrBalanceBN, 18)
  const ts = getDecimalNumber(totalSupplyBN, 18)
  const percentage = (ts / vr) * 100
  return `${percentage.toFixed(9)} %`
}