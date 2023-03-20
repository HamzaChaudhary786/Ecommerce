import React from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';


const SignUpHeroSection = () => {
    return (
        <>
            <div className='p-24 grid justify-center justify-items-center  bg-gray-800'>
                <div className=' border border-green-500 shadow-xl shadow-green-600 h-[700px] w-[400px] grid items-center justify-center   rounded-lg hover:border hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-800  duration-500 '>

                    <div className='h-[700px] w-[300px] font-semibold text-white '>

                        <div className='grid justify-center'><h1 className=' font-semibold  text-2xl text-green-500'>ACCOUNT CREATION</h1><div className='border border-green-500  w-12'></div></div>
                        <br></br>
                        <label>Name:</label>
                        <div className='mt-2'> <input type='text' className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black ' placeholder=" Full Name..." required /></div>
                        <div className='mt-2'><label className='mt-4'>Email:</label></div>
                        <div className='mt-2'> <input type='email' className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black ' placeholder=" abc@gmail.com" required /></div>
                        <div className='mt-2'><label className='mt-4'>Password:</label></div>
                        <div className='mt-2'> <input type='password' className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black ' placeholder=' ********' required /></div>
                        <div className='mt-2'><label className='mt-4'>Country:</label></div>
                        <div className='mt-2' >
                            <select className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black '>
                                <option>Pakistan</option>
                                <option>Turkey</option>
                                <option>Morroco</option>
                                <option>Palestine</option>
                                <option>Oman</option>
                            </select>

                        </div>
                        <div className='mt-2'><label className='mt-4'>NIC/Passport/Driving Licsence</label></div>
                        <div className='mt-2'> <input type='number' className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black ' required /></div>

                        <div className='mt-2'><label className='mt-4'>Number:</label></div>
                        <div className='mt-2'> <input type='number' className='border outline-none border-gray-500 rounded hover:border-green-400 w-[300px] text-black ' required /></div>
                        <div className='font-normal mt-2'>

                            <div className=''>
                                <input type="checkbox" required />
                                <span> I agree with the
                                    <Popup trigger={<span className='cursor-pointer text-green-400 hover:text-green-600  font-medium underline ml-2 '>terms and conditions</span>}>

                                        <div className='bg-gray-700 h-[400px] w-[400px] top-24 rounded-lg'>
                                            <h1 className=' grid items-center justify-center p-2 text-xl font-semibold'>Terms and conditions</h1>
                                            <p className=' p-2'>◉ After creating this account, you are consenting for your information (like name, phone # and Passport Number etc.) to be listed in our database and for the admin to access it.</p>
                                        </div>
                                    </Popup>
                                </span>
                            </div>
                            of the website
                        </div>

                        <Link to="/signin"><div className='mt-4 bg-gradient-to-r from-green-500 to-green-300 hover:from-indigo-600 hover:to-indigo-400 duration-500 p-2 rounded-lg text-center hover:text-white'><button>Create  Account</button></div></Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpHeroSection