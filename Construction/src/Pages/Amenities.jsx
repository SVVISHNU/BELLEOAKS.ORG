import React, { useRef } from "react";
import "./Amenities.css";
import { motion, useScroll, useTransform } from "framer-motion";
import IMG_PARK from '../assets/imgi_36_image.webp';
import IMG_firepit from '../assets/imgi_35_image.jpg';

// Placeholders based on screenshot content types
const IMG_LEFT = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"; // Interior
const IMG_RIGHT = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"; // Pool
const IMG_CENTER = "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974&auto=format&fit=crop"; // Exterior/Street
const IMG_FINAL = "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"; // Family
const AMENITY_INTRO = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"; // Building Exterior
const IMG_MARKET = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"; // Cafe/Marketplace
const IMG_POOL = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"; // Pool (reuse or new)
// const IMG_firepit = "https://images.unsplash.com/photo-1533552097839-a9c04135ae37?q=80&w=1974&auto=format&fit=crop"; // Firepit/Social

const ParallaxCard = ({ src, align = "left" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax Effect: Move image vertically opposite to scroll
    const yParams = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    // Reveal Animation based on alignment
    const initialX = align === "left" ? -100 : (align === "right" ? 100 : 0);
    const initialY = align === "center" ? 100 : 0;

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.5, opacity: 0, x: initialX, y: initialY }}
            whileInView={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-4 overflow-hidden position-relative shadow-lg"
            style={{ height: '400px' }} // Fixed height for effect
        >
            <motion.img
                src={src}
                className="w-100 h-100 object-fit-cover"
                style={{ y: yParams, scale: 1.2 }} // Scale up to prevent gaps
                alt="Amenity"
            />
        </motion.div>
    );
};

const Amenities = () => {
    return (
        <div className="amenities-page">

            {/* INTRO SECTION - CREAM BACKGROUND */}
            <section className="intro-section container-fluid px-0">
                <div className="container">
                    {/* HERO TEXT */}
                    <div className="row mb-5 pb-5">
                        <div className="col-12">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="display-1 font-serif mb-0 text-dark-blue"
                                style={{ lineHeight: '1.1' }}
                            >
                                Live where your <span className="fst-italic fw-normal">lifestyle</span> lives — <br />
                                where everything is within reach.
                            </motion.h1>
                        </div>
                    </div>

                    {/* SPLIT CONTENT */}
                    <div className="row align-items-end mt-5 pt-5 pb-5">
                        <div className="col-md-5 mb-4 mb-md-0">
                            <motion.div
                                className="rounded-4 overflow-hidden shadow-sm"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8 }}
                                style={{ height: '350px' }}
                            >
                                <img src={AMENITY_INTRO} alt="Building Exterior" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <motion.p
                                className="lead mb-4 text-dark-blue"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ maxWidth: '400px' }}
                            >
                                At Belle Oaks, your day flows effortlessly. Start with a short walk to grab your favorite coffee, wave to neighbors at the market, and drop your dry cleaning on the way home.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WAKE UP EXPERIENCE START */}
            {/* STICKY HEADER - STAYS VISIBLE UNTIL FINAL SECTION */}
            <div className="sticky-title">
                <motion.h1
                    className="display-1 text-white mb-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Wake up
                </motion.h1>
            </div>

            <div className="container" style={{ paddingBottom: '10vh' }}>
                {/* SPACER FOR INTRO */}
                <div style={{ height: '50vh' }}></div>

                {/* IMAGE 1: LEFT */}
                <div className="scroll-section row justify-content-start">
                    <div className="col-md-5">
                        <ParallaxCard src={IMG_LEFT} align="left" />
                    </div>
                </div>

                {/* IMAGE 2: RIGHT - INTERNAL PARALLAX */}
                <div className="scroll-section row justify-content-end">
                    <div className="col-md-5">
                        <ParallaxCard src={IMG_RIGHT} align="right" />
                    </div>
                </div>

                {/* IMAGE 3: CENTER */}
                <div className="scroll-section row justify-content-center">
                    <div className="col-md-6">
                        <ParallaxCard src={IMG_CENTER} align="center" />
                    </div>
                </div>
            </div>

            {/* FINAL SECTION - FULL SCREEN OVERLAY */}
            <div className="final-section position-relative">
                {/* Background Image */}
                <div className="position-absolute w-100 h-100 top-0 start-0">
                    <div className="w-100 h-100 bg-dark opacity-50 position-absolute" style={{ zIndex: 1 }}></div> {/* Tint */}
                    <img src={IMG_FINAL} alt="Family" className="w-100 h-100 object-fit-cover" />
                </div>

                {/* Text Overlay */}
                <div className="position-relative text-center" style={{ zIndex: 2 }}>
                    <motion.h1
                        className="display-1 font-serif text-gold fst-italic"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                    >
                        And everything is waiting.
                    </motion.h1>
                </div>
            </div>

            {/* DETAILED AMENITIES - CREAM BACKGROUND REVISITED */}
            <section className="intro-section container-fluid py-5 mt-0 position-relative" style={{ zIndex: 4, backgroundColor: '#f6f3ee' }}>
                <div className="container py-5">

                    {/* 1. DISCOVER THE HEART */}
                    <div className="row mb-5 text-center justify-content-center">
                        <div className="col-lg-8">
                            <motion.h2
                                className="display-3 font-serif text-dark-blue mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                            >
                                Discover the <span className="fst-italic">Heart</span> of Belle Oaks
                            </motion.h2>
                            <motion.p
                                className="lead text-dark-blue mx-auto"
                                style={{ maxWidth: '700px' }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Belle Oaks Central Park is where neighbors become friends and every day feels a little brighter. Whether you’re out for a stroll, reading under a tree, or just soaking up the sun, this welcoming green space is the perfect escape.
                            </motion.p>
                        </div>
                    </div>
                    {/* Wide Image (Carousel Placeholder) */}
                    <div className="row mb-5 pb-5">
                        <div className="col-12">
                            <motion.div
                                className="rounded-5 overflow-hidden shadow-lg"
                                style={{ height: '600px' }}
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img src={IMG_PARK} alt="Central Park" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                        </div>
                    </div>

                    {/* 2. MARKETPLACE */}
                    <div className="row my-5 py-5 text-center justify-content-center">
                        <div className="col-lg-9">
                            <motion.h2
                                className="display-4 font-serif text-dark-blue mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                At Belle Oaks <span className="fst-italic">Marketplace</span>, life flows <span className="fst-italic">naturally</span> from one moment to the <span className="fst-italic">next</span>
                            </motion.h2>
                            <motion.p
                                className="mb-5 text-muted"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                Coffee in hand, errands handled, fresh air in your lungs, and a social circle just around the corner.<br />
                                Here, your home is the gateway to an entire neighborhood made for living well.
                            </motion.p>
                        </div>
                        <div className="col-10">
                            <motion.div
                                className="rounded-4 overflow-hidden shadow"
                                style={{ height: '400px' }}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img src={IMG_MARKET} alt="Marketplace" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                        </div>
                    </div>

                    {/* 3. POOL & DOG PARK */}
                    <div className="row mt-5 pt-5">
                        {/* Text Split */}
                        <div className="col-md-4 mb-4">
                            <motion.p
                                className="lead text-dark-blue pe-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                Garden, grill, socialize, let your puppy roam at the dog park, or simply soak up the sun. Whether you're looking for stillness or connection, Belle Oaks gives you the space to live fully.
                            </motion.p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7 mb-5">
                            <motion.h2
                                className="display-4 font-serif text-dark-blue"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                Unwind at the <span className="fst-italic">resort-style</span> pool, host friends by the <span className="fst-italic">fire pit</span>, meet neighbors, or let your pup play in the dedicated <span className="fst-italic">dog park</span>.
                            </motion.h2>
                        </div>
                    </div>
                    {/* Images Grid */}
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <motion.div
                                className="rounded-4 overflow-hidden h-100 shadow"
                                style={{ minHeight: '400px' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img src={IMG_POOL} alt="Pool" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <motion.div
                                className="rounded-4 overflow-hidden h-100 shadow"
                                style={{ minHeight: '400px' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img src={IMG_firepit} alt="Firepit" className="w-100 h-100 object-fit-cover" />
                            </motion.div>
                        </div>
                    </div>

                    {/* 4. FOOTER / SLIDER TEXT */}
                    <div className="row mt-5 pt-5 pb-5 mb-5 align-items-center">
                        <div className="col-md-6">
                            <motion.h3
                                className="display-5 text-dark-blue"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                Belle Oaks makes the <br /> everyday feel effortless.
                            </motion.h3>
                        </div>
                        <div className="col-md-6 text-end">
                            <motion.p
                                className="text-dark-blue"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                With concierge service at Building 3, a fully equipped fitness studio, <br /> smart access entry, and even a secure package room.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Amenities;
