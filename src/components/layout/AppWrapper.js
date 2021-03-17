import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const AppWrapper = ({ children }) => {
  return (
    <Router>
      <div className="container relative">
        { children }
      </div>
    </Router>
  )
}

export default AppWrapper