import React from 'react';
import { Icon } from '@iconify/react';
import unchangeable from '../../localization/locales/en/unchangeable.json';

const SocialMediaIcons = () => {
    const iconClass = 'text-primary hover:text-primary_dark';
    return (

        <div className="hidden sm:flex fixed left-6 top-1/3 transform -translate-y-1/2 flex-col  space-y-2 z-30">
            <a href={unchangeable.socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon icon='basil:linkedin-outline' height='26' width='26' className={iconClass} />
            </a>
            <a href={unchangeable.socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
                <Icon icon='proicons:github' height='26' width='26' className={iconClass} />
            </a>
            <a href={unchangeable.socialMediaLinks.youtube} target="_blank" rel="noopener noreferrer">
                <Icon icon='basil:youtube-outline' height='26' width='26' className={iconClass} />
            </a>
            <a href={`mailto:${unchangeable.contacts.email}`} target="_blank" rel="noopener noreferrer">
                <Icon icon='mdi:email-outline' height='26' width='26' className={iconClass} />
            </a>
        </div >
    );
};

export default SocialMediaIcons;
