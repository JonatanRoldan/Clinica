import React from 'react'
import NavCollaps from '../Navbar'
import { Banner } from '../Banner'
import { Servicios } from '../Servicios'
import { Footer } from '../Footer'
 
export function Home () {
    
    
  return (
    <>
      <NavCollaps></NavCollaps>
      <Banner />
      <Servicios />
      <Footer />
      <div className="container mt-5 d-flex justify-content-center align-items-center h-100">

      </div>
    </>
    
  )
}
