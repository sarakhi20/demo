import React, { useState } from 'react'
import { motion } from 'framer-motion'



const Payment = () => {
  const [amount, setamount] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
      alert("please enter amount")
    }
    else{
     var options={
      key:"",
      key_secret:"",
      amount:amount *100,
      currency:"INR",
      name:"Online_counseling",
      description:"testing",
      handler:function(response){
        alert(response.Razorpay_payment_id);
      },
      prefill:{
        name:"sarakhi",
        email:"sarakhiammu96@gmail.com",
        contact:"1234567890",
      },
      notes:{
            address:"Razorpay corporate office"
      },
      theme:{
        color:"#3399cc"
      }
     };
     var pay=new window.Razorpay(options);
     pay.open();
  }
  


   
  } 

   
 

   
  
  return (

    <motion.div initial={{opacity:0, x:100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}} class="flex flex-col items-center  justify-center p-4 bg-white rounded-md shadow-md Amount">
    <h1 class="text-2xl font-bold mb-4">Online Payment <span className='underline underline-offset-4 decoration-1 under font-light'>With Secure</span></h1>
    <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>House plan consulting fees $10</p>
    <input type="number"placeholder="Enter Amount"class="w-50 p-2 pl-10 text-sm text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" value={amount}onChange={(e)=>setamount(e.target.value)} />
    <button onClick={handleSubmit} class="w-50 px-4 py-2 mt-4 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"> 
    Submit
    
    </button>
    </motion.div>
    
    
  )
}

export default Payment