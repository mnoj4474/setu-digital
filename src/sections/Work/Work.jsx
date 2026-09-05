import { ArrowUpRight } from "lucide-react";

import "./Work.css";

function Work() {
    const projects = [
        {
            number: "01",
            category: "Healthcare",
            title: "A Digital Presence Built For Trust",
            description:
                "A complete digital foundation designed to help a local clinic become easier to discover and easier to trust.",
            services: "SEO · Web Development",
        },
        {
            number: "02",
            category: "Local Business",
            title: "From Local Search To More Customers",
            description:
                "A search-focused digital strategy designed around local visibility, discovery, and conversion.",
            services: "Local SEO · Google Business",
        },
        {
            number: "03",
            category: "Business Operations",
            title: "Turning Repetitive Work Into Smarter Work",
            description:
                "Practical AI integrations designed to reduce repetitive tasks and give business owners more time to focus on growth.",
            services: "AI Integration · Automation",
        },
    ];

    return (
        <section className="work section" id="work">

            <div className="container">

                {/* Header */}
                <div className="work-header">

                    <div className="section-label reveal">
                        Selected Work
                    </div>

                    <div className="work-heading-row">

                        <h2 className="work-title reveal">
                            Work That Bridges
                            <br />
                            Business & Opportunity.
                        </h2>

                        <p className="work-intro">
                            Every project starts with the same question:
                            what is stopping the right customers from
                            finding and choosing this business?
                        </p>

                    </div>

                </div>


                {/* Projects */}
                <div className="work-list">

                    {projects.map((project) => (

                        <article
                            className="work-project reveal"
                            key={project.number}
                        >

                            {/* Project Number */}
                            <div className="work-project-number">
                                {project.number}
                            </div>


                            {/* Project Content */}
                            <div className="work-project-content">

                                <div className="work-project-meta">
                                    {project.category}
                                </div>

                                <h3 className="work-project-title">
                                    {project.title}
                                </h3>

                                <p className="work-project-description">
                                    {project.description}
                                </p>

                                <div className="work-project-services">
                                    {project.services}
                                </div>

                            </div>


                            {/* Project Visual Placeholder */}
                            <div
                                className="work-project-visual"
                                aria-hidden="true"
                            >
                                <div className="work-project-visual-grid">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <span className="work-project-visual-label">
                                    SETU DIGITAL
                                </span>
                            </div>


                            {/* Arrow */}
                            <div className="work-project-arrow">
                                <ArrowUpRight
                                    size={24}
                                    strokeWidth={1.4}
                                />
                            </div>

                        </article>

                    ))}

                </div>


                {/* Bottom Statement */}
                <div className="work-bottom">

                    <span className="work-bottom-line"></span>

                    <p>
                        Strategy becomes meaningful
                        <span> when it creates movement.</span>
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Work;