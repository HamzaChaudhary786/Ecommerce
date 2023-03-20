import React from 'react'
import { useGlobalContext } from './Context'
import Suggestion_Box from './Suggestion_Box';
import { Link } from 'react-router-dom'
const Freelancer_HeroSection = () => {


    let Links = [
        {
            name: "Famous Gigs", link: "/"
        },
        {
            name: "Categories",
            link: "/shop",

        },

        {
            name: "Seler", link: "/aboutus",
        },
        {
            name: "Buyer", link: "/freelancer"
        },



    ];


    const { query, setQuery } = useGlobalContext();
    return (
        <>
            <div className=' w-[100%] grid justify-items-center items-center'>

                <div className='fSlide w-[100%] h-[100%] '>

                    <div className='justify-items-center items-center grid w-[100%] h-[100%]'>


                        <div className=' w-[90%]  '>
                            <div className=' text-5xl font-bold w-[100%] md:w-[70%] text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 via-green-500    '>
                                Find the perfect <span className=' font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' id='slideItem'>freelance services</span> for your business
                            </div>
                            <div className='  mt-6  border rounded hover:border-green-400 hover:border-2 items-center  cursor-pointer bg-white flex  w-[60%]   '>

                                <div className='w-[100%] '>
                                    <input type="text" placeholder="   Search Here ..." className=' w-[80%] h-[28px]  rounded-lg  outline-none border-none  lg:rounded-xl'
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                </div>
                                <div className='m-2  grid items-center  '><ion-icon name="search-outline"></ion-icon></div>

                            </div>
                            {/* <Suggestion_Box /> */}
                            <ul className='flex mt-4  md:pb-0 pb-12 h-80 w-full left-0 md:w-auto md:h-auto md:pl-0  transition-all duration-700 ease-in'>
                                {
                                    Links.map((item) => {
                                        return (
                                            <>
                                                <li key={item.name} className="  text-center hover:text-green-400 text-lg  w-fit group  px-2    ">
                                                    <Link to={item.link} className='text-white   duration-500 md:text-base lg:p-2    lg:text-lg   '>{item.name}</Link>


                                                </li>

                                            </>
                                        )
                                    })
                                }



                            </ul>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Freelancer_HeroSection