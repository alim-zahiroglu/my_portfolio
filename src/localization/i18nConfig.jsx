// i18nConfig.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the language detector

import enHeader from './locales/en/header.json'
import enHero from './locales/en/hero.json'
import enprojects from './locales/en/projects.json'
import enprojectsButtonText from './locales/en/projectsButtonText.json'
import enskills from './locales/en/skills.json'

import trHeader from './locales/tr/header.json'
import trHero from './locales/tr/hero.json'
import trprojects from './locales/tr/projects.json'
import trprojectsButtonText from './locales/tr/projectsButtonText.json'
import trskills from './locales/tr/skills.json'

const resources = {
    en: {
        header: enHeader,
        hero: enHero,
        projects: enprojects,
        projectsButtonText: enprojectsButtonText,
        skills: enskills,


    },
    tr: {
        header: trHeader,
        hero: trHero,
        projects: trprojects,
        projectsButtonText: trprojectsButtonText,
        skills: trskills,
    },
};

i18n
    .use(LanguageDetector) // Use the language detector
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en', // Set fallback language to English
        detection: {
            order: ['localStorage', 'navigator'], // Check localStorage first, then the browser language
            lookupLocalStorage: 'i18nextLng', // Specify the key for localStorage
            caches: ['localStorage'], // Cache the detected language in localStorage
        },
        interpolation: { escapeValue: false },
    });

export default i18n;
