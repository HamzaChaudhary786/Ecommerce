import React from 'react'
import { useGlobalContext } from './Context'




const HeroSection = () => {


    const { shoping } = useGlobalContext();


    return (
        <>

            <div className=' bg-gray-800 w-[100%] grid justify-items-center items-center'>
                <span className=' font-bold italic text-2xl text-start w-[96%] p-1'>
                    <span className='mr-2 text-red-500'>My</span>
                    <span className=' ml-2 text-indigo-500'>WishList</span>
                </span>
                <div className=' w-[85%] md:w-[85%] lg:w-[95%] grid-cols-1 grid md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-y-6 mt-2 bg-white p-4'>


                    {
                        shoping.map((item) => {
                            const { id ,names, title, brand, poster, price, priceoff, rating } = item;
                            return (
                                <>
                                    <section className=' border-black  w-[80%] md:w-[90%] border bg-gray-300 bg-opacity-70  ' key={id}>
                                        <img src={poster} className="h-64 w-[100%]" />
                                        <div className=' p-4'>
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
                                </>
                            )
                        })

                    }

                </div>
            </div>

        </>
    )
}

export default HeroSection