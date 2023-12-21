import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Profile from './Profile'

function AboutUs() {


  return (
    <>
      <div>AboutUs</div>
      <br></br>
      <div>
        <Link to={"profile"}><button className='btn btn-sm btn-outline-success' >Show</button></Link>

      </div>
      <Outlet></Outlet>
    </>

  )
}

export default AboutUs