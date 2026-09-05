import {
    ArrowUpRight,
} from "lucide-react";

import "./Footer.css";

function Footer() {
    const navigation = [
        {
            label: "Services",
            href: "#services",
        },
        {
            label: "Work",
            href: "#work",
        },
        {
            label: "Process",
            href: "#process",
        },
        {
            label: "About",
            href: "#about",
        },
    ];

    const services = [
        "SEO",
        "Web Development",
        "AI Integration",
    ];

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-main">

                    <div className="footer-brand">

                        <a
                            href="#home"
                            className="footer-logo"
                        >
                            SETU
                            <span>DIGITAL</span>
                        </a>

                        <p className="footer-tagline">
                            Building bridges between real businesses
                            and the digital world.
                        </p>

                        <a
                            href="mailto:mnojchoudhary8@gmail.com"
                            className="footer-contact"
                        >
                            <span>mnojchoudhary8@gmail.com</span>

                            <ArrowUpRight
                                size={18}
                                strokeWidth={1.5}
                            />
                        </a>

                    </div>

                    <div className="footer-links">

                        <div className="footer-column">
                            <span className="footer-column-title">
                                Explore
                            </span>

                            <nav>
                                {navigation.map((item) => (
                                    <a
                                        href={item.href}
                                        key={item.label}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="footer-column">
                            <span className="footer-column-title">
                                Services
                            </span>

                            <nav>
                                {services.map((service) => (
                                    <a
                                        href="#services"
                                        key={service}
                                    >
                                        {service}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="footer-column">
                            <span className="footer-column-title">
                                Connect
                            </span>

                            <nav className="footer-socials">

                                <a
    href="https://www.instagram.com/shanks_themarketer/"
    target="_blank"
    rel="noopener noreferrer"
>
    Instagram
</a>

                                <a
    href="https://wa.me/919509293334"
    target="_blank"
    rel="noopener noreferrer"
>
    WhatsApp
</a>

                            </nav>
                        </div>

                    </div>

                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()} SETU DIGITAL.
                        All rights reserved.
                    </span>

                    <a href="/privacy">
    Privacy
</a>

<a href="/terms">
    Terms
</a>


                </div>

            </div>

        </footer>
    );
}

export default Footer;