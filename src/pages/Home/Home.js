import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { scroll } from '../../utilities/scroll'

export default function Home() {

    return (
        <main>
            <section id="first_home_section">
                <h1 id='logo'>
                    <span className="logo_elements">
                        Matías
                    </span>
                    <span className="logo_elements">
                        Ramos
                    </span>
                    <p>Full Stack Developer</p>
                </h1>
                <nav>
                    <section
                        className="section_trigger"
                        onClick={() => scroll('profile')}
                    >
                        Perfil
                    </section>
                    <section
                        className="section_trigger"
                        onClick={() => scroll('projects')}
                    >
                        Proyectos
                    </section>
                    <section
                        className="section_trigger"
                        onClick={() => scroll('contact')}
                    >
                        Contacto
                    </section>
                </nav>
            </section>
            <section id='second_home_section'>
                <Profile />
                <Projects />
                <Contact />
            </section>
        </main>
    )
}