import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

import RickAndMortyApi from './RickAndMortyApi';

export default function ProjectsAccordion() {

    const [t] = useTranslation('global')

    return (
        <Accordion>
            {/* <Accordion.Item eventKey="0">
                <Accordion.Header>{t('rickMorty.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('rickMorty.description')}
                    </p>
                    <RickAndMortyApi />
                </Accordion.Body>
            </Accordion.Item> */}
            <Accordion.Item eventKey="1">
                <Accordion.Header>{t('yuyiflores.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('yuyiflores.description')}
                    </p>
                    <div className='sitio_yuyi_img_container'>
                        <img src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661985911/portafolio/Captura_de_pantalla_5_t3moq3.png" alt="" />
                        <img src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661985911/portafolio/Captura_de_pantalla_4_wfz0pq.png" alt="" />
                        <img src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661985911/portafolio/Captura_de_pantalla_6_et3ybu.png" alt="" />
                    </div>
                    <p>
                        {t('general.link')}: <a
                            href="https://matias0303456.github.io/sitio-yuyi"
                            target="_blank"
                            rel='noreferrer'>
                            https://matias0303456.github.io/sitio-yuyi
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>{t('usound.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('usound.description')}
                    </p>
                    <img className='gif' src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661987028/portafolio/ezgif-4-7dd30cac16_qatnwo.gif" alt="" />
                    <p>
                        {t('general.link')}: <a
                            href="https://www.usound.co/es"
                            target="_blank"
                            rel='noreferrer'>
                            https://www.usound.co/es
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>{t('profiles.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('profiles.description')}
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
                    <img className='fs_img' src="https://res.cloudinary.com/dna8yz36g/image/upload/v1680212849/Captura_de_pantalla_36_gtgrus.png" alt="" />
                    <img className='fs_img' src="https://res.cloudinary.com/dna8yz36g/image/upload/v1680212849/Captura_de_pantalla_38_hako6j.png" alt="" />
                    <p className='text-start fs_links'>
                        {t('general.link')}: <a
                            href="http://vxsct2618.avnam.net/profiles/"
                            target="_blank"
                            rel='noreferrer'>
                            http://vxsct2618.avnam.net/profiles/
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>{t('asgardiana.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('asgardiana.description')}
                    </p>
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1701128278/Captura_de_pantalla_4_ueetke.png' alt='' />
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1701128278/Captura_de_pantalla_3_idgkmn.png' alt='' />
                    <p className='text-start fs_links'>
                        {t('general.link')}: <a
                            href="http://vxsct2618.avnam.net/asgardiana/"
                            target="_blank"
                            rel='noreferrer'>
                            http://vxsct2618.avnam.net/asgardiana/
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
