import React from "react";
import "./Gallery.css";
import img1 from '../assets/imgi_10_image.webp'
import img2 from '../assets/imgi_18_preview.webp'
import img3 from '../assets/imgi_14_image.webp'
import gallery1 from '../assets/imgi_29_image.webp';
import gallery2 from '../assets/imgi_30_image.webp';
import gallery3 from '../assets/imgi_31_image.webp';
import gallery4 from '../assets/imgi_32_image.webp';
import gallery5 from '../assets/imgi_33_image.webp';
import gallery6 from '../assets/imgi_34_image.jpg';
import gallery7 from '../assets/imgi_35_image.jpg';
import gallery8 from '../assets/imgi_36_image.webp';



const Gallery = () => {
    return (
        <>
            <section className="moments-section">
                <div className="moments-container">
                    <h1 className="moments-title">
                        Real <span>moments</span>, real spaces —
                        <br />
                        just as they are.
                    </h1>

                    <div className="carousel-section-wrapper">
                        {/* MARQUEE BACKGROUND */}
                        <div className="marquee-wrapper">
                            <div className="marquee-content">
                                <span>Inside • Inside • Inside • Inside • Inside • Inside • Inside • Inside • Inside • Inside • </span>
                                <span>Inside • Inside • Inside • Inside • Inside • Inside • Inside • Inside • Inside • Inside • </span>
                            </div>
                        </div>

                        {/* CAROUSEL CARD */}
                        <div className="image-wrapper">
                            <div
                                id="carouselExampleSlidesOnly"
                                className="carousel slide"
                                data-bs-ride="carousel"
                                data-bs-interval="1500"
                                data-bs-pause="false"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img1} className="carousel-img" alt="slide1" />
                                    </div>

                                    <div className="carousel-item">
                                        <img src={img2} className="carousel-img" alt="slide2" />
                                    </div>

                                    <div className="carousel-item">
                                        <img src={img3} className="carousel-img" alt="slide3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid p-0 bg-white">
                <div className="buttons">
                    <div className="areas">
                        <button className="btn1">Living Area</button>
                        <button>Architecture</button>
                        <button>Units</button>
                        <button>Surroundings</button>
                    </div>
                    <div className="gallery-grid">

                        {/* Row 1: Two Images Side-by-Side */}
                        <div className="double-col">
                            <div className="gallery-item">
                                <img src={gallery1} alt="Living Area" />
                            </div>
                            <div className="gallery-item">
                                <img src={gallery2} alt="Architecture" />
                            </div>
                        </div>

                        {/* Row 2: One Full Width Image */}
                        <div className="full-col">
                            <div className="gallery-item">
                                <img src={gallery3} alt="Units" />
                            </div>
                        </div>

                        {/* Row 3: Two Images Side-by-Side */}
                        <div className="double-col">
                            <div className="gallery-item">
                                <img src={gallery4} alt="Surroundings" />
                            </div>
                            <div className="gallery-item">
                                <img src={gallery5} alt="Community" />
                            </div>
                        </div>

                        {/* Row 4: One Full Width Image */}
                        <div className="full-col">
                            <div className="gallery-item">
                                <img src={gallery6} alt="Lifestyle" />
                            </div>
                        </div>

                        {/* Row 5: Two Images Side-by-Side */}
                        <div className="double-col">
                            <div className="gallery-item">
                                <img src={gallery7} alt="Amenities" />
                            </div>
                            <div className="gallery-item">
                                <img src={gallery8} alt="Interiors" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
