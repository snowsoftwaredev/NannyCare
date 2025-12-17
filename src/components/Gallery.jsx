import React, { useState } from 'react';
import { galleryImages } from '../data';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const handleBackdropClick = (e) => {
        if (e.target.className === 'lightbox') {
            closeLightbox();
        }
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <h2>Galería</h2>
                    <p>Momentos especiales de nuestras cuidadoras con los niños</p>
                </div>
                <div className="gallery-grid">
                    {galleryImages.map((image) => (
                        <div 
                            key={image.id} 
                            className="gallery-item"
                            onClick={() => openLightbox(image)}
                        >
                            <img 
                                src={image.url} 
                                alt={image.alt}
                                className="gallery-image"
                            />
                            <div className="gallery-overlay">
                                <span className="gallery-icon">🔍</span>
                                <p className="gallery-description">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={handleBackdropClick}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        ✕
                    </button>
                    <div className="lightbox-content">
                        <img 
                            src={selectedImage.url} 
                            alt={selectedImage.alt}
                            className="lightbox-image"
                        />
                        <p className="lightbox-description">{selectedImage.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
