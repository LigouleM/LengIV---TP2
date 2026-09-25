import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormularioContacto = () => {
    const{
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        trigger,
        clearErrors
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    });

    const [enviado, setEnviado] = useState(false);

    const mensajeActual = watch('mensaje', '');

    const onSubmit = (data) => {
        const endpointCorreo = "https://formsubmit.co/ajax/272071e4e9a0b79485f5355eaedcc9e1";

        const endpointJson = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(endpointCorreo, endpointJson)
            .then(response => response.json())
                .then(data => {
                    setEnviado(true);
                    reset();
                })
            .catch(error => {
                console.log("Error al enviar el formulario", error);
            });
    };

    return (
        <div className="form-container">
            {
                enviado ? (
                    <div className="mensaje-exito">
                        <h3>¡Mensaje enviado con éxito!</h3>
                        <button className="btn-volver" onClick={
                            () => setEnviado(false)
                        }>Enviar otro mensaje</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
                        <div className="form-group">
                            <label htmlFor="nombreApellido">Nombre y Apellido:</label>
                            <input
                                type="text"
                                id="nombreApellido"
                                className={errors.nombreApellido ? 'input-error' : ''}
                                placeholder="Ej: Marcos Ligoule"
                                {...register('nombreApellido', {
                                    required: 'El campo es obligatorio',
                                    minLength: {
                                        value: 5,
                                        message: 'Por favor, ingrese su nombre completo'
                                    },
                                    pattern: {
                                        value: /^[a-zA-ZÀ-ÿ\s]+$/,
                                        message: 'El mensaje solo puede contener letras y espacios'
                                    },
                                    onChange: (e) => {
                                        if (e.target.value != '') {
                                            trigger('nombreApellido');
                                        } else {
                                            clearErrors('nombreApellido');
                                        }
                                    }
                                })}
                            />
                            {errors.nombreApellido && <span className="error-text">{errors.nombreApellido.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                className={errors.email ? 'input-error' : ''}
                                placeholder="ejemplo@correo.com"
                                {...register('email', {
                                    required: 'El campo es obligatorio',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Ingrese un formato de correo electrónico válido'
                                    },
                                    onChange: (e) => {
                                        if (e.target.value != '') {
                                            trigger('email');
                                        } else {
                                            clearErrors('email');
                                        }
                                    }
                                })}
                            />
                            {errors.email && <span className="error-text">{errors.email.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea
                                id="mensaje"
                                rows="5"
                                className={errors.mensaje ? 'input-error' : ''}
                                placeholder="Escriba su mensaje"
                                maxLength={300}
                                {...register('mensaje', {
                                    required: 'El mensaje no puede estar vacío',
                                })}
                            />
                            <div className="form-group-footer">
                                {errors.mensaje ? (
                                    <span className="error-text">{errors.mensaje.message}</span>
                                ) : (
                                    <span></span>
                                )}
                                <span className={`char-counter ${mensajeActual.length >= 300 ? 'limite' : ''}`}>
                                    {mensajeActual.length}/300
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">Enviar Mensaje</button>
                    </form>
                )
            }
        </div>
    );
};

export default FormularioContacto;