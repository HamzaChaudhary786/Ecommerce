import React, { useState } from 'react'
import logo from '../Assets/newLogo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
import Suggestion_Box from './Suggestion_Box'

const Shop_Navbar = () => {




    let Links = [
        {
            name: "Mens", link: "/mens",
            submenu: true,
            sublinks: [
                {
                    sublinks: [
                        {
                            image: "https://bit.ly/3Fwx0ub"
                        }
                    ]

                },


                {
                    Head: "Mens Shirts",
                    sublinks: [
                        { title: "Casual, Formal Wear", link: "/mencasual" },
                        { title: "Polos", link: "/menpolo" },
                        { title: "Tee shirts", link: "/menteeshirt" },


                    ]
                },
                {
                    Head: "Mens Pants",
                    sublinks: [
                        { title: "Jeans, Trousers & Shorts", link: "/mentrouser" },
                        { title: "Mens-Denims", link: "/mendenims" },



                    ]
                },
            ]

        },
        {
            name: "Shop",
            link: "/",

        },

        {
            name: "Kids", link: "/kids"
        },
        {
            name: "Home", link: "/home"
        },
        {
            name: "Women",
            link: "/women",
            submenu: true,
            sublinks: [
                {
                    sublinks: [
                        {
                            image: "https://bit.ly/3n6XSec"
                        }
                    ]

                },

                {
                    Head: "Womens Shirts",
                    sublinks: [
                        { title: "Tops, Suits & Kurtis", link: "/womensimpleshirt" },
                        { title: "Tee Shirts", link: "/womenteeshirt" },
                        { title: "Hoods & Sweat Shirts", link: "/womenhoodie" },


                    ]
                },
                {
                    Head: "Women Pants",
                    sublinks: [
                        { title: "Coats & Jackets ", link: "/womenjacket" },
                        { title: "Trousers & Shorts", link: "/womentrouser" },



                    ]
                },
            ]

        },


        {
            name: "Contact", link: "/aboutus",
        },
        {
            name: "Sign in", link: "/signin"
        },




    ];
    let [open, setOpen] = useState(false);
    const { query, setQuery } = useGlobalContext();










    return (
        <>
            <div className=' shadow-md w-[100%] top-0  bg-gray-800 left-0 border border-green-500  hover:shadow-md  hover:shadow-indigo-700 hover:border hover:border-indigo-700'>

                <div className='  flex items-center md:pr-4 md:pl-2    h-auto justify-items-center    md:justify-between   w-[100%]  '>


                    <div className=' h-4 w-24 mb-10  cursor-pointer md:h-4 md:w-24 grid sm:justify-items-center sm:justify-center '>
                        <Link to='/' className='grid items-center' >
                            <span className=' text-3xl text-indigo-600 mr-1 mt-2 md:mr-0 '>
                                <img src={logo} alt="Logo" />
                            </span>
                        </Link>
                    </div>

                    <div className=' text-3xl text-white absolute right-8 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>







                    <ul className={`md:flex grid gap-3 grid-cols-2 md:items-center  absolute md:static bg-gray-800 w-[100%] h-auto left-0 md:w-auto md:h-auto p-2 md:pl-0  transition-all duration-700 ease-in ${open ? 'top-[60px] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                        {
                            Links.map((item) => {
                                return (
                                    <>
                                        <li key={item.name} className=" grid items-center text-lg h-auto md:h-[60px] w-fit group       ">
                                            <Link to={item.link} className='text-white   duration-500 md:text-base lg:p-2 grid items-center   lg:text-lg h-[60px] w-[100%]  '>{item.name}</Link>
                                            {
                                                item.submenu && <div>
                                                    <div className=''>
                                                        <div className=' absolute top-[70px]  grid grid-cols-3 cursor-pointer rounded-lg  md:-ml-0  bg-slate-200  '>
                                                            {
                                                                item.sublinks.map((mysublink) => {
                                                                    return (
                                                                        <>

                                                                            <div className='hidden  group-hover:block hover:block
                                                                    justify-items-start h-auto  w-36 md:w-52 rounded -ml-1 '>


                                                                                <h1 className=' font-bold ml-2'>{mysublink.Head}</h1>
                                                                                {
                                                                                    mysublink.sublinks.map((slink) => {
                                                                                        return (
                                                                                            <>
                                                                                                <Link to={slink.link}>
                                                                                                    <img src={slink.image} className='' />
                                                                                                    <li className=' ml-6 lg:mt-1 hover:text-slate-400'>
                                                                                                        {slink.title}

                                                                                                    </li>
                                                                                                </Link>
                                                                                            </>

                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </>
                                                                    )


                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                        </li>

                                    </>
                                )
                            })
                        }

                        {/* <div className='pt-2'>
                            <Link className='text-2xl text-white ml-2'>
                                <ion-icon name="bookmark-outline" ></ion-icon>
                            </Link>
                            <Link className='text-2xl text-white ml-3'>
                                <ion-icon name="cart-outline"></ion-icon>
                            </Link>
                        </div> */}

                    </ul>



                    {/* Search Section */}


                    <div className='justify-items-center grid'>
                        <div className=' ml-6 lg:mr-0 md:ml-2 lg:mt-0  border rounded hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex w-fit h-fit  lg:h-auto lg:w-auto  '>

                            <div className='m-2  grid items-center '><ion-icon name="search-outline"></ion-icon></div>
                            <div className=''>
                                <input type="text" placeholder=" Search Here" className=' w-[96%]  rounded-lg  outline-none border-none h-[28px] lg:rounded-xl'
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <Suggestion_Box />

                    </div>



                </div>


            </div>




        </>
    )
}

export default Shop_Navbar