import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = "pt-8"
const BASE_WITH_BORDER = "border-b border-l border-r w-full h-full border-gray-500 p-8 mb-8 flex justify-around flex-wrap"

const Container = ({ varient, children }) => {
  if(varient === 'with-border') {
    return (
      <div className={classnames(BASE_WITH_BORDER)}>
        { children }
      </div>
    )
  } else return (
    <div className={classnames(BASE_DEFAULT)}>
      { children }
    </div>
  )
}

export default Container