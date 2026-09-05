import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
    // --------------------------------
    // Basic reveals
    // --------------------------------

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    once: true,
                },
            }
        );
    });

    // --------------------------------
    // Fade in
    // --------------------------------

    const fades = document.querySelectorAll(".fade-in");

    fades.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    once: true,
                },
            }
        );
    });

    // --------------------------------
    // Scale in
    // --------------------------------

    const scaleElements = document.querySelectorAll(".scale-in");

    scaleElements.forEach((element) => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                scale: 0.96,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    once: true,
                },
            }
        );
    });

    // --------------------------------
    // Stagger service cards
    // --------------------------------

    const serviceCards = document.querySelectorAll(".service-card");

    if (serviceCards.length) {
        gsap.fromTo(
            serviceCards,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: serviceCards[0],
                    start: "top 82%",
                    once: true,
                },
            }
        );
    }

    // --------------------------------
    // Stagger industry rows
    // --------------------------------

    const industryRows = document.querySelectorAll(".industry-row");

    if (industryRows.length) {
        gsap.fromTo(
            industryRows,
            {
                opacity: 0,
                x: -30,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: industryRows[0],
                    start: "top 82%",
                    once: true,
                },
            }
        );
    }

    // --------------------------------
    // Stagger process steps
    // --------------------------------

    const processSteps = document.querySelectorAll(".process-step");

    if (processSteps.length) {
        gsap.fromTo(
            processSteps,
            {
                opacity: 0,
                y: 35,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: processSteps[0],
                    start: "top 82%",
                    once: true,
                },
            }
        );
    }

    // --------------------------------
    // Stagger work projects
    // --------------------------------

    const workProjects = document.querySelectorAll(".work-project");

    if (workProjects.length) {
        gsap.fromTo(
            workProjects,
            {
                opacity: 0,
                y: 50,
                scale: 0.98,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.18,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: workProjects[0],
                    start: "top 82%",
                    once: true,
                },
            }
        );
    }

    // --------------------------------
    // Hero entrance
    // --------------------------------

    const hero = document.querySelector(".hero");

    if (hero) {
        const heroTimeline = gsap.timeline({
            delay: 0.2,
        });

        const heroVisual = hero.querySelector(".hero-visual");
        const heroEyebrow = hero.querySelector(".hero-eyebrow");
        const heroTitle = hero.querySelector(".hero-title");
        const heroDescription = hero.querySelector(".hero-description");
        const heroActions = hero.querySelector(".hero-actions");
        const heroBottom = hero.querySelector(".hero-bottom");

        if (heroVisual) {
            heroTimeline.fromTo(
                heroVisual,
                {
                    opacity: 0,
                    scale: 1.05,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.8,
                    ease: "power2.out",
                }
            );
        }

        if (heroEyebrow) {
            heroTimeline.fromTo(
                heroEyebrow,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=1.2"
            );
        }

        if (heroTitle) {
            heroTimeline.fromTo(
                heroTitle,
                {
                    opacity: 0,
                    y: 35,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        }

        if (heroDescription) {
            heroTimeline.fromTo(
                heroDescription,
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        }

        if (heroActions) {
            heroTimeline.fromTo(
                heroActions,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.4"
            );
        }

        if (heroBottom) {
            heroTimeline.fromTo(
                heroBottom,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.2"
            );
        }
    }

    // --------------------------------
// Subtle hero image parallax
// --------------------------------

if (hero) {
    const heroImage = hero.querySelector(".hero-visual img");

    if (heroImage) {
        gsap.to(heroImage, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });
    }
}
    // --------------------------------
    // Refresh ScrollTrigger
    // --------------------------------

    ScrollTrigger.refresh();
}

