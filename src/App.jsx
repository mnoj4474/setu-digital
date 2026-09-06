import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Philosophy from "./sections/Philosophy/Philosophy";
import Services from "./sections/Services/Services";
import Industries from "./sections/Industries/Industries";
import Work from "./sections/Work/Work";
import Process from "./sections/Process/Process";
import About from "./sections/About/About";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTA from "./sections/CTA/CTA";
import Footer from "./sections/Footer/Footer";

import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

import { initScrollAnimations } from "./utils/animations";

import { Analytics } from "@vercel/analytics/react";

function Home() {
    useEffect(() => {
        initScrollAnimations();
    }, []);

    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Philosophy />
                <Services />
                <Industries />
                <Work />
                <Process />
                <About />
                <Testimonials />
                <CTA />
            </main>

            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>

        <Analytics />
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;