import React from 'react'

const AppWrapper = ({ children }) => {
  return (
    <div className="container min-h-screen flex flex-col justify-between">
      {children}
    </div>
  )
}

export default AppWrapper