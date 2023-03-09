import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='  justify-items-center items-center bg-zinc-800 grid grid-cols-4 border border-white p-12 text-white'>

                <div className=''>

                    <div >
                        <img />
                        <h1 className=' font-extrabold italic text-5xl'>GLOBEX</h1>
                    </div>

                </div>
                <div>
                    <h1 className=' font-bold text-lg'>Shopping</h1>
                    <br />
                    <Link>Your cart</Link><br />
                    <Link>your orders</Link><br />
                    <Link>Compared items</Link><br />
                    <Link>Wishlist</Link><br />
                    <Link>Shipping Details</Link><br />

                </div>
                <div>
                    <h1 className=' font-bold text-lg'>More links</h1>
                    <br />
                    <Link>Blogs</Link><br />
                    <Link>Gift center</Link><br />
                    <Link>Buying guides</Link><br />
                    <Link>New arrivals</Link><br />
                    <Link>Clearance</Link><br />

                </div>
                <div>
                    <h1 className=' font-bold text-lg'>Social Media</h1>
                    <br />
                    <Link className='ml-2 text-indigo-700'><ion-icon name="logo-facebook"></ion-icon></Link>
                    <Link className='ml-2 text-green-600'><ion-icon name="logo-whatsapp"></ion-icon></Link>
                    <Link className='ml-2 text-orange-700'><ion-icon name="logo-instagram"></ion-icon></Link>
                    <Link className='ml-2 text-cyan-500'><ion-icon name="logo-twitter"></ion-icon></Link>

                </div>
            </div>

        </>
    )
}

export default Footer