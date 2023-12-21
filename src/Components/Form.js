import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Select from 'react-select';

const locationOption =[
  {label:"chennai", value:"chennai"},
  {label:"erode", value:"erode"},
  {label:"vellore", value:"vellore"},
  
]

const hobbyOption = [
  {label:"Dance" , value:"Dance"},
  {label:"Drawing" , value:"Drawing"},
  {label:"Music" , value:"Music"},
  {label:"Football" , value:"Football"},
  {label:"Cricket" , value:"Cricket"},

]

function Form() {
  // const[first,setfirst]=useState("")
  // console.log(first)

  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location:"",
    hobby:[]

  })

  const [FormList, setFormList] = useState([])

  const handleChange = (Event) => {
    setForm({ ...Form, [Event.target.name]: Event.target.value })
  }
  // console.log(Form)
  const onSubmit = () => {

    if (Form.firstName === "") {
      return toast.error('Firstname Required.', {
        style: {
          border: '1px solid red',
          padding: '16px',
          color: 'white',
          background: 'red',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'red',
        },
      });
    }
    if (Form.firstName.length < 3) {
      return toast.error('Firstname should be at least 3 characters long.', {
        style: {
          border: '1px solid red',
          padding: '16px',
          color: 'white',
          background: 'red',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'red',
        },
      });
    }
    if (Form.lastName === "") {
      return toast.error('Lastname Required.', {
        style: {
          border: '1px solid red',
          padding: '16px',
          color: 'white',
          background: 'red',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'red',
        },
      });
    }
    if (Form.email === "") {
      return toast.error('Email Required.', {
        style: {
          border: '1px solid red',
          padding: '16px',
          color: 'white',
          background: 'red',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'red',
        },
      });
    }
    if (Form.password === "") {
      return toast.error('Password Required.', {
        style: {
          border: '1px solid red',
          padding: '16px',
          color: 'white',
          background: 'red',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'red',
        },
      });
    }
    toast.success('successfully submitted.', {
      style: {
        border: '1px solid lightgreen',
        padding: '16px',
        color: 'black',
        background: 'lightgreen',
      },
      iconTheme: {
        primary: "black",
        secondary: "white"
        //   primary: '#713200',
        //   secondary: '#FFFAEE',
      },
    });
    console.log(Form)
    setFormList([...FormList, Form])
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location:"",
      hobby:[]
    })
  }
  // console.log(FormList)
  const deleteform=(index)=>{
    FormList.splice(index,1)
    setFormList([...FormList])
    toast.success('removed successfully', {
      style: {
        border: '1px solid lightgreen',
        padding: '16px',
        color: 'black',
        background: 'lightgreen',
      },
      iconTheme: {
        primary: "black",
        secondary: "white"
        //   primary: '#713200',
        //   secondary: '#FFFAEE',
      },
    });
  }
  
  
  // useEffect(()=>{
  //   console.log("iam sathish")
  // },[])

  return (
    <>        <div className='container w-50 m-auto mt-5 border border-2 border-info rounded-5'>
      <h1 className='m-3 text-center text-black-50 '>FORM DESIGN</h1>
      <div className='row mt-5'>
        <div className='col-6'>
          <label class="form-label">FirstName :</label>
          <input type="text" class="form-control text-black-50" placeholder='Firstname ' name='firstName' value={Form.firstName} onChange={(Event) => handleChange(Event)} />
        </div>
        <div className='col-6'>
          <label class="form-label">LastName :</label>
          <input type="text" class="form-control text-black-50" placeholder='Lastname' name='lastName' value={Form.lastName} onChange={(Event) => handleChange(Event)} />
        </div>
        <div className='col-6'>
          <label class="form-label">Email :</label>
          <input type="email" class="form-control text-black-50" placeholder='eg : abc@gmail.com ' name='email' value={Form.email} onChange={(Event) => handleChange(Event)} />
        </div>
        <div className='col-6 '>
          <label class="form-label">Password :</label>
          <input type="password" class="form-control text-black-50" placeholder='Password ' name='password' value={Form.password} onChange={(Event) => handleChange(Event)} />
        </div>
        <div className='col-6 '>
          <label class="form-label">Location :</label>
          <Select options={locationOption} value={locationOption.filter((op)=>op.value===Form.location)} onChange={(Event)=>setForm({...Form,location:Event.value})}/>
        </div>
        <div className='col-6 '>
          <label class="form-label">Hobbys :</label>
          <Select isMulti options={hobbyOption} value={hobbyOption.filter((op)=>{
            return Form.hobby.some((pt)=>op.value===pt)
          })} onChange={(Event)=>setForm({...Form,hobby:Event.map((op)=>op.value)})}/>
        </div>
      </div>
      <div className='text-center'>
        <button className="btn btn-sm btn-outline-primary mt-5 mb-5 fw-bold" onClick={() => onSubmit()}>Submit</button>
      </div>
    </div>

      <div className='container mt-5'>
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
              FormList.map((list, index) => {
                return <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.email}</td>
                  <td>{list.password}</td>
                  <td>{list.location}</td>
                  <td>{list.hobby.join()}</td>
                  <td><button className='btn btn-sm btn-outline-danger rounded-pill' onClick={(index)=>deleteform()}>X</button></td>



                </tr>
              })
            }

          </tbody>
        </table>
      </div>


    </>

  )
}

export default Form