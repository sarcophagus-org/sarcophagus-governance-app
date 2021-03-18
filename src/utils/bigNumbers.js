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
  return `${getDecimalNumber(vrBalanceBN.div(totalSupplyBN), 18) * 100} %`
}