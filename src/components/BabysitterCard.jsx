import React from 'react';

const BabysitterCard = ({ sitter }) => {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={sitter.photoUrl} alt={sitter.name} className="card-image" />
                <span className="card-price">${sitter.hourlyRate}/hr</span>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{sitter.name}</h3>
                    <div className="card-rating">
                        <span className="star">★</span>
                        <span className="rating-value">{sitter.rating}</span>
                        <span className="review-count">({sitter.reviews})</span>
                    </div>
                </div>
                <p className="card-location">📍 {sitter.location}</p>
                <p className="card-experience">🎓 {sitter.experience} de experiencia</p>
                <p className="card-description">{sitter.description}</p>
                <button className="btn btn-card">Ver Perfil</button>
            </div>
        </div>
    );
};

export default BabysitterCard;
