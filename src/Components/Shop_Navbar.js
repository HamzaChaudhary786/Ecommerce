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
                        { title: "Jeans, Trousers & Shorts", link: "/mensjeans" },
                        { title: "Trousers & Shorts", link: "/mentrouser" },



                    ]
                },
            ]

        },
        {
            name: "Women",
            link: "/women",
            submenu: true,
            sublinks: [

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
            name: "Kids", link: "/kids"
        },
        {
            name: "Home", link: "/home"
        },
        {
            name: "Shop",
            link: "/",

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
            <div className=' shadow-md w-full top-0  bg-gray-800 left-0 border border-green-500  hover:shadow-md  hover:shadow-indigo-700 hover:border hover:border-indigo-700'>

                <div className=' w-full flex items-center  p-5 py-2 lg:px-10  h-auto   md:p-2    md:justify-between   lg:w-screen lg:justify-between '>


                    <div className=' h-4 w-24 mb-10  cursor-pointer md:h-4 md:w-24 grid sm:justify-items-center sm:justify-center '>
                        <Link to='/' className='grid items-center' >
                            <span className=' text-3xl text-indigo-600 mr-1 mt-2 md:mr-0 '>
                                <img src={logo} alt="Logo" />
                            </span>
                        </Link>
                    </div>

                    <div className=' text-3xl absolute right-8 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>







                    <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-gray-800 h-80 w-full left-0 md:w-auto md:h-auto md:pl-0  transition-all duration-700 ease-in ${open ? 'top-[75px] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                        {
                            Links.map((item) => {
                                return (
                                    <>
                                        <li key={item.name} className="  text-center text-lgssssss md:my-0 my-4 w-fit group pl-7 md:p-2    ">
                                            <Link to={item.link} className='text-white hover:text-green-500  duration-500 md:text-base lg:p-2    lg:text-lg   '>{item.name}</Link>
                                            {
                                                item.submenu && <div>
                                                    <div className=''>
                                                        <div className=' absolute lg:top-[45px]  grid grid-cols-2 cursor-pointer rounded-lg  '>
                                                            {
                                                                item.sublinks.map((mysublink) => {
                                                                    return (
                                                                        <>

                                                                            <div className='hidden  group-hover:block hover:block
                                                                    bg-slate-200  lg:mt-8 h-auto w-52  justify-center rounded -ml-1'>

                                                                                <h1 className=' font-bold ml-2'>{mysublink.Head}</h1>
                                                                                {
                                                                                    mysublink.sublinks.map((slink) => {
                                                                                        return (
                                                                                            <>
                                                                                                <Link to={slink.link}>
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

                        <div className='pt-2'>
                            <Link className='text-2xl text-white ml-2'>
                                <ion-icon name="bookmark-outline" ></ion-icon>
                            </Link>
                            <Link className='text-2xl text-white ml-3'>
                                <ion-icon name="cart-outline"></ion-icon>
                            </Link>
                        </div>

                    </ul>



                    {/* Search Section */}


                    <div className='justify-items-center grid'>
                        <div className=' ml-6 lg:mr-0 md:ml-2 lg:mt-0  border rounded hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex w-fit h-fit  lg:h-auto lg:w-auto  '>

                            <div className='m-2  grid items-center '><ion-icon name="search-outline"></ion-icon></div>
                            <div className=''>
                                <input type="text" placeholder=" Search Here" className=' w-[180px] h-[28px]  rounded-lg  outline-none border-none lg:w-[250px] md:w-[130px] md:h-[28px] lg:rounded-xl'
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