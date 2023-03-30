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
import { useTranslation } from 'react-i18next'

export default function Profile() {

    const [t] = useTranslation('global')

    return (
        <article id="profile" className="main_section_container">
            <h2>
                {t('titles.profile')}
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
                        {t('description.first')}
                    </p>
                    <p>
                        {t('description.second')}
                    </p>
                    <p>
                        {t('description.third')}
                    </p>
                    <p>
                        {t('description.fourth')}
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