import React, {useState} from 'react'
import Layout from "../../components/Layouts/Layout";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

    const Login = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const navigate = useNavigate()
    
        // Submit button 
    
        const handleSubmit = async(e) => {
            e.preventDefault();
            
            try {
              const res = await axios.post('/api/v1/auth/login',{email, password});
    
              if(res.data.success){
                toast.success(res.data.message)
                navigate('/')
              }
              else{
                toast.error(res.data.message)
                
              }
    
    
            } catch (error) {
              console.log(error)
              toast.error("Something Went Wrong")
            }
       }   
      
    
  return (
    <Layout>

        <div className='register'>
            <h1 className='p-3'>Login Form</h1>
  <form className='form' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" className="form-label">E-mail</label>
    <input value = {email}type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter Your E-Mail' required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>

        </div>
    </Layout>
  )
}

export default Login