import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function StudentDetails() {
    const params = useParams()
    

const [studentDetail,setStudentDetail]= useState({})

    const fetchStudentDetail = ()=>{
        axios.get(`https://6579a6a11acd268f9af9a2e3.mockapi.io/student/${params.id}`).then((res)=>{
            setStudentDetail(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchStudentDetail()
    },[])

    
  return (
    <div className='container w-50 mt-5'>
        <div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item bg-secondary text-white">{studentDetail.firstName}{studentDetail.lastName}</li>
    <li class="list-group-item bg-secondary text-white">{studentDetail.email}</li>
    <li class="list-group-item bg-secondary text-white">{studentDetail.location}</li>
  </ul>
</div>
    </div>
  )
}

export default StudentDetails

