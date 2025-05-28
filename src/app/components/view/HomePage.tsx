import React from 'react'
import SecondBanner from '../hero/SecondBanner'
import Accordion from '../accordion/Accordion'
import Sponsor from '../sponsors/Sponsor'
import Footer from '../footer/Footer'
import Visit from '@/app/blog/Visit'
import BlogHome from '@/app/blog/BlogHome'
import ThirdBanner from '../about/ThirdBanner'



const HomePage = () => {
    return (
        <>
            {/* <Banner /> */}
           <ThirdBanner />
            {/* <Event /> */}
            <SecondBanner />
            <BlogHome />
            <Visit />
            <Accordion />
            <Sponsor />
            <Footer />
        </>
    )
}

export default HomePage