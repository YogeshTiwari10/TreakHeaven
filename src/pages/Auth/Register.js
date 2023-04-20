import React, {useState} from 'react'
import Layout from "../../components/Layouts/Layout";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()

    // Submit button 

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
          const res = await axios.post('/api/v1/auth/register',{name, email, password, phone, address});

          if(res.data.success){
            toast.success(res.data.message)
            navigate('/login')
          }
          else{
            toast.success(res.data.message)
            
          }


        } catch (error) {
          console.log(error)
          toast.error("Something Went Wrong")
        }
    }



  return (
    <Layout>

        <div className='register'>
            <h1 className='p-3'>Registration Form</h1>
  <form className='form' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input value = {name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputName" placeholder='Enter Your Name' required /> 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" className="form-label">E-mail</label>
    <input value = {email}type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter Your E-Mail' required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
    <input value = {phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="exampleInputPhone" placeholder='Enter Your Number' required />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="exampleInputAddress" placeholder='Enter Your Address' required/>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>

        </div>
    </Layout>
  )
}

export default Register