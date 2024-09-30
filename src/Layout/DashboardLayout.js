import React from 'react'
import Header from '../Components/Navbar/Header'
import SecondaryHeader from '../Components/Navbar/SecondaryHeader'

function DashboardLayout({children}) {
  return (
    <>
    <Header/>
    <SecondaryHeader/>
    <>{children}</>
    </>
  )
}

export default DashboardLayout