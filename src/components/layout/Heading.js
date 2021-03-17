import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = "font-normal text-base text-white"
const BASE_HEADING_ONE = "text-xl text-white font-bold"
const BASE_HEADING_TWO = "text-gray-400 font-normal text-base"

const Heading = ({varient, addClassnames, children}) => {
  if(varient === "heading-one") {
    return (
      <div className={classnames(BASE_HEADING_ONE, addClassnames)}>
        { children }
      </div>
    )
  }
  if(varient === "heading-two") {
    return (
      <div className={classnames(BASE_HEADING_TWO, addClassnames)}>
        { children }
      </div>
    )
  } else return (
    <div className={classnames(BASE_DEFAULT, addClassnames)}>
        { children }
    </div>
  )
}

export default Heading