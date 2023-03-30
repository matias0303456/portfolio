import { CgMail } from 'react-icons/cg'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

export default function Contact() {

    const [t] = useTranslation('global')

    return (
        <article id="contact" className="main_section_container">
            <h2>
                {t('titles.contact')}
            </h2>
            <div id='contact_container'>
                <p>
                    <CgMail className='media_logo' />
                    <span>
                        matiasramos261@gmail.com
                    </span>
                </p>
                <p>
                    <BsLinkedin className='media_logo' />
                    <span className='linkable' onClick={() => window.open('https://www.linkedin.com/in/matias-ramos-web/', '_blank')}>
                        https://www.linkedin.com/in/matias-ramos-web/
                    </span>
                </p>
                <p>
                    <AiFillGithub className='media_logo' />
                    <span className='linkable' onClick={() => window.open('https://github.com/matias0303456', '_blank')}>
                        https://github.com/matias0303456
                    </span>
                </p>
            </div>
        </article>
    )
}