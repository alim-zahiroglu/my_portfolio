
// eslint-disable-next-line react/prop-types
function NavLink({ href, children, isActive, onClick }) {
    const handleClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`hover:text-primary_light text-xl transition-colors duration-200 ${isActive ? 'text-primary_light' : ''}`}
        >
            {children}
        </a>
    );
}

export default NavLink;
