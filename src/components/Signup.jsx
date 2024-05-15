import React from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { Link } from "react-router-dom";

const Signup = () => {
  return (
      <div className='flex text-grey-400 justify-center items-center h-screen bg-gray-900'>
      <div  className='w-96 p-6 shagow-lg bg-white rounded-md'>
        <h1>Sign Up</h1>
        <hr className='mt-3'/>
        <div className='mt-3'>
          <label for='username' className='block text-base mb-2'>Name</label>
          <input type='text' className=''/>
        </div>
         </div>
    </div>
  )
}

export default Signup