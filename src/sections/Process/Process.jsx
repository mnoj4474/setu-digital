import {
    Compass,
    Lightbulb,
    Code2,
    Sparkles,
    TrendingUp,
} from "lucide-react";

import "./Process.css";

function Process() {
    const steps = [
        {
            number: "01",
            title: "Discover",
            description:
                "We understand your business, your customers, your market, and where your current digital presence falls short.",
            icon: Compass,
        },
        {
            number: "02",
            title: "Strategize",
            description:
                "We turn what we learn into a practical digital strategy focused on visibility, credibility, and growth.",
            icon: Lightbulb,
        },
        {
            number: "03",
            title: "Build",
            description:
                "We create the websites, search foundations, and digital experiences your business needs.",
            icon: Code2,
        },
        {
            number: "04",
            title: "Integrate",
            description:
                "Where it makes sense, we connect AI and automation to remove repetitive work and improve operations.",
            icon: Sparkles,
        },
        {
            number: "05",
            title: "Grow",
            description:
                "We measure what matters, improve what works, and keep your digital presence moving forward.",
            icon: TrendingUp,
        },
    ];

    return (
        <section className="process section" id="process">

            <div className="container">

                {/* Header */}
                <div className="process-header">

                    <div className="section-label">
                        How We Work
                    </div>

                    <div className="process-heading-row">

                        <h2 className="process-title">
                            From Where You Are
                            <br />
                            To Where You Want To Be.
                        </h2>

                        <p className="process-intro">
                            No unnecessary complexity. Just a clear
                            process that connects strategy with
                            meaningful digital outcomes.
                        </p>

                    </div>

                </div>


                {/* Process Timeline */}
                <div className="process-timeline">

                    <div className="process-line"></div>

                    {steps.map((step) => {

                        const Icon = step.icon;

                        return (
                            <article
                                className="process-step"
                                key={step.number}
                            >

                                <div className="process-step-top">

                                    <span className="process-number">
                                        {step.number}
                                    </span>

                                    <div className="process-icon">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                </div>


                                <div className="process-step-content">

                                    <h3 className="process-step-title">
                                        {step.title}
                                    </h3>

                                    <p className="process-step-description">
                                        {step.description}
                                    </p>

                                </div>

                            </article>
                        );
                    })}

                </div>


                {/* Closing */}
                <div className="process-closing">

                    <p>
                        A bridge is only useful
                        <br />
                        <span>
                            when it gets you somewhere.
                        </span>
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Process;