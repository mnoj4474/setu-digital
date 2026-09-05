import {
    ArrowUpRight,
    Search,
    Monitor,
    Sparkles,
} from "lucide-react";

import "./Services.css";

function Services() {
    const services = [
        {
            number: "01",
            icon: Search,
            title: "SEO",
            promise: "Be Found",
            description:
                "Make your business visible when local customers are searching for what you offer.",
            features: [
                "Local Search Visibility",
                "Google Business Optimization",
                "Search Strategy",
            ],
        },
        {
            number: "02",
            icon: Monitor,
            title: "Web Development",
            promise: "Be Credible",
            description:
                "Turn your digital presence into a clear, professional experience that builds trust.",
            features: [
                "Conversion-Focused Websites",
                "Responsive Design",
                "Performance & SEO Foundations",
            ],
        },
        {
            number: "03",
            icon: Sparkles,
            title: "AI Integration",
            promise: "Work Smarter",
            description:
                "Connect practical AI tools to everyday workflows so your business can operate more efficiently.",
            features: [
                "AI Workflow Automation",
                "Business Process Integration",
                "Smarter Operations",
            ],
        },
    ];

    return (
        <section className="services section" id="services">

            <div className="container">

                {/* Services Introduction */}
                <div className="services-intro-layout">

                    <div className="services-intro-content">

                        <div className="section-label reveal">
                            What We Build
                        </div>

                        <h2 className="services-title reveal">
                            Three Ways To Move
                            <br />
                            Your Business Forward.
                        </h2>

                        <p className="services-intro reveal">
                            We focus on the digital foundations that
                            help local businesses get discovered,
                            earn trust, and operate better.
                        </p>

                        <a
                            href="#work"
                            className="btn btn-secondary services-intro-button reveal"
                        >
                            Explore Our Work
                            <ArrowUpRight
                                size={18}
                                strokeWidth={1.5}
                            />
                        </a>

                    </div>

                    {/* Services Visual */}
                    <div className="services-visual">
                        <img
                            src="/images/Services.webp"
                            alt="SEO, web development, and AI integration"
                        />
                    </div>

                </div>

                {/* Service Cards */}
                <div className="services-grid">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (
                            <article
                                className="service-card reveal"
                                key={service.number}
                            >

                                <div className="service-card-top">

                                    <span className="service-number">
                                        {service.number}
                                    </span>

                                    <Icon
                                        className="service-icon"
                                        size={28}
                                        strokeWidth={1.4}
                                    />

                                </div>

                                <div className="service-card-content">

                                    <h3 className="service-title">
                                        {service.title}
                                    </h3>

                                    <div className="service-promise">
                                        {service.promise}
                                    </div>

                                    <p className="service-description">
                                        {service.description}
                                    </p>

                                </div>

                                <ul className="service-features">

                                    {service.features.map(
                                        (feature) => (
                                            <li key={feature}>
                                                <span className="service-feature-line"></span>
                                                {feature}
                                            </li>
                                        )
                                    )}

                                </ul>

                                <a
                                    href="#contact"
                                    className="service-link"
                                >
                                    <span>
                                        Explore Service
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.5}
                                    />
                                </a>

                            </article>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default Services;