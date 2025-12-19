import React, { useState } from "react";
import "./Units.css";

const Units = () => {
    const [availability, setAvailability] = useState("available");

    return (
        <section className="units-page" style={{
            marginTop: "140px" // Increased margin to prevent navbar overlap
        }}>
            {/* HEADER */}
            <div className="units-header pb-5">
                <h1>4 Units</h1>

                <div className="header-filters">
                    <button className="pill-btn dark">
                        🏢 BIRCH <span className="arrow">⌄</span>
                    </button>
                    <button className="pill-btn dark">
                        🗂 Floor 1 <span className="arrow">⌄</span>
                    </button>
                </div>
            </div>

            <hr />

            {/* FILTER BAR */}
            <div className="filter-bar">
                {/* Price Range */}
                <div className="filter-group">
                    <p>Enter Price Range</p>
                    <div className="price-inputs">
                        <input type="text" placeholder="From: $" />
                        <span>-</span>
                        <input type="text" placeholder="To: $4,902" />
                    </div>
                </div>

                {/* Availability */}
                <div className="filter-group">
                    <p>Availability</p>
                    <div className="availability-buttons">
                        <button
                            className={availability === "available" ? "active" : ""}
                            onClick={() => setAvailability("available")}
                        >
                            <span className="dot green"></span> Available
                        </button>

                        <button
                            className={availability === "reserved" ? "active" : ""}
                            onClick={() => setAvailability("reserved")}
                        >
                            <span className="dot red"></span> Reserved
                        </button>
                    </div>
                </div>

                {/* All Filters */}
                <button className="all-filters-btn">
                    All Filters ⚙
                </button>
            </div>

            <hr />

            {/* UNITS GRID */}
            <div className="units-grid">
                {[
                    { no: "NO. 1102", sqft: "1317 SQFT", price: "$ 3,753.45" },
                    { no: "NO. 1100", sqft: "839 SQFT", price: "$ 2,980.00" },
                    { no: "NO. 1104", sqft: "960 SQFT", price: "$ 3,120.00" },
                ].map((unit, index) => (
                    <div className="unit-card" key={index}>

                        {/* HEADER */}
                        <div className="card-header">
                            <span>{unit.no}</span>
                            <span className="building">BIRCH</span>
                        </div>

                        <hr />

                        {/* FLOOR PLAN */}
                        <div className="floorplan-placeholder">
                            Floor Plan
                        </div>

                        {/* FOOTER */}
                        <div className="card-footer">
                            <div>
                                <p className="sqft">{unit.sqft}</p>
                                <h2 className="price">{unit.price}</h2>
                            </div>

                            {/* RIGHT SIDE BUTTON */}
                            <button className="arrow-btn">↗</button>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Units;
