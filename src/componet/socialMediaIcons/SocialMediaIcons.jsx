import React from 'react';
import { Icon } from '@iconify/react';

const SocialMediaIcons = () => {
    const iconClass = 'text-primary hover:text-primary_dark';
    return (

        <div className="hidden sm:flex fixed left-6 top-1/3 transform -translate-y-1/2 flex-col  space-y-2 z-30">
            <a href="https://www.linkedin.com/in/alim-zahiroglu" target="_blank" rel="noopener noreferrer">
                <Icon icon='basil:linkedin-outline' height='26' width='26' className={iconClass} />
            </a>
            <a href="https://github.com/alim-zahiroglu" target="_blank" rel="noopener noreferrer">
                <Icon icon='proicons:github' height='26' width='26' className={iconClass} />
            </a>
            <a href="https://www.youtube.com/@alim-zahiroglu" target="_blank" rel="noopener noreferrer">
                <Icon icon='basil:youtube-outline' height='26' width='26' className={iconClass} />
            </a>
            <a href="mailto:alim@uydev.net">
                <Icon icon='mdi:email-outline' height='26' width='26' className={iconClass} />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
