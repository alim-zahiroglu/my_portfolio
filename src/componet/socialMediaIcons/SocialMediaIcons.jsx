import React from 'react';
import { Icon } from '@iconify/react';
import { popupSocialMedia } from '../../content/Contents';

const SocialMediaIcons = () => {
    const iconClass = 'text-primary hover:text-primary_dark';

    return (
        <div className="hidden sm:flex fixed left-6 top-1/3 transform -translate-y-1/2 flex-col space-y-2 z-30">
            {popupSocialMedia.map((content, i) => (
                <a
                    key={i}
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon={content.icon} height='26' width='26' className={iconClass} />
                </a>
            ))}
        </div>
    );
};

export default SocialMediaIcons;
