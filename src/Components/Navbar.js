import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <Link to={"/"} className='px-2'>
        <button className='btn btn-sm btn-outline-success'><a class="nav-link active  fw-bold" aria-current="page" href="#">Home</a></button>
        </Link>
        <Link to={"/aboutus"} className='px-2'>
        <button className='btn btn-sm btn-outline-success'><a class="nav-link fw-bold" href="#">About Us</a></button>
        </Link>
        <Link to={"/price"} className='px-2'> 
        <button className='btn btn-sm btn-outline-success'><a class="nav-link  fw-bold" href="#">Pricing</a></button>
        </Link>
        <Link to={"/form"} className='px-2'> 
        <button className='btn btn-sm btn-outline-success'><a class="nav-link  fw-bold" href="#">Form</a></button>
        </Link>
        <Link to={"/form1"} className='px-2'> 
        <button className='btn btn-sm btn-outline-success'><a class="nav-link  fw-bold" href="#">Form1</a></button>
        </Link>
        <Link to={"/student/list"} className='px-2'> 
        <button className='btn btn-sm btn-outline-success'><a class="nav-link  fw-bold" href="#">Studentlist</a></button>
        </Link>
        <Link to={"/student/list2"} className='px-2'> 
        <button className='btn btn-sm btn-outline-success'><a class="nav-link  fw-bold" href="#">Studentlist2</a></button>
        </Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar