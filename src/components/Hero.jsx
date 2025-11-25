import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-badge">Confianza y Seguridad</span>
                <h1>El cuidado que tus hijos merecen</h1>
                <p>Conectamos a familias con las mejores cuidadoras verificadas de la ciudad. Tranquilidad para ti, diversión para ellos.</p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">Encontrar Cuidadora</button>
                    <button className="btn btn-secondary">Saber más</button>
                </div>
            </div>
            <div className="hero-image">
                <img
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1170&auto=format&fit=crop"
                    alt="Nanny caring for child"
                />
            </div>
        </section>
    );
};

export default Hero;
