
// import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

// const services = {
//     title: "Services",
//     subtitle: "WHAT I OFFER",
//     services_content: [
//         {
//             id: "001",
//             name: "Backend Development",
//             icon: <FaCode className="text-primary text-5xl" />,
//             description: "Building scalable and secure backend solutions with Java Spring Boot and Python FastAPI.",
//             services: [
//                 "REST API Development",
//                 "Microservices Architecture",
//                 "Swagger API Documentation",
//                 "Authentication & Authorization (JWT, OAuth, Keycloak)",
//                 "Database Design & Optimization (PostgreSQL, MySQL)",
//                 "Cloud & DevOps (AWS, Docker, CI/CD, Nginx)"
//             ]
//         },
//         {
//             id: "002",
//             name: "Frontend Development",
//             icon: <FaLaptopCode className="text-primary text-5xl" />,
//             description: "Creating interactive and responsive web applications with modern frontend technologies.",
//             services: [
//                 "React & Next.js Development",
//                 "State Management (Redux, Context API)",
//                 "Responsive UI with Bootstrap & Tailwind",
//                 "API Integration with Axios & Fetch",
//                 "Performance Optimization"
//             ]
//         },
//         {
//             id: "003",
//             name: "UI & Graphic Design",
//             icon: <FaPaintBrush className="text-primary text-5xl" />,
//             description: "Enhancing user experience with visually appealing UI designs and graphics.",
//             services: [
//                 "Website UI/UX Design",
//                 "Graphic Design with Adobe Photoshop & Illustrator",
//                 "Motion Graphics & Video Editing",
//                 "Prototyping with Adobe XD & Figma",
//             ]
//         }
//     ]
// };

// export default function Services() {
//     return (
//         <section className="bg-theme_bg py-14" id="services">
//             <div className="container mx-auto px-5">
//                 <h1 className="text-4xl font-bold text-center text-theme_bg_copy" data-aos="fade-down">
//                     {services.title}
//                 </h1>
//                 <h1 className="text-2xl font-light text-center text-theme_bg_copy/60 pt-2" data-aos="fade-down">
//                     {services.subtitle}
//                 </h1>
//                 <br />
//                 <div className="grid md:grid-cols-3 gap-10">
//                     {services.services_content.map((service, i) => (
//                         <div
//                             key={service.id}
//                             data-aos="fade-up"
//                             data-aos-delay={i * 200}
//                             className="relative p-8 rounded-lg bg-theme_fg shadow-lg hover:shadow-xl transition 
//                             transform hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer
//                             border border-transparent hover:border-primary before:absolute before:inset-0 before:border-4 before:border-transparent before:rounded-lg
//                             before:transition-all before:duration-300 before:hover:border-primary before:hover:scale-105"
//                         >
//                             <div className="flex justify-center">{service.icon}</div>
//                             <h1 className="text-2xl font-semibold text-center mt-3">{service.name}</h1>
//                             <p className="text-xl text-theme_bg_copy/70 my-4">{service.description}</p>
//                             <ul className="mt-4">
//                                 {service.services.map((item, index) => (
//                                     <li key={index} className="bg-primary text-xl text-primary_content px-3 py-1 rounded-md inline-block m-1 sm:hover:scale-105 duration-200 cursor-pointer">
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const services = {
    title: "Services",
    subtitle: "WHAT I OFFER",
    services_content: [
        {
            id: "001",
            name: "Backend Development",
            icon: <FaCode className="text-primary text-5xl" />,
            description: "Building scalable and secure backend solutions with Java Spring Boot and Python FastAPI.",
            services: [
                "REST API Development",
                "Microservices Architecture",
                "Swagger API Documentation",
                "Authentication & Authorization (JWT, OAuth, Keycloak)",
                "Database Design & Optimization (PostgreSQL, MySQL)",
                "Cloud & DevOps (AWS, Docker, CI/CD, Nginx)"
            ]
        },
        {
            id: "002",
            name: "Frontend Development",
            icon: <FaLaptopCode className="text-primary text-5xl" />,
            description: "Creating interactive and responsive web applications with modern frontend technologies.",
            services: [
                "React & Next.js Development",
                "State Management (Redux, Context API)",
                "Responsive UI with Bootstrap & Tailwind",
                "API Integration with Axios & Fetch",
                "Performance Optimization"
            ]
        },
        {
            id: "003",
            name: "UI & Graphic Design",
            icon: <FaPaintBrush className="text-primary text-5xl" />,
            description: "Enhancing user experience with visually appealing UI designs and graphics.",
            services: [
                "Website UI/UX Design",
                "Graphic Design with Adobe Photoshop & Illustrator",
                "Motion Graphics & Video Editing",
                "Prototyping with Adobe XD & Figma",
            ]
        }
    ]
};

export default function Services() {
    return (
        <section className="bg-theme_bg py-14" id="services">
            <div className="container mx-auto px-5">
                <h1 className="text-4xl font-bold text-center text-theme_bg_copy" data-aos="fade-down">
                    {services.title}
                </h1>
                <h1 className="text-2xl font-light text-center text-theme_bg_copy/60 pt-2" data-aos="fade-down">
                    {services.subtitle}
                </h1>
                <br />
                <div className="grid md:grid-cols-3 gap-10">
                    {services.services_content.map((service, i) => (
                        <div
                            key={service.id}
                            data-aos="fade-up"
                            data-aos-delay={i * 200}
                            className="relative p-8 rounded-lg bg-theme_fg shadow-lg transition-all duration-300
                            border border-transparent before:absolute before:inset-0 before:border-4 before:border-transparent before:rounded-lg
                            before:transition-all before:duration-300 hover:scale-105 hover:shadow-2xl 
                            before:hover:border-primary before:hover:scale-[1.05] cursor-pointer"
                        >
                            <div className="flex justify-center">{service.icon}</div>
                            <h1 className="text-2xl font-semibold text-center mt-3">{service.name}</h1>
                            <p className="text-xl text-theme_bg_copy/70 my-4">{service.description}</p>
                            <ul className="mt-4">
                                {service.services.map((item, index) => (
                                    <li key={index} className="bg-primary text-xl text-primary_content px-3 py-1 rounded-md inline-block m-1 sm:hover:scale-105 duration-200 cursor-pointer">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
