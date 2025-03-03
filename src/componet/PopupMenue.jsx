
import React, { useState } from 'react';
import { popUpMenuecontent } from '../content/Contents';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

function PopupMenue() {
    const { nav } = popUpMenuecontent;
    const [active, setActive] = useState(0);
    const menueOpen = useSelector((state) => state.popUp.isMenuOpen);

    const handleClick = (e, link, index) => {
        e.preventDefault(); // Prevent default anchor behavior
        setActive(index); // Update active state

        const targetElement = document.querySelector(link);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="w-full flex justify-center">
            <nav
                className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-2 backdrop-blur-md rounded-full dark:bg-gray-700/65 duration-300 ${menueOpen ? "bottom-3" : "bottom-[-100%]"
                    } md:hidden`}
            >
                {nav.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        onClick={(e) => handleClick(e, item.link, i)}
                        className={`text-xl p-2.5 rounded-full sm:cursor-pointer  text-center
                            ${i === active ? "bg-primary_dark font-bold text-primary_content" : ""}
                            hover:bg-primary_dark hover:text-primary_content`}
                    >
                        <Icon icon={item.icon} width="24" height="24" />
                    </a>
                ))}
            </nav>
        </div>
    );
}

export default PopupMenue;
