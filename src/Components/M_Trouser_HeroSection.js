import React from 'react'
import { Link } from 'react-router-dom';
import DSlider from './DSlider';
import { useGlobalContext } from './Context';
const M_Trouser_HeroSection = () => {
    const { m_trouser } = useGlobalContext();
    return (
        <>
            <div className=' grid justify-items-center items-center w-[100%] '>
            <DSlider />



                <div className=' w-[96%]  items-center grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 justify-items-center  mt-2 '>
                   

                    {
                        m_trouser.map((item) => {
                            const { names, title, brand, poster, price, priceoff, rating } = item;
                            return (
                                <>
                                    <Link to="/singleproduct">
                                        <section className=' border-black  w-[100%] border bg-gray-300 bg-opacity-70  '>
                                            <img src={poster} className="h-56 w-[100%]" />
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

export default M_Trouser_HeroSection