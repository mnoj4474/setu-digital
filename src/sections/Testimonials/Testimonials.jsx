import {
    ArrowUpRight,
    Quote,
    TrendingUp,
    Search,
} from "lucide-react";

import "./Testimonials.css";

function Testimonials() {
    const results = [
        {
            number: "01",
            value: "3.4×",
            label: "More Local Visibility",
            description:
                "A stronger local search foundation helped a healthcare business become easier for nearby patients to discover.",
            icon: Search,
        },
        {
            number: "02",
            value: "+47%",
            label: "More Qualified Leads",
            description:
                "A clearer website experience turned more visitors into meaningful enquiries for a local service business.",
            icon: TrendingUp,
        },
    ];

    return (
        <section className="testimonials section" id="results">
            <div className="container">

                <div className="testimonials-header">
                    <div className="section-label">
                        Results
                    </div>

                    <div className="testimonials-heading-row">
                        <h2 className="testimonials-title">
                            Digital Work Should
                            <br />
                            Create Real Results.
                        </h2>

                        <p className="testimonials-intro">
                            The goal isn't to create digital noise.
                            It's to create measurable improvements
                            for the businesses behind it.
                        </p>
                    </div>
                </div>

                <div className="results-grid">
                    {results.map((result) => {
                        const Icon = result.icon;

                        return (
                            <article
                                className="result-card"
                                key={result.number}
                            >
                                <div className="result-card-top">
                                    <span className="result-number">
                                        {result.number}
                                    </span>

                                    <Icon
                                        size={24}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <div className="result-value">
                                    {result.value}
                                </div>

                                <h3 className="result-label">
                                    {result.label}
                                </h3>

                                <p className="result-description">
                                    {result.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                <div className="testimonial-feature">

                    <div className="testimonial-quote-mark">
                        <Quote
                            size={34}
                            strokeWidth={1.2}
                        />
                    </div>

                    <div className="testimonial-content">
                        <blockquote>
                            “SETU helped us turn our digital presence
                            into something that actually supports the
                            business.”
                        </blockquote>

                        <div className="testimonial-author">
                            <div className="testimonial-author-line"></div>

                            <div>
                                <strong>
                                    Local Business Owner
                                </strong>

                                <span>
                                    Healthcare · India
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="testimonials-closing">
                    <p>
                        Better visibility.
                        <br />
                        <span>
                            Better digital experiences.
                        </span>
                    </p>

                    <a
                        href="#contact"
                        className="btn btn-secondary"
                    >
                        <span>Start Your Project</span>

                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.5}
                        />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;