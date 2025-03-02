// import { useServices } from "../../content/Contents";


// export default function Services() {
//     const services = useServices();
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
//                             className="relative p-8 rounded-lg bg-theme_fg shadow-lg transition-all duration-300
//                             border border-transparent before:absolute before:inset-0 before:border-4 before:border-transparent before:rounded-lg
//                             before:transition-all before:duration-300 hover:scale-105 hover:shadow-2xl 
//                             before:hover:border-primary before:hover:scale-[1.05] cursor-pointer"
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


import { useServices } from "../../content/Contents";
import { Icon } from '@iconify/react';

export default function Services() {
    const services = useServices();

    return (
        <section className="bg-theme_bg py-14" id="services">
            <div className="container mx-auto px-5">
                <h1 className="text-4xl font-bold text-center text-theme_bg_copy" data-aos="fade-down">
                    {services.title}
                </h1>
                <h1 className="text-2xl font-light text-center text-secondary/80 pt-2" data-aos="fade-down">
                    {services.subtitle}
                </h1>
                <br />
                <div className="grid md:grid-cols-3 gap-10">
                    {services.services_content.map((service, i) => (
                        <div
                            key={service.id || `service-${i}`}
                            data-aos="fade-up"
                            data-aos-delay={i * 200}
                            className="relative p-8 rounded-lg bg-theme_fg shadow-lg transition-all duration-300
                            border border-transparent before:absolute before:inset-0 before:border-4 before:border-transparent before:rounded-lg
                            before:transition-all before:duration-300 hover:scale-105 hover:shadow-2xl 
                            before:hover:border-primary before:hover:scale-[1.05] cursor-pointer"
                        >
                            <div className="flex justify-center">
                                <Icon icon={service.icon} width="38" height="38" className="text-secondary" />
                            </div>
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
