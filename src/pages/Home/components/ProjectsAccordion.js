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
                        Enlace al sitio: <a
                            href="https://yuyiflores.com.ar"
                            target="_blank"
                            rel='noreferrer'>
                            https://yuyiflores.com.ar
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
                        Enlace al sitio: <a
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
                        Este ejemplo en desarrollo sirve para mostrar el código de una aplicación web fullstack.
                        Es una aplicación tipo red social simple, en donde el usuario puede registrarse,
                        iniciar sesión, crear su perfil, seguir y ser seguido por otros perfiles.
                    </p>
                    <div className='fs_stack'>
                        <div>
                            <p>Stack UI</p>
                            <ul>
                                <li>React JS</li>
                                <li>Vite</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div>
                            <p>Stack API</p>
                            <ul>
                                <li>Express</li>
                                <li>Node JS</li>
                                <li>Prisma ORM</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>
                    <img className='fs_img' src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661989883/portafolio/Captura_de_pantalla_8_ptiejs.png" alt="" />
                    <p>
                        Enlace al repositorio de la UI: <a
                            href="https://github.com/matias0303456/profiles_client"
                            target="_blank"
                            rel='noreferrer'>
                            https://github.com/matias0303456/profiles_client
                        </a>
                    </p>
                    <p>
                        Enlace al repositorio de la API: <a
                            href="https://github.com/matias0303456/profiles_api"
                            target="_blank"
                            rel='noreferrer'>
                            https://github.com/matias0303456/profiles_api
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
