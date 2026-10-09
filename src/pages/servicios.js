import React from 'react';

const habilidadesTI = [
    {
        id: 1,
        tecnologia: "Godot Engine",
        categoria: "Game Development",
        descripcion: "Desarrollo de lógicas de juego, mecánicas interactivas y UI utilizando GDScrpit.",
        imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg"
    },
    {
        id: 2,
        tecnologia: "React & Next.js",
        categoria: "Frontend Web",
        descripcion: "Creación de aplicaciones SPA y sitios estáticos con renderizado optimizado y enrutamiento dinámico.",
        imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        id: 3,
        tecnologia: "Flutter",
        categoria: "Mobile Development",
        descripcion: "Diseño y programación de aplicaciones móviles multiplataforma nativas.",
        imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
    },
    {
        id: 4,
        tecnologia: "PostgreSQL & SQL Server",
        categoria: "Bases de Datos",
        descripcion: "Modelado relacional, consultas estructuradas y administración de bases de datos.",
        imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    }
]

const Servicios = () => {
    return (
        <div className="page-container">
            <h1>Servicios y Tecnologías</h1>
            <p style={{ color: '#666666', marginBottom: '30px' }}>Stack tecnológico y herramientas de desarrollo.</p>

            <div className="grid-servicios">
                {habilidadesTI.map((item) => (
                    <div key={item.id} className="card-servicio">
                        <img src={item.imagen} alt={item.tecnologia} className="servicio-img" />
                        <div className="servicio-info">
                            <span className="badge-categoria">{item.categoria}</span>
                            <h3>{item.tecnologia}</h3>
                            <p>{item.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Servicios;