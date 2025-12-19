
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Building, ShoppingCart, ArrowUpRight, Feather } from 'lucide-react';
import HoverText from './HoverText'; // Import HoverText

import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function UIOverlay({ viewState, setViewState, selectedBuilding, onCloseDetail }) {
    const navigate = useNavigate();
    const [showVideo, setShowVideo] = React.useState(false);

    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="ui-overlay position-absolute top-0 start-0 w-100 h-100 pe-none" style={{ zIndex: 10 }}>
            {/* VIDEO MODAL */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        className="video-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center pe-auto"
                        style={{ zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.6)' }} // Light dim background
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowVideo(false)} // Close on background click
                    >
                        <div className="position-relative w-75 h-75 bg-dark rounded-4 overflow-hidden shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="btn btn-dark position-absolute top-0 end-0 m-3 rounded-circle p-2"
                                style={{ zIndex: 10 }}
                                onClick={() => setShowVideo(false)}
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder: Rick Roll or generic
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">

                {/* INTRO STATE */}
                {viewState === 'intro' && (
                    <motion.div
                        key="intro"
                        className="d-flex flex-column align-items-center justify-content-center w-100 h-100 text-center text-dark pe-auto"
                        {...fadeIn}
                    >
                        <div className="container" style={{ marginTop: '10vh' }}>
                            <h1 className="display-1 fw-bold mb-4" style={{ color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                                A city of its own,<br />
                                <span className="fst-italic font-serif">designed around you.</span>
                            </h1>
                            <p className="lead mb-5" style={{ color: '#1a1a1a', maxWidth: '600px', margin: '0 auto' }}>
                                Luxury apartments, daily conveniences – everything you need, nothing you have to drive to.
                            </p>
                            <motion.button
                                className="btn rounded-pill px-4 py-3 d-flex align-items-center gap-2 mx-auto interact-button"
                                onClick={() => setViewState('village')}
                                style={{ pointerEvents: 'auto', color: 'white', border: 'none' }}
                                initial="initial"
                                whileHover="hovered"
                                variants={{
                                    initial: { backgroundColor: '#1e2b58' }, // Dark Blue
                                    hovered: { backgroundColor: '#1e2b58' }  // Same color on hover
                                }}
                            >
                                {/* We reuse specific HoverText logic inline or via component? 
                                    HoverText component has its own 'whileHover', which might conflict if we want the BUTTON padding to trigger it. 
                                    Let's try a workaround: Use a custom HoverText-like structure here for full button trigger support. 
                                */}
                                <div className="d-flex overflow-hidden position-relative" style={{ lineHeight: 1 }}>
                                    <motion.div className="d-flex" variants={{ initial: { y: 0 }, hovered: { y: 0 } }}>
                                        {"Start exploring".split("").map((char, i) => (
                                            <motion.div
                                                key={i}
                                                className="position-relative d-flex flex-column"
                                                variants={{
                                                    initial: { y: 0 },
                                                    hovered: { y: "-100%" }
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.33, 1, 0.68, 1],
                                                    delay: i * 0.02
                                                }}
                                            >
                                                <span>{char === " " ? "\u00A0" : char}</span>
                                                <span className="position-absolute top-100 start-0">
                                                    {char === " " ? "\u00A0" : char}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                                <ChevronDown size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* VILLAGE STATE */}
                {viewState === 'village' && (
                    <motion.div
                        key="village"
                        className="d-flex flex-column align-items-center justify-content-end w-100 h-100 pb-5"
                        {...fadeIn}
                    >
                        {/* Center Card */}
                        <div className="card border-0 shadow-lg p-0 mb-4 overflow-hidden pe-auto interact-card" style={{ maxWidth: '500px', borderRadius: '20px', pointerEvents: 'auto' }}>
                            <div className="text-white p-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '280px', backgroundColor: '#1e2b58' }}>
                                <Feather size={28} className="mb-4 opacity-75" />
                                <h3 className="h4 text-uppercase fw-light mb-4 text-center" style={{ letterSpacing: '3px' }}>
                                    A CITY OF ITS OWN.
                                </h3>
                                <button
                                    className="btn btn-light rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                    onClick={() => setShowVideo(true)}
                                >
                                    Watch the full video <ArrowUpRight size={16} />
                                </button>
                            </div>
                            <div className="card-body p-5 text-center bg-white">
                                <h2 className="mb-3">Welcome to <span className="fst-italic font-serif">Belle oaks</span></h2>
                                <p className="text-secondary small">
                                    Belle Oaks is a thoughtfully envisioned, master-planned community of twelve luxury residences, where elevated design, modern living, and everyday convenience come together.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Buttons */}
                        <div className="d-flex gap-3 pe-auto" style={{ pointerEvents: 'auto' }}>
                            <button
                                className="btn btn-light rounded-pill px-4 py-3 d-flex align-items-center gap-2 shadow-sm border"
                                onClick={() => setViewState('city')}
                            >
                                <Building size={18} /> Residences
                            </button>
                            <button
                                className="btn btn-light rounded-pill px-4 py-3 d-flex align-items-center gap-2 shadow-sm border"
                                onClick={() => navigate('/surroundings')}
                            >
                                <ShoppingCart size={18} /> Surroundings
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* CITY STATE - Mostly handled by 3D markers, but we can add a hint */}
                {viewState === 'city' && (
                    <motion.div
                        key="city"
                        className="position-absolute bottom-0 w-100 text-center pb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="text-white bg-dark bg-opacity-50 px-4 py-2 rounded-pill d-inline-block backdrop-blur">
                            <span className="fst-italic">Select a building number to view details</span>
                        </div>
                        <div className="d-flex gap-3 justify-content-center mt-4 pe-auto" style={{ pointerEvents: 'auto' }}>
                            <button
                                className="btn btn-dark rounded-pill px-5 py-3 d-flex align-items-center gap-2 shadow"
                            >
                                <Building size={18} /> Residences
                            </button>
                            <button
                                className="btn btn-light rounded-pill px-5 py-3 d-flex align-items-center gap-2 shadow"
                                onClick={() => setViewState('village')}
                            >
                                Back to Village
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* DETAIL STATE */}
                {viewState === 'detail' && selectedBuilding && (
                    <motion.div
                        key="detail"
                        className="position-absolute top-0 start-0 h-100 p-4 d-flex align-items-center"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                    >
                        <BuildingCard
                            selectedBuilding={selectedBuilding}
                            onClose={onCloseDetail}
                            navigate={navigate}
                        />
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}

// Extracted Card Component to handle local hover state easily
function BuildingCard({ selectedBuilding, onClose, navigate }) {
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = React.useState(false);
    const cardRef = React.useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            className="position-relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            ref={cardRef}
        >
            <div
                className="card border-0 shadow-lg overflow-hidden pe-auto interact-card"
                style={{
                    width: '400px',
                    borderRadius: '20px',
                    pointerEvents: 'auto',
                    cursor: 'none' // Hide default cursor
                }}
                onClick={() => navigate(`/building/${selectedBuilding}`)}
            >
                <div className="bg-light p-0 position-relative" style={{ height: '200px' }}>
                    <img src="https://placehold.co/600x400/png" alt="Building" className="w-100 h-100 object-fit-cover" />
                    <span className="position-absolute top-50 start-50 translate-middle bg-warning rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '50px', height: '50px', border: '3px solid white' }}>
                        {selectedBuilding}
                    </span>
                </div>
                <div className="card-body p-4 bg-white">
                    <h2 className="mb-3">OAK</h2>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        <span className="badge bg-warning text-dark rounded-pill px-3 py-2">POOL VIEW</span>
                        <span className="badge bg-warning text-dark rounded-pill px-3 py-2">MAINSTREET VIEW</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-end mt-4">
                        <div>
                            <div className="small text-secondary text-uppercase mb-1">FROM 729 SQ</div>
                            <div className="small text-secondary text-uppercase">START AT $2,078.00</div>
                        </div>
                        <div className="text-end">
                            <div className="display-4 fw-light text-primary" style={{ lineHeight: 1 }}>{selectedBuilding}</div>
                            <div className="small text-primary">Units</div>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-light p-3 border-0">
                    <button
                        className="btn btn-light w-100 d-flex justify-content-between align-items-center text-secondary"
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        style={{ cursor: 'pointer' }} // Ensure close button has pointer
                    >
                        Close <X size={18} />
                    </button>
                </div>
            </div>

            {/* Custom Cursor */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        className="position-absolute pe-none d-flex align-items-center justify-content-center rounded-circle text-white text-center"
                        style={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: '#1e2b58', // Dark Blue
                            zIndex: 9999,
                            top: 0,
                            left: 0,
                            pointerEvents: 'none'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            x: cursorPos.x - 50, // Center the cursor
                            y: cursorPos.y - 50,
                            scale: 1,
                            opacity: 1
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            mass: 0.1
                        }}
                    >
                        <div className="d-flex flex-column align-items-center">
                            <ArrowUpRight size={24} className="mb-1" />
                            <span className="small fw-bold tracking-widest" style={{ fontSize: '0.7rem' }}>EXPLORE</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
