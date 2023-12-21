import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap'

function Studentlist() {

    const [studentList,setStudentList] = useState([])
    const [deleteId,setDeleteId]= useState('')
   
    const fetchStudentList=()=>{
      axios.get('https://6579a6a11acd268f9af9a2e3.mockapi.io/student').then((res)=>{
        setStudentList(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }

    useEffect(()=>{
      fetchStudentList()
    },[]) 

    const toggleDelete = (id)=>{
      setDeleteId(id)
    }

    // console.log(studentList)

    const deleteStudent=(id)=>{
      console.log(id)
      axios.delete(`https://6579a6a11acd268f9af9a2e3.mockapi.io/student/${id}`).then((res)=>{
        console.log(res)
        toast.success("Removed Student Successfully")
        fetchStudentList()
      }).catch((err)=>{
        console.log(err)
      })
    }

    const navigate = useNavigate()


  return (
    
    <div className='container mt-5'>
      <h1 className='text-center m-3 text-primary'>Studentlist</h1>
      <div className='text-end m-3'>
        <button className='btn btn-warning fw-semibold' onClick={()=>navigate('/form1')}>Add Student +</button>
      </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Location</th>
              <th scope="col">Hobby</th>
              <th scope="col">Action</th>


            </tr>
          </thead>
          <tbody>
            {
              studentList.map((list, index) => {
                return <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.email}</td>
                  <td>{list.password}</td>
                  <td>{list.location}</td>
                  <td>{list.hobby.join()}</td>
                  <td>
                    <button className='btn btn-outline-primary m-1' onClick={()=>navigate(`/student/details/${list.id}`)}><i class="fa fa-eye" aria-hidden="true"></i></button>
                    <button className='btn btn-outline-warning m-1'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    <button className='btn btn-outline-danger m-1' id={`delete-std-${index}`} onClick={()=>toggleDelete(list.id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                    <Popover target={`delete-std-${index}`} isOpen={list.id===deleteId} placement='top'>
                      <PopoverHeader>Confirmation</PopoverHeader>
                      <PopoverBody>
                        <div className='fw-semibold m-2'>Are you sure want to delete?</div>
                        <div className='d-flex justify-content-between'>
                          <button className='btn btn-success ' onClick={()=>deleteStudent(list.id)}>Yes</button>
                          <button className='btn btn-danger ' onClick={()=>setDeleteId('')}>No</button>
                        </div>
                      </PopoverBody>
                    </Popover>
                  </td>

                </tr>
              })
            }

          </tbody>
        </table>
      </div>
  )
}

export default Studentlist