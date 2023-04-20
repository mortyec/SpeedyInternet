import React, { useState } from 'react';

function Blog() {


    return (
        <>
            <div className="texto arriba">
                Speedy Blog's
            </div>
            <br />
            <div className='contenedorBlog'>
                <div class="rowBlog">
                    <div class="example-1 card">
                        <div class="wrapper">
                            <div class="date">
                                <span class="day">20</span>
                                <span class="month">Abr</span>
                                <span class="year">2023</span>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">Speedy</span>
                                    <h1 class="title"><a href="#">Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.</a></h1>
                                    <p class="text">Speedy, la empresa proveedora de Internet líder en el centro del país, inauguró en febrero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="example-2 card">
                        <div class="wrapper">
                            <div class="header">
                                <div class="date">
                                    <span class="day">20 Abr 2023</span>
                                </div>
                            </div>
                            <div class="data">
                                <div class="content">
                                    <span class="author">Speedy</span>
                                    <h1 class="title"><a href="#">Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.</a></h1>
                                    <p class="text">Speedy, la empresa proveedora de Internet líder en el centro del país, inauguró en febrero.</p>
                                    <a href="#" class="button">Leer más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="example-1 card">
                        <div class="wrapper">
                            <div class="date">
                                <span class="day">20</span>
                                <span class="month">Abr</span>
                                <span class="year">2023</span>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">Speedy</span>
                                    <h1 class="title"><a href="#">Speedy inauguró su Centro de Monitoreo y Gestión de Atención al Cliente.</a></h1>
                                    <p class="text">Speedy, la empresa proveedora de Internet líder en el centro del país, inauguró en febrero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
