import React from 'react';
import FormularioContacto from '../components/formularioContacto';

const Contacto = () => {
    return (
        <div className="page-container">
            <h1>Página de Contacto</h1>

            <p style={{ marginTop: '10px', color: '#666666' }}>Completa el siguiente formulario: </p>
        
            <FormularioContacto/>
        </div>
    );
}

export default Contacto;