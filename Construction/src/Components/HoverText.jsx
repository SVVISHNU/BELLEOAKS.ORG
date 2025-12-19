import React from 'react';
import { motion } from 'framer-motion';

export default function HoverText({ text, textStyle = {}, hoverTextStyle = {} }) {
    // Split text into letters if we want letter-by-letter, 
    // but the request said "vertical rotation on letters".
    // A simple effective punchy animation is rotating the whole block or staggered letters.
    // Let's go with a staggered letter flip for that "premium" feel.

    const characters = text.split("");

    return (
        <div
            className="d-flex overflow-hidden position-relative"
            style={{ lineHeight: 1 }}
        >
            <motion.div
                initial="initial"
                whileHover="hovered"
                className="d-flex"
            >
                {characters.map((char, i) => (
                    <Letter key={i} char={char} index={i} />
                ))}
            </motion.div>
        </div>
    );
}

const Letter = ({ char, index }) => {
    return (
        <motion.div
            className="position-relative d-flex flex-column"
            variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
            }}
            transition={{
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1], // quartOut
                delay: index * 0.02
            }}
        >
            <span>{char === " " ? "\u00A0" : char}</span>
            <span className="position-absolute top-100 start-0">
                {char === " " ? "\u00A0" : char}
            </span>
        </motion.div>
    )
}
