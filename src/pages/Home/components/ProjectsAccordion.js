import Accordion from 'react-bootstrap/Accordion';

import RickAndMortyApi from './RickAndMortyApi';

export default function ProjectsAccordion() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Ejemplo de comunicación con un servidor</Accordion.Header>
                <Accordion.Body>
                    <p>
                        Esta es una demo de consumo de APIs con JavaScript. En este caso se consume la
                        API de Rick and Morty y se guarda el array de la respuesta. Si se hace click,
                        se abre un Modal de Bootsrap y se muestran los datos del personaje filtrado
                        que vienen del backend, el cual  es un objeto del array.
                    </p>
                    <RickAndMortyApi />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Sitio web estático simple</Accordion.Header>
                <Accordion.Body>
                    <p>
                        Este es un sitio web estático desarrollado para una artista plástica de mi ciudad.
                        Si bien su funcionalidad se va ampliando de forma iterativa, actualmente
                        cuenta con tres páginas, una de las cuales es un carrusel que muestra
                        sus obras. Desarrollado con React JS.
                    </p>
                    <div className='sitio_yuyi_img_container'>
                        <img src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661985911/portafolio/Captura_de_pantalla_5_t3moq3.png" alt="" />
                        <img src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661985911/portafolio/Captura_de_pantalla_4_wfz0pq.png" alt="" />
                        <img src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661985911/portafolio/Captura_de_pantalla_6_et3ybu.png" alt="" />
                    </div>
                    <p>
                        Enlace: <a
                            href="https://matias0303456.github.io/sitio-yuyi"
                            target="_blank"
                            rel='noreferrer'>
                            https://matias0303456.github.io/sitio-yuyi
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Sitio web empresarial</Accordion.Header>
                <Accordion.Body>
                    <p>
                        Este sitio web fue desarrollado para uSound Audiómetro, una startup argentina
                        especializada en tecnología médica para profesionales de la salud auditiva.
                        Posee integraciones con herramientas no-code, como Typeform y Native Forms, y
                        con herramientas de Google como Analytics, Tag Manager y Optimize. Desarrollado
                        con React JS.
                    </p>
                    <img className='gif' src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661987028/portafolio/ezgif-4-7dd30cac16_qatnwo.gif" alt="" />
                    <p>
                        Enlace: <a
                            href="https://www.usound.co/es"
                            target="_blank"
                            rel='noreferrer'>
                            https://www.usound.co/es
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Aplicación web fullstack</Accordion.Header>
                <Accordion.Body>
                    <p>
                        Profiles App es una aplicación web tipo red social simple, en donde el usuario puede registrarse,
                        iniciar sesión, editar sus datos, cambiar su avatar, seguir y ser seguido por otros perfiles.
                        Es escalable para construir funcionalidades más complejas, como entradas, likes o
                        comentarios. Cuenta con capas de seguridad, como autenticación con JWT (Json Web Tokens) y
                        middlewares de validación de datos.
                    </p>
                    <div className='fs_stack'>
                        <div>
                            <p>Stack Frontend</p>
                            <ul>
                                <li>React JS</li>
                                <li>Vite</li>
                                <li>Tailwind</li>
                                <li>React Hook Form</li>
                                <li>Sweet Alert 2</li>
                                <li>React Toastify</li>
                            </ul>
                        </div>
                        <div>
                            <p>Stack Backend</p>
                            <ul>
                                <li>Express</li>
                                <li>Node JS</li>
                                <li>Jsonwebtoken</li>
                                <li>Express Validator</li>
                                <li>Prisma ORM</li>
                                <li>Postgre SQL</li>
                            </ul>
                        </div>
                    </div>
                    <img className='fs_img' src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661989883/portafolio/Captura_de_pantalla_8_ptiejs.png" alt="" />
                    <p className='text-start fs_links'>
                        Enlace: <a
                            href="https://matias0303456.github.io/profiles-app/"
                            target="_blank"
                            rel='noreferrer'>
                            https://matias0303456.github.io/profiles-app/
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
