import React, { useState } from 'react';

function Banners() {


    return (
        <>
            <div className='contenedorBannerUno'>
                <div className='bannersTextoUno'>
                    <div className='primeraBannerUno'>
                        Speedy TV
                    </div>
                    <div className='segundaBannerUno'>
                        Nuestro nuevo servicio de TV
                    </div>
                    <div className='terceraBannerUno'>
                        Mayor variedad para todos
                    </div>
                </div>
                <div className='bannersButtonUno'>
                    <a className='botonUno'>Conoce más</a>
                </div>
            </div>
            <div className='contenedorBannerDos'>
                <div className='contenedorBannerDosIzquierda'>
                    <div className='primeraBannerDosIzquierda'>
                        <img src='./img/Banners/Velocidad.png' />
                        Test de velocidad
                    </div>
                    <div className='segundaBannerDosIzquierda'>
                        Conoce qué tan rápida es tu navegación
                    </div>
                    <div className='segundaBannerDosIzquierda'>
                        a través de tu computador o móvil.
                    </div>
                    <div className='bannersButtonDosIzquierda'>
                        <a className='botonUno'>Ir al SpeedTest</a>
                    </div>
                </div>
                <div className='contenedorBannerDosDerecha'>
                    <div className='primeraBannerDosDerecha'>
                        <img src='./img/Banners/dialogo.png' />
                        ¿Eres cliente Speedy Hogar?
                    </div>
                    <div className='segundaBannerDosDerecha'>
                        Aquí te guiaremos y resolveremos tus dudas
                    </div>
                    <div className='segundaBannerDosDerecha'>
                        para entregarte el mejor servicio.
                    </div>
                    <div className='bannersButtonDosDerecha'>
                        <a className='botonUno'>Ver Opciones de Ayuda</a>
                    </div>
                </div>
            </div>
            <div className='contenedorBannerTres'>
                <div className='bannersTextoUno'>
                    <div className='primeraBannerTres'>
                        Soporte
                    </div>
                    <div className='segundaBannerTres'>
                        Nuestro equipo de soporte técnico está aquí para 
                    </div>
                    <div className='terceraBannerTres'>
                        ayudarte a navegar en un mundo conectado.
                    </div>
                    <div className='bannersButtonTresDerecha'>
                        <a className='botonUno'>Contactanos</a>
                    </div>
                </div>
            </div>
            <div className='ultimoContenedor'>
                <div className='ultimoTexto'>
                    <div className='ultimoTitulos'>
                        <img src='./img/Banners/final1.png' />
                        ¿Qué es Internet Hogar Fibra WiFi Total?
                    </div>
                    <div className='ultimoRespuestas'>
                        Internet WiFi Total es la nueva experiencia que Speedy y su servicio de Fibra Óptica tiene para ti. Entregamos velocidad y una mejor experiencia de internet para tu hogar.
                    </div>
                    <div className='ultimoTitulos'>
                        <img src='./img/Banners/final2.png' />
                        ¿En qué consiste la experiencia de Internet Hogar Fibra WiFi Total?
                    </div>
                    <div className='ultimoRespuestas'>
                        Nuestro internet hogar llega a ti a través de la tecnología Fibra Óptica. Esto asegura calidad y una mejor experiencia de conectividad con nuestros equipos, Router principal y/o Extensores WiFi.
                    </div>
                    <div className='ultimoTitulos'>
                        <img src='./img/Banners/final3.png' />
                        ¿Qué es Router Principal?
                    </div>
                    <div className='ultimoRespuestas'>
                        El router principal es el equipo que permite emitir una señal WiFi. Cuenta con una tecnología Dual Band (2.4 GHz y 5 GHz) que te permitirá alcanzar altas velocidades y te brindará una gran experiencia de internet para tu hogar.
                    </div>
                </div>
                <div className='ultimoImg'>
                    <img src='./img/Banners/imgUltima.png' />
                </div>
            </div>
        </>
    );
}

export default Banners;
