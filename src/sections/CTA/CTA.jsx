import { ArrowUpRight } from "lucide-react";

import "./CTA.css";

function CTA() {
    return (
        <section className="cta section" id="contact">
            <div className="container">

                <div className="cta-inner">

                    <div className="cta-label">
                        <span className="cta-label-line"></span>
                        <span>Start Your Journey</span>
                    </div>

                    <div className="cta-content">

                        <h2 className="cta-title">
                            Let's Build A Bridge
                            <br />
                            <span>
                                To Your Digital Future.
                            </span>
                        </h2>

                        <p className="cta-description">
                            Your business has already come this far.
                            Let's build the digital foundation that
                            takes it further.
                        </p>

                        <a
                            href="mailto:mnojchoudhary8@gmail.com"
                            className="btn btn-primary cta-button"
                        >
                            <span>Start a Project</span>

                            <ArrowUpRight
                                size={20}
                                strokeWidth={1.5}
                            />
                        </a>

                    </div>

                    <div className="cta-bottom">

                        <span>
                            SEO
                        </span>

                        <span className="cta-bottom-line"></span>

                        <span>
                            Web Development
                        </span>

                        <span className="cta-bottom-line"></span>

                        <span>
                            AI Integration
                        </span>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default CTA;