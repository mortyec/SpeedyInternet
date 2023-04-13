import React, { useState } from "react";

const Formulario = () => {
    const [nombres, setNombres] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [sector, setSector] = useState("");
    const [callePrincipal, setCallePrincipal] = useState("");
    const [calleSecundaria, setCalleSecundaria] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar la información del formulario
    };

    return (
        <>
        <br/>
        <br/>
        <div className="ContenedorForm">
            <div className="Columna1">
            </div>
            <div className="Columna2"></div>
            <div className="ContenedorFormulario">
                <div className="texto arriba">
                    ¿Llega Fibra WIFI Total a tu casa?
                </div>
                <div className="texto abajo">
                    Ingresa tu dirección para saber si este servicio está disponible
                </div>
                <br />
                <form onSubmit={handleSubmit} className="formulario">
                    <label className="etiqueta">
                        Nombres:
                        <input
                            type="text"
                            value={nombres}
                            onChange={(e) => setNombres(e.target.value)}
                            className="entrada"
                        />
                    </label>
                    <label className="etiqueta">
                        Teléfono:
                        <input
                            type="text"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            className="entrada"
                        />
                    </label>
                    <label className="etiqueta">
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="entrada"
                        />
                    </label>
                    <label className="etiqueta">
                        Ciudad:
                        <select
                            value={ciudad}
                            onChange={(e) => setCiudad(e.target.value)}
                            className="entrada"
                        >
                            <option value="">Selecciona una ciudad</option>
                            <option value="Ambato">Ambato</option>
                            <option value="Latacunga">Latacunga</option>
                            <option value="Puyo">Puyo</option>
                            <option value="Riobamba">Riobamba</option>
                        </select>
                    </label>
                    <label className="etiqueta">
                        Sector:
                        <input
                            type="text"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className="entrada"
                        />
                    </label>
                    <label className="etiqueta">
                        Calle Principal:
                        <input
                            type="text"
                            value={callePrincipal}
                            onChange={(e) => setCallePrincipal(e.target.value)}
                            className="entrada"
                        />
                    </label>
                    <label className="etiqueta">
                        Calle Secundaria:
                        <input
                            type="text"
                            value={calleSecundaria}
                            onChange={(e) => setCalleSecundaria(e.target.value)}
                            className="entrada"
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
        <br/>
        <br/>
        </>
    );
};

export default Formulario;
