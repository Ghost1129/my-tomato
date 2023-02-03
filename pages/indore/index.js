import React from 'react'
import IndoreLayout from './layout'

const indore = ({children}) => {
  const [active, setActive] = React.useState('order')
  return (
    <>
    <IndoreLayout/>
      {children}

    </>
  )
}

export default indore