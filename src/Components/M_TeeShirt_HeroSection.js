import React from 'react'
import { useGlobalContext } from './Context';

const M_TeeShirt_HeroSection = () => {
    const { mteeshirt, query } = useGlobalContext();

    return (
        <>
            <div className=' grid w-[100%] justify-items-center items-center bg-white'>

                <div className='slide '>


                </div>



                <div className=' w-[96%] grid-cols-2 grid md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-4 mt-2 '>




                    {
                        mteeshirt.map((item) => {
                            const { names, title, brand, poster, price, priceoff, rating } = item;
                            return (
                                <>
                                    {
                                        names.toLowerCase() == "teeshirt" || names.toLowerCase() == query.toLowerCase() ?

                                            <section className=' border-black w-[100%] border bg-gray-300 bg-opacity-70 justify-items-center  grid '>
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

export default M_TeeShirt_HeroSection