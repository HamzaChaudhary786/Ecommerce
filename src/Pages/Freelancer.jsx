import React from 'react'
import Footer from '../Components/Footer'
import Freelancer_Card from '../Components/Freelancer_Card'
import Freelancer_HeroSection from '../Components/Freelancer_HeroSection'
import Navbar from '../Components/Navbar'

const Freelancer = () => {
    return (
        <>
            <Navbar />
            <Freelancer_HeroSection />
            <Freelancer_Card/>
            <Footer />

        </>
    )
}

export default Freelancer