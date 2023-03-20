import React from 'react'
import { useGlobalContext } from './Context'
const Freelancer_Card = () => {

    function Fav() {

        let heart = document.getElementById("heart").style.color = "red";

    }
    const { card } = useGlobalContext();
    return (
        <>

            <div className=' grid justify-items-center items-center'>

                <div className='  text-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center w-[98%] gap-4 mt-4'>
                    {
                        card.map((item) => {
                            const { title, poster, image, level, name, rating, price } = item;
                            return (
                                <>
                                    <section className=' border border-black w-[100%] h-[100%] rounded-lg'>
                                        <img src={poster} className="h-32 w-[100%] rounded-t-lg" />
                                        <div className=' p-4'>
                                            <div className='flex'>
                                                <img src={image} className="rounded-full mr-2" />
                                                {title}<br />
                                                {level}
                                            </div>
                                            <p>{name}</p>
                                            <span className=' items-center flex  text-yellow-300'>
                                                <span className='text-2xl mr-2 '>
                                                    <ion-icon name="star"></ion-icon>
                                                </span>
                                                {rating}
                                            </span>
                                            <div className='w-[100%] border'></div>
                                            <div className=' grid grid-cols-2 justify-items-center items-center'>
                                                <span className='text-2xl '>
                                                    <span className='px-2' >
                                                        <ion-icon name="menu-outline"></ion-icon>
                                                    </span>
                                                    <span id="heart" onClick={Fav}>
                                                        <ion-icon name="heart"></ion-icon>
                                                    </span>
                                                </span>
                                                <span>
                                                    starting at<br />
                                                    {price}
                                                </span>
                                            </div>
                                        </div>
                                    </section>

                                </>
                            )
                        })

                    }

                </div>

                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://bit.ly/42mlnA0" class="d-block" className='h-screen w-screen' alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First Slide</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://wallpapercave.com/wp/wp7995177.jpg" class="d-block " className='h-screen w-screen' alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://bit.ly/3YTUjFb" class="d-block" className='h-screen w-screen' alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

              

            </div>
        </>
    )
}

export default Freelancer_Card