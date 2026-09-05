import {
    ArrowUpRight,
    Stethoscope,
    Scissors,
    Utensils,
    ShoppingBag,
    BriefcaseBusiness,
} from "lucide-react";

import "./Industries.css";

function Industries() {
    const industries = [
        {
            number: "01",
            name: "Clinics",
            description:
                "Help patients discover your practice, understand your services, and take the next step.",
            icon: Stethoscope,
        },
        {
            number: "02",
            name: "Salons",
            description:
                "Turn local searches into appointments with a digital presence built around trust and visibility.",
            icon: Scissors,
        },
        {
            number: "03",
            name: "Restaurants",
            description:
                "Make it easier for nearby customers to discover your menu, location, and experience.",
            icon: Utensils,
        },
        {
            number: "04",
            name: "Retail",
            description:
                "Connect your physical store with customers searching for products and businesses nearby.",
            icon: ShoppingBag,
        },
        {
            number: "05",
            name: "Professional Services",
            description:
                "Build a credible digital presence that communicates your expertise before the first conversation.",
            icon: BriefcaseBusiness,
        },
    ];

    return (
    <section className="industries section" id="industries">

        {/* Industries Visual */}
        <div className="industries-visual" aria-hidden="true">
            <img
                src="/images/offer.webp"
                alt=""
            />
        </div>

        <div className="container">

                {/* Header */}
                <div className="industries-header">

                    <div className="section-label reveal">
                        Who We Help
                    </div>

                    <div className="industries-heading-row">

                        <h2 className="industries-title reveal">
                            Built For Businesses
                            <br />
                            That Matter Locally.
                        </h2>

                        <p className="industries-intro">
                            Whether you run a clinic, salon, restaurant,
                            shop, or professional practice, your customers
                            are already searching.
                        </p>

                    </div>

                </div>


                {/* Industry List */}
                <div className="industries-list">

                    {industries.map((industry) => {

                        const Icon = industry.icon;

                        return (
                            <a
                                href="#contact"
                                className="industry-row reveal"
                                key={industry.number}
                            >

                                <span className="industry-number">
                                    {industry.number}
                                </span>


                                <div className="industry-main">

                                    <div className="industry-icon">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <h3 className="industry-name">
                                        {industry.name}
                                    </h3>

                                </div>


                                <p className="industry-description">
                                    {industry.description}
                                </p>


                                <span className="industry-arrow">
                                    <ArrowUpRight
                                        size={22}
                                        strokeWidth={1.4}
                                    />
                                </span>

                            </a>
                        );
                    })}

                </div>


                {/* Closing */}
                <div className="industries-closing">

                    <p>
                        Different businesses.
                        <br />
                        <span>
                            One digital challenge.
                        </span>
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Industries;