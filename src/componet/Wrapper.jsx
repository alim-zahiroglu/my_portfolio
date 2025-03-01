import React, { useEffect } from 'react'

import Header from './header/Header'
import Hero from './hero/Hero'
import PopupMenue from './PopupMenue'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import SocialMediaIcons from './socialMediaIcons/SocialMediaIcons'
import ThemeIcons from './themes/ThemeIcons'
import Contact from './contact/Contact'
import Footer from './footer'

function Wrapper() {

    return (
        <>
            <SocialMediaIcons />
            <ThemeIcons />
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            <PopupMenue />
        </>
    )
}

export default Wrapper