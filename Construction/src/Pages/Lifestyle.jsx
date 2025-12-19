import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfinityCarousel from '../Components/InfinityCarousel';
import './Lifestyle.css';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Lifestyle = () => {
    // Dining & Shopping carousel items - Updated with better images
    const diningItems = [
        {
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop',
            title: 'Artisan Coffee',
            description: 'Start your day at our curated café'
        },
        {
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
            title: 'Fine Dining',
            description: 'Michelin-inspired restaurants nearby'
        },
        {
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
            title: 'Boutique Shopping',
            description: 'Curated fashion and lifestyle stores'
        },
        {
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop',
            title: 'Fresh Markets',
            description: 'Farm-to-table produce daily'
        },
        {
            image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2074&auto=format&fit=crop',
            title: 'Bakery & Patisserie',
            description: 'Fresh pastries every morning'
        },
        {
            image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2074&auto=format&fit=crop',
            title: 'Wine & Spirits',
            description: 'Curated selection of fine wines'
        }
    ];

    // Recreation & Wellness carousel items - Updated
    const recreationItems = [
        {
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
            title: 'Modern Gym',
            description: '24/7 state-of-the-art fitness center'
        },
        {
            image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
            title: 'Cardio Studio',
            description: 'Premium equipment and trainers'
        },
        {
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
            title: 'Yoga & Meditation',
            description: 'Peaceful spaces for mindfulness'
        },
        {
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
            title: 'Spa Retreat',
            description: 'Luxury wellness treatments'
        },
        {
            image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop',
            title: 'Resort Pool',
            description: 'Year-round heated swimming'
        },
        {
            image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2039&auto=format&fit=crop',
            title: 'Tennis Courts',
            description: 'Professional-grade facilities'
        }
    ];

    // Community & Events carousel items - Updated
    const communityItems = [
        {
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
            title: 'Social Events',
            description: 'Monthly community celebrations'
        },
        {
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
            title: 'Live Entertainment',
            description: 'Concerts and performances'
        },
        {
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop',
            title: 'Library Lounge',
            description: 'Quiet reading and study spaces'
        },
        {
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
            title: 'Co-Working Hub',
            description: 'Professional workspace amenities'
        },
        {
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
            title: 'Art Gallery',
            description: 'Rotating local artist exhibitions'
        },
        {
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
            title: 'Kids Play Area',
            description: 'Safe and fun family spaces'
        }
    ];

    const renderCarouselItem = (item) => (
        <div className="carousel-card">
            <img src={item.image} alt={item.title} />
            <div className="carousel-card-overlay">
                <h3 className="carousel-card-title">{item.title}</h3>
                <p className="carousel-card-description">{item.description}</p>
            </div>
        </div>
    );

    return (
        <div className="lifestyle-page">
            {/* Hero Section */}
            <section className="lifestyle-hero">
                <div className="container">
                    <div className="lifestyle-hero-content">
                        <span className="lifestyle-badge">✨ Belle Oaks Luxury Lifestyle</span>
                        <h1 className="lifestyle-title">
                            Live the Life You've <span className="text-italic">Always Imagined</span>
                        </h1>
                        <p className="lifestyle-subtitle">
                            At Belle Oaks, your daily life lives closer to home – because everything you need is already here. Experience a lifestyle where convenience meets luxury.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dining & Shopping Section */}
            <section className="lifestyle-section dining-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">🍽️ Culinary Excellence</span>
                        <h2 className="section-title">Dining & Shopping</h2>
                        <p className="section-description">
                            From morning coffee to evening dining, discover a world of culinary delights and boutique retail experiences right at your doorstep
                        </p>
                    </div>
                </div>
                <InfinityCarousel
                    items={diningItems.map(renderCarouselItem)}
                    speed={40}
                    direction="left"
                />
            </section>

            {/* Lifestyle Philosophy Section */}
            <section className="lifestyle-philosophy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h2 className="philosophy-title">
                                Forget the <span className="text-italic">commute</span>. Forget the checklist. Forget "after work <span className="text-italic">errands</span>"
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="philosophy-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
                                    alt="Community Lifestyle"
                                    className="philosophy-image"
                                />
                            </div>
                            <p className="philosophy-description">
                                This isn't just where you live. It's how you live. Hip, modern, and effortlessly connected. Discover the lifestyle that makes you want to move – even if you weren't planning to. Because the vibe is effortless and the lifestyle? Unmatched.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recreation & Wellness Section */}
            <section className="lifestyle-section wellness-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">💪 Health & Wellness</span>
                        <h2 className="section-title">Recreation & Wellness</h2>
                        <p className="section-description">
                            Elevate your well-being with premium fitness facilities, spa treatments, and relaxation spaces designed for your ultimate comfort
                        </p>
                    </div>
                </div>
                <InfinityCarousel
                    items={recreationItems.map(renderCarouselItem)}
                    speed={45}
                    direction="right"
                />
            </section>

            {/* Community & Events Section */}
            <section className="lifestyle-section community-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">🎭 Community Life</span>
                        <h2 className="section-title">Community & Events</h2>
                        <p className="section-description">
                            Connect with neighbors and enjoy vibrant cultural experiences in a thriving community atmosphere
                        </p>
                    </div>
                </div>
                <InfinityCarousel
                    items={communityItems.map(renderCarouselItem)}
                    speed={35}
                    direction="left"
                />
            </section>

            {/* Horizontal Scroll Section */}
            <HorizontalScroll />

            {/* Nearby Amenities Section */}
            <NearbyAmenities />

            {/* Next Chapter CTA Section */}
            <NextChapterCTA />
        </div>
    );
};

// Horizontal Scroll Component with GSAP
const HorizontalScroll = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const sections = gsap.utils.toArray(".lifestyle-slide");

            // Set container width dynamically
            gsap.set(container, { width: `${sections.length * 100}vw` });

            const scrollTween = gsap.to(container, {
                xPercent: -100 * (sections.length - 1) / sections.length,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    end: "+=3000",
                }
            });

            // BACKGROUND COLOR CHANGING
            sections.forEach((section) => {
                ScrollTrigger.create({
                    trigger: section,
                    containerAnimation: scrollTween,
                    start: "left center",
                    end: "right center",
                    onEnter: () => document.body.style.backgroundColor = section.dataset.bg,
                    onEnterBack: () => document.body.style.backgroundColor = section.dataset.bg,
                });
            });

            // Slide 1: Walkable Community - Image Scale & Fade
            gsap.fromTo(".slide-1-img",
                { scale: 0.8, opacity: 0.5 },
                {
                    scale: 1.1,
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".slide-1",
                        containerAnimation: scrollTween,
                        start: "left right",
                        end: "right left",
                        scrub: true
                    }
                }
            );

            // Slide 2: Nature - Image Parallax
            gsap.fromTo(".slide-2-img",
                { x: -50, scale: 0.9 },
                {
                    x: 50,
                    scale: 1.1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".slide-2",
                        containerAnimation: scrollTween,
                        start: "left right",
                        end: "right left",
                        scrub: true
                    }
                }
            );

            // Slide 3: Everything You Need - Image Float
            gsap.to(".slide-3-img", {
                y: -30,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

            // Text fade-in animations for all slides
            gsap.utils.toArray(".slide-text").forEach((text, i) => {
                gsap.fromTo(text,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: text,
                            containerAnimation: scrollTween,
                            start: "left 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const slideStyle = {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 8vw",
        textAlign: "left",
        flexShrink: 0,
        position: 'relative'
    };

    const textContainerStyle = {
        zIndex: 2,
        maxWidth: "45%",
        color: '#1a1a2e'
    };

    const imgStyle = {
        maxWidth: "45%",
        height: "60vh",
        objectFit: "cover",
        borderRadius: "1rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        willChange: "transform"
    };

    return (
        <section id="horizontal-lifestyle" ref={sectionRef} style={{ overflow: 'hidden' }}>
            <div ref={containerRef} style={{ display: 'flex', height: '100%', width: '100%' }}>

                {/* Slide 1: Walkable Community */}
                <div className="lifestyle-slide slide-1" data-bg="#f5f5f0" style={slideStyle}>
                    <img
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
                        alt="Walkable Community"
                        className="slide-1-img"
                        style={imgStyle}
                    />
                    <div style={textContainerStyle} className="slide-text">
                        <h1 style={{ fontSize: '4vw', lineHeight: 1.2, marginBottom: '20px', fontWeight: 700 }}>
                            A Truly <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Walkable</span> Community
                        </h1>
                        <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '1.5rem' }}>
                            Ditch the car. Keep the rhythm.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                            Belle Oaks was built for moving forward – on your own two feet. Tree-lined sidewalks carry you from espresso to errands, from brunch to a glass of wine at sunset.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8, marginTop: '1rem' }}>
                            Every step takes you somewhere you actually want to go. It's a neighborhood that moves with you.
                        </p>
                    </div>
                </div>

                {/* Slide 2: Surrounded by Nature */}
                <div className="lifestyle-slide slide-2" data-bg="#e8f5e9" style={slideStyle}>
                    <div style={textContainerStyle} className="slide-text">
                        <h1 style={{ fontSize: '4vw', lineHeight: 1.2, marginBottom: '20px', fontWeight: 700 }}>
                            Surrounded by <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Nature</span>
                        </h1>
                        <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '1.5rem' }}>
                            Breathe. Stroll. Disconnect to reconnect.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                            Every path at Belle Oaks leads to something green. Wander quiet trails, linger in leafy gardens, or just pause beneath the trees.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8, marginTop: '1rem' }}>
                            Find stillness by the Turtle Pond, where time slows and the water mirrors the sky.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8, marginTop: '1rem' }}>
                            From shady corners to sunny clearings, nature's woven into the rhythm of your day.
                        </p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
                        alt="Nature"
                        className="slide-2-img"
                        style={imgStyle}
                    />
                </div>

                {/* Slide 3: Everything You Need */}
                <div className="lifestyle-slide slide-3" data-bg="#fff8e1" style={slideStyle}>
                    <img
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
                        alt="Everything You Need"
                        className="slide-3-img"
                        style={imgStyle}
                    />
                    <div style={textContainerStyle} className="slide-text">
                        <h1 style={{ fontSize: '4vw', lineHeight: 1.2, marginBottom: '20px', fontWeight: 700 }}>
                            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Everything</span> You Need, <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Right Here</span>
                        </h1>
                        <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '1.5rem' }}>
                            Belle Oaks puts life's essentials right at your doorstep.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                            Friendly faces, small local businesses, and community spaces create a true sense of belonging. It's easy to connect, make friends, and feel at home.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

// Nearby Amenities Section Component
const NearbyAmenities = () => {
    const amenities = [
        'Meijer',
        'Starbucks',
        'Walgreens',
        'On-Site Restaurants',
        'JustStorage',
        'Firestone Auto Care',
        'Boutique Retail Spaces',
        'Dollar Bank'
    ];

    return (
        <section className="nearby-amenities-section">
            <div className="container">
                <p className="amenities-label">Nearby highlights include</p>
                <h2 className="amenities-title">
                    <span className="text-italic">Everything</span> You Need, Right Here
                </h2>

                <div className="amenities-grid">
                    {amenities.map((amenity, index) => (
                        <button key={index} className="amenity-pill">
                            {amenity}
                        </button>
                    ))}
                </div>

                <div className="amenities-cta">
                    <button className="see-all-button">
                        <span className="button-text">See all amenities</span>
                        <span className="button-text-hover">See all amenities</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

// Next Chapter CTA Section Component
const NextChapterCTA = () => {
    return (
        <section className="next-chapter-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <h2 className="chapter-title">
                            <span className="text-italic">Ready</span> to walk into your next <span className="text-italic">chapter</span> ?
                        </h2>
                        <p className="chapter-description">
                            Here, convenience meets calm. Whether you're walking home from dinner, enjoying the gardens, or grabbing your morning espresso, Belle Oaks gives you time — and space — to enjoy the life you've built.
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <div className="cta-cards-grid">
                            {/* Card 1: Explore 3D Map */}
                            <div className="cta-card">
                                <div className="cta-card-image">
                                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="3D Map" />
                                </div>
                                <div className="cta-card-content">
                                    <h3 className="cta-card-title">
                                        Explore the <span className="text-italic">3D map</span>
                                    </h3>
                                    <button className="cta-card-button">
                                        <span className="arrow-icon">↗</span>
                                    </button>
                                </div>
                            </div>

                            {/* Card 2: View Luxury Units */}
                            <div className="cta-card">
                                <div className="cta-card-image">
                                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" alt="Luxury Units" />
                                </div>
                                <div className="cta-card-content">
                                    <h3 className="cta-card-title">
                                        View luxury units <span className="text-italic">available</span>
                                    </h3>
                                    <button className="cta-card-button">
                                        <span className="arrow-icon">↗</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lifestyle;
