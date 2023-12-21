import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import Select from 'react-select'


function Form1() {
    const navigate=useNavigate()
    const [Form1, setForm1] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        location: "",
        hobby: [],

    })

    const locationOption = [
        { value: "Chennai", label: "Chennai" },
        { value: "Erode", label: "Erode" },
        { value: "vellore", label: "Vellore" },
    ]

    const hobbyOption = [
        { value: "Dance", label: "Dance" },
        { value: "Music", label: "Music" },
        { value: "Cricket", label: "Cricket" },
        { value: "Football", label: "football" },
        { value: "Singing", label: "Singing" },

    ]

    const checkEmail = (email) => {
        let validation = /\S+@\S+\.\S+/
        return validation.test(email)
    }

    const checkPassword = (password) => {
        let validation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        return validation.test(password)
    }



    //    console.log(checkEmail("Sathish@gmail.com"))

    const [studentList, setStudentList] = useState([])

    const handlechange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name,e.target.value)
        setForm1({ ...Form1, [e.target.name]: e.target.value })
    }
    // console.log(Form1)
    const onSubmit = () => {
        if (Form1.firstName === "") {
            return toast.error("Firstname Required")
        }
        if (Form1.firstName.length < 3) {
            return toast.error("altest 3 characters needed")
        }
        if (Form1.lastName === "") {
            return toast.error("Lastname Required")
        }

        if (Form1.email === "") {
            return toast.error('Email Required')
        }

        if (Form1.password === "") {
            return toast.error("Password Required")
        }
        if (Form1.location === "") {
            return toast.error("Location Required")
        }
        if (!checkEmail(Form1.email)) {
            return toast.error("Email Invalid")
        }
        if (!checkPassword(Form1.password)) {
            return toast.error("Minimum eight characters, at least one uppercase letter, one lowercase letter and one number , one special character.")
        }
        toast.success("Submitted Successfully")
        console.log(Form1)
        //api...............................................................................................................
        axios.post('https://6579a6a11acd268f9af9a2e3.mockapi.io/student',Form1).then((res)=>{
            console.log(res)
            toast.success("Created Successfully")
           navigate('/student/list')
        }).catch((err)=>{
            console.log(err)
        })
        setStudentList([...studentList, Form1])

        setForm1({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            location: "",
            hobby: [],
        })
    }

    const deleteList = (index) => {
        studentList.splice(index, 1)
        setStudentList([...studentList])
        toast.success("removed column")
    }

    const [showPwd, setShowpwd] = useState(false)
    // console.log(studentList)

    const fetchAllCountryDetails = ()=>{
        axios.get('https://restcountries.com/v2/all').then((res)=>{
        console.log(res)
        }).catch((err)=>{
        console.log(err)
        })
      }

    //   const fetchAllCountry= async()=>{
    //     const response =await axios.get('https://restcountries.com/v2/all')
    //     console.log(response)
    //   }


      useEffect(()=>{
      fetchAllCountryDetails()
      },[])


    return (
        <>
            <div className='container border border-2 border-black rounded-5 w-50 m-auto mt-5 p-5'>
                <h1 className='fst-italic my-3 text-center text-black-50'>FORM DESIGN</h1>
                <div className='row '>
                    <div className='col-6'>
                        <label class="form-label">FirstName :</label>
                        <input type="text" class="form-control text-black-50" placeholder='Firstname' name='firstName' value={Form1.firstName} onChange={(e) => handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">LastName :</label>
                        <input type="text" class="form-control text-black-50" placeholder='Lastname' name='lastName' value={Form1.lastName} onChange={(e) => handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Email :</label>
                        <input type="email" class="form-control text-black-50" placeholder='Email' name='email' value={Form1.email} onChange={(e) => handlechange(e)} />
                    </div>
                    <div className='col-6'>
            <label class="form-label">Password :</label>
            {/* <input type="password" class="form-control text-black-50" placeholder='Password' name='password' value={Form1.password} onChange={(e)=>handlechange(e)}/> */}
            

                    <div class="input-group mb-3">
                        <input type={showPwd ? "text":"password" }class="form-control" placeholder="password" name='password' value={Form1.password} onChange={(e)=>handlechange(e)}/>
                            <button class="btn border border-black-50" onClick={()=>setShowpwd(!showPwd)}>{showPwd ? <i class="fa fa-eye text-black" aria-hidden="true"></i>: <i class="fa fa-eye-slash text-black" aria-hidden="true"></i>}</button>
                    </div>
                    </div>

                    <div className='col-6'>
                        <label class="form-label">Location :</label>
                        <Select options={locationOption} value={locationOption.filter((op) => op.value === Form1.location)} onChange={(e) => setForm1({ ...Form1, location: e.value })} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Hobby :</label>
                        <Select isMulti options={hobbyOption} value={hobbyOption.filter((op) => {
                            return Form1.hobby.some((pt) => op.value === pt)
                        })} onChange={(e) => setForm1({ ...Form1, hobby: e.map((op) => op.value) })} />
                    </div>

                    <div className='text-center'>
                        <button className='btn  btn-outline-success border-2 m-3 mt-5' onClick={() => onSubmit()}>Submit</button>
                    </div>

                </div>
            </div>



            <div className='container mt-5'>
                <table class="table table-striped">
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
                                    <td><button className='btn btn-sm btn-outline-danger rounded-pill' onClick={() => deleteList()}>X</button></td>


                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form1