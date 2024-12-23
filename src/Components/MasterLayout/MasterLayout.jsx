// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebarr from '../Sidebar/Sidebarr'

export default function MasterLayout() {
  return (
    <>

    <div className="container-fluid">
        <div className="d-flex">
            <div >
            <Sidebarr/>
            </div>
            <div className="w-100">
            <Outlet/>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}
