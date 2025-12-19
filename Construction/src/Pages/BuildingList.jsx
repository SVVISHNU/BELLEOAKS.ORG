import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import HoverText from '../Components/HoverText';
import './BuildingList.css';

const buildings = [
    { name: "BIRCH", year: "2026", locked: true },
    { name: "ASPEN", year: "2026", locked: true },
    { name: "OAK", year: "2026", locked: true },
    { name: "SYCAMORE", year: "2026", locked: true },
    { name: "MAPLE", year: "2026", locked: true },
    { name: "CYPRESS", year: "2026", locked: true },
    { name: "WALNUT", year: "2026", locked: true },
    { name: "BEECH", year: "2026", locked: true },
    { name: "PINE", year: "2027", locked: true },
    { name: "LAUREL", year: "2028", locked: true },
];

const BuildingList = () => {
    return (
        <div className="building-list-page">
            {/* HEADER */}
            <div className="list-header d-flex justify-content-between align-items-center mb-5">
                <Link to="/" className="back-link d-flex align-items-center gap-2 text-decoration-none text-dark">
                    <ArrowLeft size={18} />
                    <span className="small text-uppercase tracking-wide">Back</span>
                </Link>
                <div className="small text-uppercase tracking-wide text-secondary">Select Building</div>
            </div>

            {/* LIST */}
            <div className="list-container">
                {buildings.map((b, i) => (
                    <motion.div
                        key={i}
                        className="building-row d-flex align-items-center justify-content-between py-4 border-bottom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <div className="col-3">
                            <span className="font-serif fst-italic text-muted">Coming in {b.year}</span>
                        </div>
                        <div className="col-6 text-center">
                            <div className="building-name display-4 font-serif text-light-grey">
                                <HoverText text={b.name} />
                            </div>
                        </div>
                        <div className="col-3 text-end">
                            <div className="icon-circle-small mx-auto ms-auto bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <Lock size={16} className="text-secondary" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BuildingList;
