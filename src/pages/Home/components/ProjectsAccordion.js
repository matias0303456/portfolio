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
                            href="https://vps-3895181-x.dattaweb.com/profiles/"
                            target="_blank"
                            rel='noreferrer'>
                            https://vps-3895181-x.dattaweb.com/profiles/
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
                            href="https://vps-3895181-x.dattaweb.com/asgardiana/"
                            target="_blank"
                            rel='noreferrer'>
                            https://vps-3895181-x.dattaweb.com/asgardiana/
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>{t('aitasks.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('aitasks.description')}
                    </p>
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1710780313/Captura_de_Pantalla_2024-03-18_a_la_s_13.43.49_r6tkv5.png' alt='' />
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1710780313/Captura_de_Pantalla_2024-03-18_a_la_s_13.44.14_qjhkns.png' alt='' />
                    <p className='text-start fs_links'>
                        {t('general.link')}: <a
                            href="https://lesdarussoftware.github.io/ai_tasks/"
                            target="_blank"
                            rel='noreferrer'>
                            https://lesdarussoftware.github.io/ai_tasks/
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>{t('noavisos.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('noavisos.description')}
                    </p>
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1710781661/Captura_de_Pantalla_2024-03-18_a_la_s_14.06.45_m5zg1e.png' alt='' />
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1710781661/Captura_de_Pantalla_2024-03-18_a_la_s_14.07.07_jmidqh.png' alt='' />
                    <p className='text-start fs_links'>
                        {t('general.link')}: <a
                            href="https://vps-3895181-x.dattaweb.com/noavisos/"
                            target="_blank"
                            rel='noreferrer'>
                            https://vps-3895181-x.dattaweb.com/noavisos/
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>{t('lesdaflow.title')}</Accordion.Header>
                <Accordion.Body>
                    <p>
                        {t('lesdaflow.description')}
                    </p>
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1710781745/Captura_de_Pantalla_2024-03-18_a_la_s_14.07.47_ptd34u.png' alt='' />
                    <img className='fs_img' src='https://res.cloudinary.com/dna8yz36g/image/upload/v1710781745/Captura_de_Pantalla_2024-03-18_a_la_s_14.08.16_pdnohi.png' alt='' />
                    <p className='text-start fs_links'>
                        {t('general.link')}: <a
                            href="https://vps-3895181-x.dattaweb.com/veroshop/"
                            target="_blank"
                            rel='noreferrer'>
                            https://vps-3895181-x.dattaweb.com/veroshop/
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
