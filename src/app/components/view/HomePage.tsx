import React from 'react'
import Banner from '../hero/Banner'
import SecondBanner from '../hero/SecondBanner'
import Blog from '../blog/Blog'
import Visit from '../blog/Visit'
import Accordion from '../accordion/Accordion'
import Sponsor from '../sponsors/Sponsor'
import Footer from '../footer/Footer'

const HomePage = () => {
    return (
        <>
            <Banner />
            <SecondBanner />
            <Blog />
            <Visit />
            <Accordion />
            <Sponsor />
            <Footer />
        </>
    )
}

export default HomePage