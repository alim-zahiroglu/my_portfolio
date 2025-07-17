import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { languages } from '../../content/Contents';

const LangSwicher = () => {

    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLanguageChange = (lang) => {

        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang); // Save the selected language to localStorage
        setShowDropdown(false); // Close the dropdown after selection
    };

    return (
        <div className="relative inline-block">
            <button
                className="text-secondary font-bold cursor-pointer sm:px-2 py-2"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
                {i18n.language.toUpperCase().split("-")[0]}
            </button>


            {showDropdown && (
                <div
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >

                    <div className='absolute flex left-3 z-50'>
                        <span
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
                            }}
                            className="h-4 w-4 rotate-45 rounded-tl shadow-lg border border-theme_border bg-theme_bg "
                        />
                    </div>

                    <div
                        className="absolute -left-8 mt-[7px] rounded-md shadow-lg border border-theme_border bg-theme_bg "
                    >
                        <div className="py-2 px-5 space-x-3 flex flex-row flex-grow" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {languages && languages.map((lng, index) => (
                                <div
                                    key={index} // Adding a key prop to each element
                                    className="block text-md cursor-pointer text-theme_fg_copy border-b border-b-theme_bg hover:text-theme_bg_copy hover:border-b-theme_bg_copy"
                                    onClick={() => handleLanguageChange(lng)}
                                >
                                    {lng.toUpperCase()}
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            )}
        </div>
    );
};

export default LangSwicher;
