import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from './Context'
const Mens_HeroSection = () => {

  const { men } = useGlobalContext();
  return (
    <>
      <div className=' grid justify-items-center items-center bg-white'>
        <div className=' flex p-2'>

          {/* <div className=' bg-yellow-100 h-[50%] w-56 mt-6 p-4'>
            <div flex>
              <h1>Filters</h1>
              <span>Clear All</span>
            </div>
            <div>___________</div>

            <div>
              price
            </div>
            <div></div>
            <h1>Brand</h1>
            <div></div>
            <h1>Color</h1>
            <div></div>
            <h1>Discount Range</h1>


          </div> */}

          <div className=' w-[85%] md:w-[85%] lg:w-[95%] grid-cols-1 grid md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-y-6 mt-2 p-4'>


            {
              men.map((item) => {
                const { names, title, brand, poster, price, priceoff, rating } = item;
                return (
                  <>
                    <Link to="/singleproduct">
                      <section className=' border-black  w-[80%] md:w-[80%] border bg-gray-300 bg-opacity-70  '>
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
      </div>


    </>

  )
}

export default Mens_HeroSection