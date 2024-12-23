import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values)
            if(response.status === 201) {
                navigate('/login')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
  return (
    

    <motion.div initial={{opacity:0, x:-200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden flex justify-center items-center' id='Signup'>
        <div className='shadow-lg px-8 py-5 border w-72'>
            <h2 className='text-lg font-bold mb-4'>Register</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className='block text-gray-700'>Username</label>
                    <input type="text" placeholder='Enter Username' className='w-full px-3 py-2 border'
                    name="username"  onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'
                    name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'
                    name="password"  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="w-full bg-green-600 text-white py-2 ">Submit</button>
            </form>
            <div className="text-center">
                <span>Already have account?</span>
                <a href='#Login' className='text-blue-500'>Login</a>
            </div>
        </div>
    </motion.div>
  )
}

export default Signup