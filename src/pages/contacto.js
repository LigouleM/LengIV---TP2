import React from 'react';
import FormularioContacto from '../components/formularioContacto';

const Contacto = () => {
    return (
        <div className="page-container contacto-page">
            <h1>Página de Contacto</h1>

            <p style={{ marginTop: '10px', color: '#666666' }}>Comunícate mediante el formulario o encuéntrenos en nuestra ubicación.</p>

            <div className="contacto-layout">
                <div className="mapa-container">
                    <iframe
                        title="Mapa de Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27591.95667654481!2d-65.43182662568357!3d-24.741724399999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc14f9aaaaaab%3A0x69dac60239564277!2sUniversidad%20Cat%C3%B3lica%20de%20Salta!5e1!3m2!1ses!2sar!4v1791554986812!5m2!1ses!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="formulario-wrapper">
                    <FormularioContacto/>
                </div>
            </div>
        </div>
    );
};

export default Contacto;