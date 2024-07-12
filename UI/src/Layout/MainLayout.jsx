
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'


const MainLayout = () => {
  return (
    <>
    <HeaderHome/>
    <Outlet/>
    </>
  )
}

export default MainLayout