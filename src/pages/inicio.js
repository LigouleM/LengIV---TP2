import React, { useState, useEffect } from 'react';

const Inicio = () => {
    const [juegos, setJuegos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('https://www.freetogame.com/api/games?sort-by=popularity')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    const maxOffset = Math.max(0, Math.min(100, data.length - 6));
                    const randomNum = Math.floor(Math.random() * (maxOffset + 1));
                    
                    setJuegos(data.slice(randomNum, randomNum + 6));
                }
                setCargando(false);
            })
            .catch(error => {
                console.error("Error al traer datos de la API: ", error);
                setCargando(false);
            });
    }, []);

    return (
        <div className="page-container">
            <h1>Juegos Destacados</h1>
            <p style={{ color: '#666666', marginBottom: '30px' }}>Datos obtenidos desde la API de FreeToGame</p>

            {cargando ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                    <p>Cargando información de videojuegos...</p>
                </div>
            ) : (
                <div className="grid-juegos">
                    {juegos.map((juego) => (
                        <div key={juego.id} className="card-juego">
                            <img src={juego.thumbnail} alt={juego.title} className="juego-img" />
                            <div className="juego-info">
                                <h3>{juego.title}</h3>
                                <p><strong>Lanzamiento: </strong>{juego.release_date}</p>
                                <p><strong>Plataforma: </strong>{juego.platform}</p>
                                <p className="juego-generos">{juego.genre}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Inicio;