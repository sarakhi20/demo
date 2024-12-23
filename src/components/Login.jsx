import React, { useState } from 'react'
import { motion} from 'framer-motion'
import { Link,useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate()
  
    Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      }).then(response => {
          if(response.data.status) {
              navigate('/')
          }
      }).catch(err => {
          console.log(err)
      })
    };
  return (
    <motion.div  initial={{opacity:0, x:100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden flex justify-center items-center' id='Login'>
        <div className='shadow-lg px-8 py-5 border w-72'>
            <h2 className='text-lg font-bold mb-4'>Login</h2>
            <form  onSubmit={handleSubmit} >
                
                <div className="mb-4">
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'
                    name="email"  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'
                    name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="w-full bg-green-600 text-white py-2 ">Login</button>
            </form>
            <div className="text-center">
                <span>Don't have account please register</span>
                <a href="#forgotPassword">Forgot Password?</a>
                <a href='#Signup' className='text-blue-500'>Signup</a>
            </div>
        </div>
    </motion.div>
  )
}

export default Login