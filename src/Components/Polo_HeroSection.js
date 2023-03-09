import React from 'react'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom';
const Polo_HeroSection = () => {
    const { polo } = useGlobalContext();
    console.log(polo)
    return (
        <>
            <div className=' grid justify-items-center items-center bg-white'>


                <div className=' w-[85%] md:w-[85%] lg:w-[95%] grid-cols-1 grid md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-y-6 mt-2 p-4'>


                    {
                        polo.map((item) => {
                            const { names, title, brand, poster, price, priceoff, rating } = item;
                            return (
                                <>
                                 <Link
                                    
                                   
                                >
                                    <section  className=' border-black  w-[80%] md:w-[80%] border bg-gray-300 bg-opacity-70  '>
                                        <img src={poster} className="h-56 w-[100%]" />
                                        <div className='p-4'>
                                            <div className=' font-bold'>{title}</div>
                                            <div className=' grid grid-cols-3'>
                                                <div>{brand}</div>
                                                <div>{rating}</div>
                                                <div><ion-icon name="star"></ion-icon></div>
                                            </div>
                                            <div className=' grid grid-cols-2'>
                                                <div>Price: {price}</div>
                                                <div>{priceoff}</div>
                                            </div>


                                        </div>



                                    </section>
                                    </Link>
                                </>
                            )
                        })

                    }

                </div>
            </div>

        </>
    )
}

export default Polo_HeroSection