
import Header from './header/Header'
import Hero from './hero/Hero'
import PopupMenue from './PopupMenue'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import SocialMediaIcons from './socialMediaIcons/SocialMediaIcons'
import ThemeIcons from './themes/ThemeIcons'
import Contact from './contact/Contact'
import Footer from './Footer'
import Services from './services/services'
import { Helmet } from "react-helmet-async";
import unchangeable from '../localization/locales/en/unchangeable.json';

function Wrapper() {

    return (
        <>
            <Helmet>
                <title>{unchangeable.heroHeader}</title>
                <meta name="description" content="Portfolio" />
                <link rel="canonical" href="" />
            </Helmet>

            <SocialMediaIcons />
            <ThemeIcons />
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Services />
            <Contact />
            <Footer />
            <PopupMenue />

        </>
    )
}

export default Wrapper