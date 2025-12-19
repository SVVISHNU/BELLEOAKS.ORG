import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './InfinityCarousel.css';

const InfinityCarousel = ({ items, speed = 30, direction = 'left' }) => {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);

    // Duplicate items for seamless infinite scroll
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div
            className="infinity-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div
                ref={containerRef}
                className="infinity-carousel-track"
                animate={{
                    x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%']
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear"
                    }
                }}
                style={{
                    animationPlayState: isPaused ? 'paused' : 'running'
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={index} className="infinity-carousel-item">
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfinityCarousel;
