import React, { useRef } from "react";
import "./About.css";
import { MoveUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Placeholder images - replacing with placeholders for now since actual assets aren't in the prompt paths
// You can swap these with the actual image paths if available.
const HERO_BG = "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop";
const STREET_VIEW = "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop";
const BUILDING_TOP = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

const About = () => {
    // Animation Variants
    const slideLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const slideRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInUp = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Scroll Zoom Logic for Vision Section
    const visionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: visionRef,
        offset: ["start end", "center center"]
    });

    // Scales from 1.0 to 1.2 as it comes into view -> Parallax Zoom effect
    const scaleAnim = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    // Opacity fade for container
    const opacityAnim = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <div className="about-page">

            {/* SECTION 1: HERO TEXT */}
            <section className="about-hero container">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12 text-center">
                        <motion.h5
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-uppercase text-muted mb-3 tracking-widest"
                        >
                            The Vision Behind Belle Oaks
                        </motion.h5>
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="display-1 font-serif fst-italic text-dark-blue"
                        >
                            Designed for <span className="fst-normal">A new kind of luxury living</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-muted w-50 mx-auto"
                            style={{ maxWidth: '600px' }}
                        >
                            Belle Oaks is a thoughtfully envisioned, master-planned community of twelve luxury residences, where elevated design, modern living, and everyday convenience come seamlessly together.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: VISION & CITY - ANIMATED SPLIT */}
            <section className="vision-section container py-5" ref={visionRef}>
                <div className="row align-items-center mb-5">
                    <motion.div
                        className="col-md-5"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h6 className="text-dark-blue mb-4">The Vision Behind Belle Oaks</h6>
                    </motion.div>
                    <motion.div
                        className="col-md-7"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h2 className="display-4 font-serif text-dark-blue">
                            A City of Its Own - Shaped by <span className="fst-italic">Simplicity</span>, Connectivity & Intentional <span className="fst-italic">Design</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Image Overlay Section - SCROLL ZOOM ANIMATION ON IMAGE ONLY */}
                <div className="row mt-5 position-relative">
                    <div className="col-12">
                        <motion.div
                            className="vision-card position-relative overflow-hidden rounded-4"
                            style={{ opacity: opacityAnim }}
                        >
                            <motion.img
                                src={STREET_VIEW}
                                alt="Community Street"
                                className="w-100 h-100 object-fit-cover"
                                style={{ scale: scaleAnim }}
                            />

                            {/* Centered Text Overlay */}
                            <div className="vision-card-text position-absolute top-50 start-50 translate-middle text-center text-white w-75">
                                <div className="glass-pill d-inline-block px-4 py-2 rounded-pill mb-3 text-dark mb-4">
                                    Rooted in the heart of Cleveland
                                </div>
                                <h3 className="display-5 font-serif">
                                    This 79-acre master-planned <span className="fst-italic">community</span> reimagines what <span className="fst-italic">modern living</span> can be: walkable, self-contained, and intuitively <span className="fst-italic">designed</span> for real life.
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: MORE THAN A PLACE */}
            <section className="lifestyle-section container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-5">
                        <motion.div
                            className="lifestyle-banner rounded-4 overflow-hidden mb-4 mx-auto"
                            style={{ maxWidth: '1000px', height: '300px' }}
                            initial={{ width: '80%' }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, ease: 'circOut' }}
                            viewport={{ once: false }}
                        >
                            <img src={BUILDING_TOP} alt="Building Top" className="w-100 h-100 object-fit-cover" />
                        </motion.div>
                        <h2 className="display-3 font-serif text-dark-blue mb-4">
                            This is <span className="fst-italic">more</span> than a <span className="fst-italic">place</span> to live
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Belle Oaks is more than a community; it's a meticulously designed lifestyle ecosystem. With nearly 800 exclusive residences, a full suite of on-site retail, green spaces, fitness, wellness, dining, and even self-storage, Belle Oaks puts every daily need within reach. You're not commuting to life - you're already living it.
                        </p>

                        {/* Scroll Up Button placeholder logic */}
                        <div className="mt-5">
                            <button className="btn btn-light rounded-circle p-3 shadow-sm">
                                <MoveUpRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: STATS */}
            <section className="stats-section container-fluid py-5 bg-cream">
                <div className="container">
                    <div className="row g-4">
                        {/* Card 1: Buildings */}
                        <motion.div
                            className="col-md-4"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: false }}
                        >
                            <div className="stat-card p-5 rounded-4 bg-light-cream h-100 d-flex flex-column justify-content-between">
                                <div className="stat-label">BUILDINGS</div>
                                <div className="stat-number font-serif fst-italic text-dark-blue display-1">12</div>
                            </div>
                        </motion.div>

                        {/* Card 2: Units */}
                        <motion.div
                            className="col-md-4"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: false }}
                        >
                            <div className="stat-card p-5 rounded-4 bg-light-cream h-100 d-flex flex-column justify-content-between">
                                <div className="stat-label">TOTAL UNITS</div>
                                <div className="stat-number font-serif fst-italic text-dark-blue display-1">798</div>
                            </div>
                        </motion.div>

                        {/* Card 3: Living Area */}
                        <motion.div
                            className="col-md-4"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: false }}
                        >
                            <div className="stat-card p-5 rounded-4 bg-light-cream h-100 d-flex flex-column justify-content-between">
                                <div className="stat-label">LIVING AREAS</div>
                                <div className="stat-number font-serif fst-italic text-dark-blue display-3">
                                    790 <span className="fs-4 fst-normal text-muted">to</span> 1,450 <span className="fs-4 fst-italic">Sq</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: DESIGN PRINCIPLES */}
            <section className="principles-section container-fluid py-5 bg-cream">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-end mb-5">
                        <motion.div
                            className="col-md-6"
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            <h2 className="display-4 text-dark-blue font-serif">
                                Design <span className="fst-italic">Principles</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            className="col-md-6"
                            variants={slideRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            <div className="d-flex justify-content-end gap-5">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="icon-circle bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: 50, height: 50 }}>
                                        <span className="small">🏛️</span>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-dark-blue">Architect ↗</div>
                                        <div className="small text-muted">Bialosky Cleveland</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="icon-circle bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: 50, height: 50 }}>
                                        <span className="small">🔧</span>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-dark-blue">Developer ↗</div>
                                        <div className="small text-muted">DealPoint Merrill, LLC</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4">
                        {/* Principle 1 */}
                        <motion.div className="col-md-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: false }}>
                            <div className="principle-card position-relative rounded-4 overflow-hidden text-white" style={{ height: '500px' }}>
                                <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" alt="Urban Planning" className="w-100 h-100 object-fit-cover" />
                                <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column">
                                    <h3 className="h4 mb-3">Compact Urban Planning</h3>
                                    <p className="small opacity-75">Human-scaled buildings, interconnected by walkable paths.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Principle 2 */}
                        <motion.div className="col-md-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: false }}>
                            <div className="principle-card position-relative rounded-4 overflow-hidden text-white" style={{ height: '500px' }}>
                                <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop" alt="Smart Living" className="w-100 h-100 object-fit-cover" />
                                <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column">
                                    <h3 className="h4 mb-3">Smart Living Layouts</h3>
                                    <p className="small opacity-75">Interiors built for modern life — natural light, flexibility, flow.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Principle 3 */}
                        <motion.div className="col-md-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: false }}>
                            <div className="principle-card position-relative rounded-4 overflow-hidden text-white" style={{ height: '500px' }}>
                                <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop" alt="Sustainability" className="w-100 h-100 object-fit-cover" />
                                <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column">
                                    <h3 className="h4 mb-3">Sustainability-First</h3>
                                    <p className="small opacity-75">Materials, energy systems, and landscaping aligned with long-term environmental goals.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: CTA / NEXT CHAPTER */}
            <section className="cta-section container py-5 my-5">
                <div className="row align-items-center mb-5">
                    <motion.div className="col-md-6" variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                        <h2 className="display-3 font-serif text-dark-blue">
                            <span className="fst-italic">Ready</span> to walk into your next <span className="fst-italic">chapter ?</span>
                        </h2>
                    </motion.div>
                    <motion.div className="col-md-6" variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                        <p className="text-muted ps-5" style={{ fontSize: '1.1rem' }}>
                            Here, convenience meets calm. Whether you're walking home from dinner, enjoying the gardens, or grabbing your morning espresso, Belle Oaks gives you time — and space — to enjoy the life you've built.
                        </p>
                    </motion.div>
                </div>

                <div className="row g-4">
                    {/* CTA 1: 3D MAP */}
                    <motion.div className="col-md-6" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: false }}>
                        <div className="cta-card bg-white rounded-4 p-3 d-flex align-items-center gap-4 shadow-sm">
                            <div className="cta-img rounded-3 overflow-hidden" style={{ width: '200px', height: '150px' }}>
                                <img src={HERO_BG} alt="3D Map" className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="flex-grow-1">
                                <h3 className="h2 font-serif text-dark-blue mb-0">Explore the <span className="fst-italic">3D map</span></h3>
                            </div>
                            <button className="btn btn-dark rounded-circle p-3" style={{ width: 50, height: 50, backgroundColor: '#1e2a55' }}>
                                <MoveUpRight size={20} color="white" />
                            </button>
                        </div>
                    </motion.div>

                    {/* CTA 2: UNITS */}
                    <motion.div className="col-md-6" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: false }}>
                        <div className="cta-card bg-white rounded-4 p-3 d-flex align-items-center gap-4 shadow-sm">
                            <div className="cta-img rounded-3 overflow-hidden" style={{ width: '200px', height: '150px' }}>
                                <img src={BUILDING_TOP} alt="Units" className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="flex-grow-1">
                                <h3 className="h2 font-serif text-dark-blue mb-0">View units <span className="fst-italic">available</span></h3>
                            </div>
                            <button className="btn btn-dark rounded-circle p-3" style={{ width: 50, height: 50, backgroundColor: '#1e2a55' }}>
                                <MoveUpRight size={20} color="white" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;
