
// import icons from react-icons
import unchangeable from '../localization/locales/en/unchangeable.json';

import { useTranslation } from "react-i18next";

import developer from '../assets/images/hero/developer.svg';
import developer_dark from '../assets/images/hero/developer-dark.svg';


export const useHeaderMenu = () => {

    const { t } = useTranslation('header');

    return {
        logoLetter: {
            logo: t('logoLetter', { logoName: unchangeable.logoName }),
            link: '#aboutme',
        },

        headerMenu: [
            {
                title: t('headerMenu.aboutMe'),
                link: '#aboutme'
            },
            {
                title: t('headerMenu.projects'),
                link: '#projects'

            },
            {
                title: t('headerMenu.skills'),
                link: '#skills',

            },
            {
                title: t('headerMenu.services'),
                link: '#services'

            },
            {
                title: t('headerMenu.contacts'),
                link: '#contact'

            }
        ]
    };
};


export const useHeroContent = (themeMode) => {
    const { t } = useTranslation('hero');

    return {
        textContent: {
            heading: t('heading', { name: unchangeable.heroHeader }),
            subheading: t('subheading'),
            buttonText: t('buttonText'),
        },
        image: themeMode === 'dark' ? developer : developer_dark,
    };
};

export const useProjectsContent = () => {
    const { t } = useTranslation('projects');

    return {
        title: t('title'),
        subtitle: t('subtitle'),
        projects: t('projects', { returnObjects: true }).map((project, index) => ({
            title: project.title,
            description: project.description,
            image: getImageForProject(project.title),  // Customize this based on project title or other criteria
            links: {
                githubLink: getGitHubLinkForProject(project.title),
                liveDemo: getLiveDemoLinkForProject(project.title),
                details: getDetailsForProject(project.title),
            }
        })),
    };
};

export const useProjectsButtonText = () => {
    const { t } = useTranslation('projectsButtonText');

    return {
        githubRepo: t('githubRepo'),
        liveDemo: t('liveDemo'),
        aboutPro: t('aboutPro'),
    };
}

// Helper function to set images based on project title

const getImageForProject = (projectTitle) => {
    return unchangeable.projectsImages[projectTitle] || unchangeable.projectsImages["default"];
};

// Helper function to set gitHub links based on project title

const getGitHubLinkForProject = (index) => {
    return unchangeable.gitHubLinkForProject[index] || unchangeable.projectsImages["default"];
};

// Helper function to set live demo based on project title

const getLiveDemoLinkForProject = (projectTitle) => {
    return unchangeable.liveDemoLinkForProject[projectTitle] || unchangeable.projectsImages["default"];
};

// Helper function to set images based on project title

const getDetailsForProject = (projectTitle) => {
    return unchangeable.projectsImages[projectTitle] || unchangeable.projectsImages["default"];
};


export const useSkills = () => {
    const { t } = useTranslation('skills');

    return {
        title: t('title'),
        subtitle: t('subtitle'),
        skills_content: [
            {
                name: t('skills_content.0.name'),
                description: t('skills_content.0.description'),
                skills: t('skills_content.0.skills', { returnObjects: true }),
                logo: getLogo(t('skills_content.0.id')),
            },
            {
                name: t('skills_content.1.name'),
                description: t('skills_content.1.description'),
                skills: t('skills_content.1.skills', { returnObjects: true }),
                logo: getLogo(t('skills_content.1.id')),
            },
            {
                name: t('skills_content.2.name'),
                description: t('skills_content.2.description'),
                skills: t('skills_content.2.skills', { returnObjects: true }),
                logo: getLogo(t('skills_content.2.id')),
            }
        ]
    };
};

const getLogo = (id) => {
    return unchangeable.skillsLogos[id] || unchangeable.skillsLogos["default"];
};


export const useServices = () => {
    const { t } = useTranslation("services");

    return {
        title: t("title"),
        subtitle: t("subtitle"),
        services_content: [
            {
                id: "001",
                name: t("services_content.0.name"),
                description: t("services_content.0.description"),
                services: t("services_content.0.services", { returnObjects: true }) || [],
                icon: getServicesIcon("001"),
            },
            {
                id: "002",
                name: t("services_content.1.name"),
                description: t("services_content.1.description"),
                services: t("services_content.1.services", { returnObjects: true }) || [],
                icon: getServicesIcon("002"),
            },
            {
                id: "003",
                name: t("services_content.2.name"),
                description: t("services_content.2.description"),
                services: t("services_content.2.services", { returnObjects: true }) || [],
                icon: getServicesIcon("003"),
            }
        ]
    };
};

const getServicesIcon = (id) => {
    return unchangeable.servicesIcon[id] || unchangeable.servicesIcon["default"];
};

export const useContact = () => {
    const { t } = useTranslation("contact");

    return {
        title: t("title"),
        subtitle: t("subtitle"),
        namefiled: t("namefiled"),
        emailfiled: t("emailfiled"),
        messagefiled: t("messagefiled"),
        sendbutton: t("sendbutton"),

        social_media: [
            {
                text: unchangeable.contacts.email,
                icon: unchangeable.contacts.emailIcom, // Using correct icon reference
                link: "mailto:" + unchangeable.contacts.email,
            },
            {
                text: unchangeable.contacts.phone,
                icon: unchangeable.contacts.phoneIcom, // Using correct icon reference
                link: "https://wa.me/" + unchangeable.contacts.wahtsapp,
            },
            ...unchangeable.socialMediaLinks.map(social => ({
                text: social.text,
                icon: social.icon,
                link: social.link
            }))
        ],
    };
};

export const popupSocialMedia = [
    ...unchangeable.socialMediaLinks.map(social => ({
        icon: unchangeable.popupIcons[social.text] || unchangeable.popupIcons["default"],
        link: social.link
    })),
    {
        icon: "mdi:email-outline",
        link: "mailto:" + unchangeable.contacts.email,
    }
];

const getSocialMediaIcon = (text) => {
    return unchangeable.popupIcons[text] || unchangeable.popupIcons["default"];
};


export const popUpMenuecontent = {

    nav: [
        {
            link: "#aboutme",
            icon: "mdi:account",
        },
        {
            link: "#projects",
            icon: "mdi:folder-open",
        },
        {
            link: "#skills",
            icon: "mdi:lightbulb-on",
        },
        {
            link: "#services",
            icon: "mdi:cog",
        },
        {
            link: "#contact",
            icon: "mdi:contact-mail",
        },
    ],

};


export const themes = [
    {
        name: "default",
        color: "rgb(17, 125, 192)",
    },
    {
        name: "youtube",
        color: "rgb(235, 35, 0)",
    },
    {
        name: "twitch",
        color: "rgb(145, 71, 255)",
    },
    {
        name: "hacker",
        color: "rgb(70, 153, 235)",
    },
    {
        name: "miro",
        color: "rgb(255, 221, 51)",
    },
    {
        name: "mangoDB",
        color: "rgb(0, 237, 100)",
    },
    {
        name: "jetBrian",
        color: "rgb(107, 86, 255)",
    },
    {
        name: "pusher",
        color: "rgb(135, 49, 210)",
    },
];


export const languages = [
    ...unchangeable.languages
]


