import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "../Components/Experience/Experience";
import UIOverlay from "../Components/UIOverlay";

// Preloader Component
function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  // Position control using exact percentages for smooth sliding
  const [positionState, setPositionState] = useState({ left: "0%", x: "0%" });

  useEffect(() => {
    // Sequence: 0 -> 50 -> 100
    // Start at 0 (Left)
    setPositionState({ left: "0%", x: "0%" });

    const t1 = setTimeout(() => {
      setCount(50);
      setPositionState({ left: "50%", x: "-50%" });
    }, 800);

    const t2 = setTimeout(() => {
      setCount(100);
      setPositionState({ left: "100%", x: "-100%" });
    }, 1600);

    const t3 = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return createPortal(
    <motion.div
      className="position-fixed top-0 start-0 w-100 h-100 bg-light"
      style={{ zIndex: 99999 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="position-relative w-100 h-100" style={{ padding: '0 5vw 5vh 5vw' }}>
        {/* Sliding Container */}
        <motion.div
          className="position-absolute bottom-0"
          initial={{ left: "0%", x: "0%" }}
          animate={{ left: positionState.left, x: positionState.x }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ paddingBottom: '5vh' }}
        >
          <div className="overflow-hidden">
            <motion.div
              key={count}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="font-serif fst-italic text-dark display-1 fw-normal"
              style={{ fontSize: '15rem', lineHeight: 1, color: '#111827', whiteSpace: 'nowrap' }}
            >
              {count}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>,
    document.body
  );
}

export default function Landingpage() {
  const location = useLocation();
  const shouldSkipIntro = location.state?.returnTo === 'city';

  const [loading, setLoading] = useState(!shouldSkipIntro);
  const [viewState, setViewState] = useState(shouldSkipIntro ? 'city' : 'intro'); // 'intro' | 'village' | 'city' | 'detail'
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedBuildingPosition, setSelectedBuildingPosition] = useState(null);

  const handleBuildingSelect = (id, position) => {
    setSelectedBuilding(id);
    setSelectedBuildingPosition(position);
    setViewState('detail');
  };

  const handleCloseDetail = () => {
    setViewState('city');
    setSelectedBuilding(null);
    setSelectedBuildingPosition(null);
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, overflow: 'hidden', zIndex: 0 }}>

      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* 3D Scene Layer */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <Experience
          viewState={viewState}
          selectedBuildingPosition={selectedBuildingPosition}
          onBuildingSelect={handleBuildingSelect}
        />
      </div>

      {/* UI Layer */}
      {!loading && (
        <UIOverlay
          viewState={viewState}
          setViewState={setViewState}
          selectedBuilding={selectedBuilding}
          onCloseDetail={handleCloseDetail}
        />
      )}

    </div>
  );
}
