import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io'
import { SiBootstrap } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { FaNode } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { SiPrisma } from 'react-icons/si'
import { FaLaravel } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'

export default function Profile() {
    return (
        <article id="profile" className="main_section_container">
            <h2>
                Perfil
            </h2>
            <div className='profile_container'>
                <div className='logo_container'>
                    <AiFillHtml5 id='html_logo' className='logo' />
                    <DiReact id='react_logo' className='logo' />
                    <FaPhp id='php_logo' className='logo' />
                    <SiBootstrap id='bs_logo' className='logo' />
                    <SiMysql id='mysql_logo' className='logo' />
                </div>
                <div className='text_container'>
                    <p>
                        Mi trabajo se centra en el desarrollo y mantenimiento de aplicaciones web
                        con tecnologías del lado del cliente y del lado del servidor.
                        Así también, cuento con conocimientos en herramientas de analítica,
                        en buenas prácticas de desarrollo y documentación, en seguridad
                        (principalmente utilización de JWT) y en optimización de accesibilidad
                        y rendimiento para SEO.
                    </p>
                    <p>
                        En frontend trabajo con las tecnologías básicas: HTML, CSS y JavaScript.
                        Además, implemento librerías y frameworks, principalmente React JS
                        a un nivel avanzado. En CSS, también trabajo con Bootstrap y Tailwind.
                    </p>
                    <p>
                        En backend, trabajo con Node JS, entorno de ejecución de JavaScript, y con
                        Laravel, framework de PHP. Como sistema gestor de bases de datos uso MySQL.
                        Para conectar APIs con bases de datos, utilizo ORMs como Prisma o Eloquent,
                        o directamente el lenguaje SQL.
                    </p>
                    <p>
                        Mi conocimiento de JavaScript y de PHP me permite también utilizar herramientas
                        de código de terceros, librerías que me permiten implementar determinadas
                        funcionalidades de forma más eficiente y rápida, como NPM y Composer.
                    </p>
                </div>
                <div className='logo_container'>
                    <IoLogoCss3 id='css_logo' className='logo' />
                    <FaNode id='node_logo' className='logo' />
                    <SiTailwindcss id='tw_logo' className='logo' />
                    <SiPrisma id='prisma_logo' className='logo' />
                    <IoLogoJavascript id='js_logo' className='logo' />
                    <FaLaravel id='laravel_logo' className='logo' />
                </div>
            </div>
        </article>
    )
}