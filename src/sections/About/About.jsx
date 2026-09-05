import {
    ArrowUpRight,
    Network,
    Compass,
    Layers3,
} from "lucide-react";

import "./About.css";

function About() {
    const principles = [
        {
            number: "01",
            icon: Network,
            title: "Connection",
            description:
                "We connect real businesses with the people already searching for them.",
        },
        {
            number: "02",
            icon: Compass,
            title: "Direction",
            description:
                "We turn scattered digital efforts into a clear path forward.",
        },
        {
            number: "03",
            icon: Layers3,
            title: "Foundation",
            description:
                "We build digital systems designed to support long-term growth.",
        },
    ];

    return (
        <section className="about section" id="about">
            <div className="container">

                <div className="about-header">
                    <div className="section-label">
                        The SETU Story
                    </div>

                    <div className="about-heading-row">
                        <h2 className="about-title">
                            The World Has Always
                            <br />
                            Been Connected By Bridges.
                        </h2>

                        <p className="about-intro">
                            SETU means bridge. We believe the role of
                            digital technology is not to replace the
                            business you built, but to connect it with
                            the world around you.
                        </p>
                    </div>
                </div>

                <div className="about-story">

                    <div className="about-story-mark">
                        <span>SETU</span>
                    </div>

                    <div className="about-story-content">
                        <p className="about-story-lead">
                            Your business already has something valuable.
                            Our job is to build the bridge that helps more
                            people discover it, trust it, and choose it.
                        </p>

                        <p className="about-story-text">
                            From search visibility and high-performing
                            websites to practical AI systems, we create
                            digital foundations for businesses that want
                            to move forward without unnecessary complexity.
                        </p>

                        <a
                            href="#contact"
                            className="btn btn-secondary about-story-link"
                        >
                            <span>Build Your Bridge</span>

                            <ArrowUpRight
                                size={18}
                                strokeWidth={1.5}
                            />
                        </a>
                    </div>

                </div>

                <div className="about-principles">

                    {principles.map((principle) => {
                        const Icon = principle.icon;

                        return (
                            <article
                                className="about-principle"
                                key={principle.number}
                            >
                                <div className="about-principle-top">
                                    <span className="about-principle-number">
                                        {principle.number}
                                    </span>

                                    <Icon
                                        size={24}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <h3 className="about-principle-title">
                                    {principle.title}
                                </h3>

                                <p className="about-principle-description">
                                    {principle.description}
                                </p>
                            </article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default About;