import "./Philosophy.css";

function Philosophy() {
    return (
        <section className="philosophy section" id="philosophy">

            <div className="container">

                {/* Section Label */}
                <div className="section-label reveal">
                    The Idea
                </div>


                {/* Main Statement */}
                <div className="philosophy-intro">

                    <h2 className="philosophy-title reveal">
                        The World Has Always
                        <br />
                        Been Connected By Bridges.
                    </h2>

                    <p className="philosophy-description reveal">
                        From ancient trade routes to today's digital
                        networks, progress has always depended on
                        connection.
                    </p>

                </div>


                {/* Bridge Diagram */}
                <div className="philosophy-bridge reveal">

                    <div className="philosophy-node">

                        <span className="philosophy-node-number">
                            01
                        </span>

                        <span className="philosophy-node-title">
                            Real Business
                        </span>

                        <span className="philosophy-node-description">
                            Your expertise, products, services and
                            reputation already exist.
                        </span>

                    </div>


                    <div className="philosophy-connection">

                        <span className="philosophy-connection-line"></span>

                        <span className="philosophy-connection-name">
                            SETU
                        </span>

                        <span className="philosophy-connection-line"></span>

                    </div>


                    <div className="philosophy-node">

                        <span className="philosophy-node-number">
                            02
                        </span>

                        <span className="philosophy-node-title">
                            Digital World
                        </span>

                        <span className="philosophy-node-description">
                            The people searching, discovering and
                            choosing businesses like yours.
                        </span>

                    </div>

                </div>


                {/* Closing Statement */}
                <div className="philosophy-closing reveal">

                    <p>
                        Your business is real.
                        <br />
                        <span>
                            Your digital presence should be too.
                        </span>
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Philosophy;