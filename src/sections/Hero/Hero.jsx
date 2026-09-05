import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">

            {/* Hero Visual */}
            <div className="hero-visual" aria-hidden="true">
    <img
        src="/images/hero.png"
        alt=""
    />

    <div className="hero-visual-overlay"></div>
</div>


            <div className="hero-container">

                {/* Eyebrow */}
                <div className="hero-eyebrow">
                    <span className="hero-eyebrow-line"></span>

                    <span>
                        Local Businesses → Digital World
                    </span>
                </div>


                {/* Main Content */}
                <div className="hero-content">

                    <h1 className="hero-title">
                        Your Business Exists.
                        <br />
                        <span>
                            Now Let The Digital World Find It.
                        </span>
                    </h1>


                    <p className="hero-description">
                        We help local businesses become easier to find,
                        easier to trust, and smarter to operate through
                        SEO, web development, and AI integration.
                    </p>


                    {/* Actions */}
                    <div className="hero-actions">

                        <a
                            href="#contact"
                            className="btn btn-primary"
                        >
                            Start Your Journey
                        </a>

                        <a
                            href="#work"
                            className="btn btn-secondary"
                        >
                            Explore Our Work
                        </a>

                    </div>

                </div>


                {/* Bottom Indicator */}
                <div className="hero-bottom">

                    <span className="hero-bottom-label">
                        Scroll to explore
                    </span>

                    <span className="hero-bottom-line"></span>

                </div>

            </div>

        </section>
    );
}

export default Hero;