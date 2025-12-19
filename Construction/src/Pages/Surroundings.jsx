import React from 'react';
import { motion } from 'framer-motion';

const Surroundings = () => {
    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh', backgroundColor: '#f6f3ee' }} className="container pb-5">
            <motion.h1
                className="display-2 font-serif text-dark mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Surroundings
            </motion.h1>
            <motion.p
                className="lead text-center text-secondary mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Explore the vibrant neighborhood around Belle Oaks.
            </motion.p>

            <motion.div
                className="row g-4 justify-content-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                {/* Placeholders for surroundings content */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="col-md-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-img-top bg-secondary bg-opacity-10" style={{ height: '250px' }}></div>
                            <div className="card-body">
                                <h5 className="card-title font-serif">Local Point of Interest {item}</h5>
                                <p className="card-text text-secondary small">Dining, shopping, and entertainment just steps away.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Surroundings;
