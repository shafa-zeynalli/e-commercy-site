import React from 'react'
import Products from './Products'

const RootLayout = ({children}) => {
  return (
    <>
      <Products/>
      <main>{children}</main> 
    </>
  )
}

export default RootLayout;
