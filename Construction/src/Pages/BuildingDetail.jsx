import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BuildingDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedFloor, setSelectedFloor] = useState(1);

    // Mock data - in a real app this might come from a prop or context or API
    const buildingName = id || "Unknown";

    const floors = [4, 3, 2, 1];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            className="container-fluid bg-light min-vh-100 d-flex flex-column"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            style={{ paddingTop: '140px' }} // Increased padding to account for fixed navbar
        >
            {/* Header / Navigation */}
            <div className="container px-4 px-md-5 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <button
                        onClick={() => navigate('/', { state: { returnTo: 'city' } })}
                        className="btn btn-link text-dark text-decoration-none d-flex align-items-center gap-2 p-0"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-uppercase tracking-wider">Back</span>
                    </button>
                    <span className="text-muted text-uppercase small tracking-wider">Select Floor</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-4 px-md-5 flex-grow-1 d-flex align-items-center">
                <div className="row w-100 m-0">

                    {/* Left Column: Info - Order 2 on mobile, Order 1 on LG */}
                    <motion.div className="col-lg-5 mb-5 mb-lg-0 order-2 order-lg-1" variants={itemVariants}>
                        <div className="mb-4 mb-lg-5">
                            <h4 className="font-serif fst-italic text-muted mb-2">Building 3</h4>
                            <h1 className="display-1 font-serif text-primary mb-0" style={{ fontWeight: 400 }}>{buildingName}</h1>
                        </div>

                        <div className="mb-5">
                            <h6 className="text-uppercase text-secondary small mb-3 ls-2">Starts at $2,078.00</h6>
                            <div className="d-flex flex-wrap gap-x-4 gap-y-2">
                                {['Pool View', 'Mainstreet View', 'Corner View', 'Park Square View', 'Scenic Edge View', 'Pool View (Partial)'].map((view, i) => (
                                    <span key={i} className="d-flex align-items-center gap-2 small text-dark">
                                        <span className="rounded-circle bg-warning" style={{ width: '6px', height: '6px' }}></span>
                                        {view}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Middle Column: Floor Selector - Order 3 on mobile, Order 2 on LG */}
                    {/* Flex row on mobile (default), flex column on LG */}
                    <motion.div className="col-lg-2 d-flex flex-row flex-lg-column justify-content-center align-items-center gap-3 gap-lg-4 my-4 my-lg-0 order-3 order-lg-2" variants={itemVariants}>
                        {floors.map((floor) => (
                            <button
                                key={floor}
                                onClick={() => setSelectedFloor(floor)}
                                className={`btn rounded-circle d-flex align-items-center justify-content-center border-2 transition-all ${selectedFloor === floor ? 'border-primary text-primary' : 'border-secondary text-secondary'}`}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'transparent',
                                    borderStyle: 'solid'
                                }}
                            >
                                <span className="h5 mb-0">{floor}</span>
                            </button>
                        ))}
                    </motion.div>

                    {/* Right Column: Image - Order 1 on mobile, Order 3 on LG */}
                    <motion.div className="col-lg-5 mb-4 mb-lg-0 order-1 order-lg-3" variants={itemVariants}>
                        <div className="position-relative">
                            <img
                                src="https://placehold.co/600x800/png" // Placeholder for building image
                                alt={`${buildingName} Building`}
                                className="img-fluid rounded shadow-sm"
                                style={{ maxHeight: '600px', width: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default BuildingDetail;
