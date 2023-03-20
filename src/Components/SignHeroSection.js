import React from 'react'
import Signup from '../Pages/Signup'
import { Link } from 'react-router-dom'

const SignHeroSection = () => {
    return (
        <>
            <div className=' bg-gray-800'>
                <div className='p-24 grid justify-center justify-items-center'>
                    <div className=' border border-green-500 shadow-xl shadow-green-600 h-[400px] w-[400px] grid items-center justify-center   rounded-lg hover:border hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-800  duration-500 '>
                        <div className='h-[300px] w-[300px] font-semibold text-white '>
                            <div className='grid justify-center'><h1 className=' font-semibold  text-2xl text-green-500'>SIGN IN</h1><div className='border border-green-500  w-12'></div></div>
                            <br></br>
                            <label>Email</label>
                            <div className='mt-2'> <input type='email' className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black ' placeholder="  abc@gmail.com" required /></div>
                            <div className='mt-2'><label className='mt-4'>Password</label></div>
                            <div className='mt-2'> <input type='password' className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black ' placeholder="  ******" required /></div>
                            <div className='text-green-400 mt-2 font-normal'><a href='#' >Forget Password?</a></div>
                            <div className='mt-4 bg-gradient-to-r from-green-500 to-green-300 hover:from-indigo-600 hover:to-indigo-400 duration-500 p-2 rounded-lg text-center hover:text-white'><button>Sign In</button></div>
                            <div className=' text-center mt-4 font-normal'><p>Don't have an account?<span className='text-green-400 text-base ml-2 hover:text-indigo-600 '><Link to="/signup">Sign up</Link></span></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignHeroSection