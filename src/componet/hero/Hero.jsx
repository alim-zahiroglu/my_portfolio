import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useHeroContent } from '../../content/Contents';
import { Trans } from 'react-i18next';

function Hero() {

    const themeMode = useSelector((state) => state.theme.themeMode);
    const { textContent, image } = useHeroContent(themeMode);
    return (
        <div id='aboutme' className='relative overflow-hidden bg-theme_fg min-h-[550px] sm:min-h-[650px] flex items-center'>
            <div className='h-[700px] w-[700px] bg-secondary_light absolute -top-1/2 right-0 rounded-3xl rotate-45'></div>

            <div className='container pb-8 sm:pb-0 mt-20'>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center items-center sm:items-start pt-12 pl-6 pr-6 gap-3 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true"
                            className="text-xl sm:text-2xl lg:text-4xl text-theme_fg_copy"
                        >
                            <Trans i18nKey="heading" values={{ name: "Ziya Kasgari" }}>
                                {textContent.heading}
                            </Trans>
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className="text-md sm:text-xl lg:text-2xl text-theme_bg_copy"
                        >
                            {textContent.subheading}
                        </p>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                            className='mt-4 shadow-md'
                        >
                            <button
                                className="flex items-center gap-2 text-md sm:text-xl bg-primary hover:scale-105 duration-200 text-primary_content py-3 px-4 sm:py-4 sm:px-6 rounded-md hover:bg-primary_dark"
                            >
                                <FiArrowDownCircle className="text-xl sm:text-2xl" />
                                {textContent.buttonText}
                            </button>
                        </div>
                    </div>

                    <div className="order-2 sm:order-1">
                        <div
                            data-aos="zoom-in"
                            data-aos-once="true"
                            className="relative z-10 sm:pt-0 pt-8"
                        >
                            <img
                                src={image}
                                alt=""
                                className="w-[400px] h-[400px] sm:h-[650px] sm:w-[650px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
