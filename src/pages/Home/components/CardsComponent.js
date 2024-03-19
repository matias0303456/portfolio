import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next';

export default function CardsComponent() {

    const [t] = useTranslation('global')

    return (
        <div className='cardsContainer'>
            <Card className='card' onClick={() => window.open('https://matias0303456.github.io/sitio-yuyi', '_blank')}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661985911/portafolio/Captura_de_pantalla_5_t3moq3.png" />
                <Card.Body>
                    <Card.Title>{t('yuyiflores.title')}</Card.Title>
                    <Card.Text>
                        {t('yuyiflores.description')}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={() => window.open('https://www.usound.co/es', '_blank')}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dna8yz36g/image/upload/v1661987028/portafolio/ezgif-4-7dd30cac16_qatnwo.gif" />
                <Card.Body>
                    <Card.Title>{t('usound.title')}</Card.Title>
                    <Card.Text>
                        {t('usound.description')}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={() => window.open('https://vps-3895181-x.dattaweb.com/profiles/', '_blank')}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dna8yz36g/image/upload/v1680212849/Captura_de_pantalla_36_gtgrus.png" />
                <Card.Body>
                    <Card.Title>{t('profiles.title')}</Card.Title>
                    <Card.Text>
                        {t('profiles.description')}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={() => window.open('https://vps-3895181-x.dattaweb.com/asgardiana/', '_blank')}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dna8yz36g/image/upload/v1701128278/Captura_de_pantalla_3_idgkmn.png" />
                <Card.Body>
                    <Card.Title>{t('asgardiana.title')}</Card.Title>
                    <Card.Text>
                        {t('asgardiana.description')}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={() => window.open('https://lesdarussoftware.github.io/ai_tasks/', '_blank')}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dna8yz36g/image/upload/v1710780313/Captura_de_Pantalla_2024-03-18_a_la_s_13.43.49_r6tkv5.png" />
                <Card.Body>
                    <Card.Title>{t('aitasks.title')}</Card.Title>
                    <Card.Text>
                        {t('aitasks.description')}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={() => window.open('https://vps-3895181-x.dattaweb.com/noavisos/', '_blank')}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dna8yz36g/image/upload/v1710781661/Captura_de_Pantalla_2024-03-18_a_la_s_14.06.45_m5zg1e.png" />
                <Card.Body>
                    <Card.Title>{t('noavisos.title')}</Card.Title>
                    <Card.Text>
                        {t('noavisos.description')}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={() => window.open('https://vps-3895181-x.dattaweb.com/veroshop/', '_blank')}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dna8yz36g/image/upload/v1710781745/Captura_de_Pantalla_2024-03-18_a_la_s_14.07.47_ptd34u.png" />
                <Card.Body>
                    <Card.Title>{t('lesdaflow.title')}</Card.Title>
                    <Card.Text>
                        {t('lesdaflow.description')}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}