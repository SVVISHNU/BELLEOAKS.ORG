import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar"; // <-- your hero page

export default function Preloader() {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let value = 0;

    const id = setInterval(() => {
      value++;

      let newPosition;
      if (value < 50) {
        setDisplayNumber(0);
        newPosition = (value / 50) * 40;
      } else if (value < 100) {
        setDisplayNumber(50);
        newPosition = 40 + ((value - 50) / 50) * 40;
      } else {
        setDisplayNumber(100);
        newPosition = 80;
      }

      setPosition(newPosition);

      if (value >= 100) {
        clearInterval(id);
        setTimeout(() => setFadeOut(true), 500);
        setTimeout(() => setLoading(false), 900);
      }
    }, 30);

    return () => clearInterval(id);
  }, []);

  const getTransformValue = () => {
    if (displayNumber === 0) return "0%";
    if (displayNumber === 50) return "40%";
    return "75%";
  };

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 bg-black z-50 transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="fixed bottom-0 left-0 w-full flex items-end justify-center overflow-hidden">
            <div
              className="absolute text-sky-400 font-black whitespace-nowrap leading-none"
              style={{
                fontSize: "clamp(80px, 20vw, 250px)",
                bottom: 0,
                left: `${position}%`,
                transform: `translateX(${getTransformValue()})`,
                transition: "transform 0.6s ease-out",
              }}
            >
              {displayNumber}
            </div>
          </div>
        </div>
      )}

      {/* AFTER PRELOADER → SHOW HERO PAGE */}
      {!loading && <Navbar />}
    </>
  );
}
