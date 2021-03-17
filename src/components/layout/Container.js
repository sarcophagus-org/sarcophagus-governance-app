import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = "pt-8"
const BASE_WITH_BORDER = "border border-gray-500 pt-8"

const Container = () => {
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