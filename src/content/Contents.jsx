
// import icons from react-icons
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import unchangeable from '../localization/locales/en/unchangeable.json';
import backend from "../assets/images/skills/backend.png";
import ps from "../assets/images/skills/ps.png";
import reactjs from "../assets/images/skills/react.png";

import { useTranslation } from "react-i18next";

import developer from '../assets/images/hero/developer.svg';
import developer_dark from '../assets/images/hero/developer-dark.svg';

export const useHeaderMenu = () => {

    const { t } = useTranslation('header');

    return {
        logoLetter: {
            logo: t('logoLetter', { logoName: 'Alim' }),
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
            heading: t('heading', { name: 'Alim Zahiroglu' }),
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
                logo: getLogo(t('skills_content.0.name')),
            },
            {
                name: t('skills_content.1.name'),
                description: t('skills_content.1.description'),
                skills: t('skills_content.1.skills', { returnObjects: true }),
                logo: getLogo(t('skills_content.1.name')),
            },
            {
                name: t('skills_content.2.name'),
                description: t('skills_content.2.description'),
                skills: t('skills_content.2.skills', { returnObjects: true }),
                logo: getLogo(t('skills_content.2.name')),
            }
        ]
    };
};

const getLogo = (skills_name) => {
    return unchangeable.skillsLogos[skills_name] || unchangeable.skillsLogos["default"];
};

export const popUpMenuecontent = {

    nav: [
        {
            link: "#home",
            icon: TbSmartHome,
        },
        {
            link: "#skills",
            icon: BiUser,
        },
        {
            link: "#services",
            icon: RiServiceLine,
        },
        {
            link: "#projects",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ],

}




export const themes = [
    {
        name: "default",
        color: "rgb(17, 125, 192)",
    },
    {
        name: "youtube",
        color: "rgb(255, 2, 0)",
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
    "en",
    "tr",
    // "uy",
    // "ar"
]


