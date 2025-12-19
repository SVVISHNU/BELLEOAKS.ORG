import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavigationLoader = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Skip loader on Home page ("/") because Landingpage has its own Preloader
        if (location.pathname === "/") {
            setIsLoading(false);
            return;
        }

        // Check if it's the initial load on the generic path, usually we might want to skip 
        // if the page component handles it, but for navigation links we want it.
        // For now, simpler is better: always trigger on location change.

        setIsLoading(true);
        setCount(0);

        // Fast counter animation (0 to 100 in ~800ms)
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Random increment for organic "loading" feel
                return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
            });
        }, 50);

        // Ensure it stays at 100 for a split second before hiding
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1200); // slightly longer than the counter to show "100"

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [location.pathname]); // Trigger on path change

    // Use createPortal to prevent z-index issues
    return createPortal(
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    className="navigation-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        backgroundColor: "#f6f3ee", // Cream/Off-white matching the theme
                        zIndex: 99999999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // Center horizontally
                        justifyContent: "center", // Center vertically
                        color: "#1e2a55", // Deep blue text
                        fontFamily: '"Georgia", serif',
                    }}
                >
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* Counter Number */}
                        <div style={{ fontSize: "6rem", fontStyle: "italic", fontWeight: "bold", lineHeight: 1 }}>
                            {count}
                            <span style={{ fontSize: "2rem", verticalAlign: "top", marginLeft: "5px" }}>%</span>
                        </div>

                        {/* Loading Text */}
                        <p style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "1rem",
                            color: "#555",
                            marginTop: "1rem",
                            letterSpacing: "1px"
                        }}>
                            Please wait, loading...
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default NavigationLoader;
