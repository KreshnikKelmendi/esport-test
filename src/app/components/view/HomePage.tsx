import React from 'react'
import Banner from '../hero/Banner'
import SecondBanner from '../hero/SecondBanner'


import Accordion from '../accordion/Accordion'
import Sponsor from '../sponsors/Sponsor'
import Footer from '../footer/Footer'
import Visit from '@/app/blog/Visit'
import Blog from '@/app/blog/BlogHome'
import BlogHome from '@/app/blog/BlogHome'


const HomePage = () => {
    return (
        <>
            <Banner />
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