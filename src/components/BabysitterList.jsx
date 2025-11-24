import React from 'react';
import BabysitterCard from './BabysitterCard';
import { babysitters } from '../data';

const BabysitterList = () => {
    return (
        <section className="list-section">
            <div className="container">
                <div className="section-header">
                    <h2>Nuestras Cuidadoras Destacadas</h2>
                    <p>Profesionales verificadas listas para ayudarte</p>
                </div>
                <div className="grid">
                    {babysitters.map((sitter) => (
                        <BabysitterCard key={sitter.id} sitter={sitter} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BabysitterList;
