import React from 'react'
import { useGlobalContext } from './Context';
const W_Tee_Shirt_HeroSection = () => {
    const { womenteeshirt, query } = useGlobalContext();
    return (
        <>
            <div className=' grid justify-items-center items-center bg-white'>

                <div className='slides '>
                    

                </div>



                <div className=' w-[85%] md:w-[85%] lg:w-[95%] grid-cols-1 grid md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-y-4 mt-2 p-4'>




                    {
                        womenteeshirt.map((item) => {
                            const { names, title, brand, poster, price, priceoff, rating } = item;
                            return (
                                <>
                                    {
                                        names.toLowerCase() == "teeshirt" || names.toLowerCase() == query.toLowerCase() ?

                                            <section className=' border-black  w-[80%] md:w-[90%] border bg-gray-300 bg-opacity-70 justify-items-center  grid '>
                                                <img src={poster} className="h-auto w-auto" />
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
                                            :
                                            console.log(names)
                                    }
                                </>
                            )
                        })

                    }


                </div>

            </div>
        </>
    )
}

export default W_Tee_Shirt_HeroSection