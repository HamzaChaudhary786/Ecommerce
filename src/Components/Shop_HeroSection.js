import React, { useState } from 'react'
import { useGlobalContext } from './Context'

const Shop_HeroSection = () => {

  const [value, setValue] = useState();
  const [colorvalue, setColorValue] = useState();
  const [person, setPerson] = useState();

  const { shoping, query, setQuery } = useGlobalContext();
  return (
    <>

      <div className=' grid justify-items-center items-center bg-white'>



        <div className=' bg-yellow-100 h-auto w-[60%] mt-6 p-4 justify-items-center items-center grid'>

          <div className=' grid grid-cols-2 w-[95%] h-auto justify-between items-center text-center' >
            <div>
              Filters
            </div>
            <div>Clear All</div>


          </div>

          <div>
            <label>
              Gender
            </label>
            <div>
              <input type="text" value={person} placeholder='  Type Gender....' onChange={(e) => setPerson(e.target.value)} />
            </div>
            <label>Price</label>
            <div><input type="number" value={value} placeholder=' type price...' onChange={(e) => setValue(e.target.value)} /></div>
            <label>Color</label>
            <div><input type="text" value={colorvalue} placeholder=' Type Color' onChange={(e) => setColorValue(e.target.value)} />
            </div>
          </div>
        </div>
        <div className=' w-[96%] grid-cols-2 grid md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-4 mt-2 '>


          {
            shoping.map((item) => {
              const { id, names, title, brand, poster, price, priceoff, rating, color, gender } = item;


              return (
                <>

                  {
                    color == colorvalue && price <= value && person == gender || query.toLowerCase() == gender ?




                      < section className=' border-black  w-[100%]  border bg-gray-300 bg-opacity-70  ' key={id}>
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

                      :
                      console.log(names)
                  }
                </>
              )
            })

          }

        </div>



        <div className='w-[96%] grid-cols-2 grid md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-4 mt-2'>


          {
            shoping.map((item) => {
              const { names, title, brand, poster, price, priceoff, rating } = item;


              return (
                <>
                  < section className=' border-black  w-[100%]  border bg-gray-300 bg-opacity-70  '>
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

                </>
              )
            })

          }

        </div>
      </div>


    </>
  )
}

export default Shop_HeroSection