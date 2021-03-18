import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = "pt-8"
const BASE_WITH_BORDER = "border-b border-l border-r w-full border-gray-500 py-16 px-8 mb-8 flex justify-around flex-wrap gap-12"

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