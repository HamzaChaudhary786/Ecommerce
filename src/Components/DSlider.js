import React from 'react'

const DSlider = () => {
    return (
        <>
            <div className='h-[100%] w-[100%]'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://bit.ly/3YTUjFb" className="d-block w-100 w-screen h-screen" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Mens Trouser Collection</h1>
                                <p>Best Quality Of Trouser Are Availible on GLOBEX</p>
                                <br />
                                <div><br /></div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://bit.ly/400mKCL" className="d-block w-100 w-screen h-screen" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Mens Shorts Collection</h1>
                                <p>Best Quality Of Trouser Are Availible on GLOBEX</p>
                                <br />
                                <div><br /></div>
                            </div>

                        </div>

                        <div className="carousel-item">
                            <img src="https://bit.ly/40gt0pK" className="d-block w-100 w-screen h-screen" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                                <br />
                                <div><br /></div>
                            </div>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default DSlider