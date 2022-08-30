import { CgMail } from 'react-icons/cg'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

export default function Contact() {
    return (
        <article id="contact" className="main_section_container">
            <h2>
                Contacto
            </h2>
            <p>
                <CgMail />
                matiasramos261@gmail.com
            </p>
            <p>
                <BsLinkedin />
                https://www.linkedin.com/in/matias-ramos-web/
            </p>
            <p>
                <AiFillGithub />
                https://github.com/matias0303456
            </p>
        </article>
    )
}