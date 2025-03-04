import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeMode, toggleThemeMode } from "../../redux/slice/ThemeSlice";
import { useEffect } from "react";

function DarkModeButton() {

    const dispatch = useDispatch();
    const theme = useSelector((store) => store.theme.theme);
    const themeMode = useSelector((state) => state.theme.themeMode);

    useEffect(() => {
        const root = document.body;
        dispatch(changeThemeMode(theme));
        root.classList.add(theme);
    }, []);

    // Handle theme toggle (manual switch)
    const handleToggle = () => {
        dispatch(toggleThemeMode());
    };

    // Listen for system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        // Set theme based on system preference initially
        const handleSystemThemeChange = (e) => {
            if (e.matches) {
                // System prefers dark mode
                dispatch(changeThemeMode('dark'));
            } else {
                // System prefers light mode
                dispatch(changeThemeMode('light'));
            }
        };

        // Listen for changes in system preference
        mediaQuery.addEventListener('change', handleSystemThemeChange);

        // Clean up event listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, [dispatch, themeMode]);

    return (
        <div
            className="flex items-center justify-center md:justify-start w-[24px] h-[24px] md:w-[40px] md:h-[21px] border border-theme_border hover:border-primary_light rounded-full bg-theme_bg cursor-pointer md:drop-shadow-[1px_1px_1px_white]"
            onClick={handleToggle}
        >
            <div className={`transform bg-theme_fg rounded-full p-[1px] ${themeMode === 'dark' ? 'md:translate-x-full' : ''} transition-transform duration-300`}>
                {themeMode === 'dark' ? (
                    <Icon icon="line-md:sunny-outline-to-moon-loop-transition" className="w-[18px] h-[18px] sm:h-4 sm:w-4" />
                ) : (
                    <Icon icon="line-md:sunny-loop" className="w-[20px] h-[20px] sm:h-4 sm:w-4" />
                )}
            </div>
        </div>
    );
}

export default DarkModeButton;