import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    return (
        <main id="homeMain">
            <h1 id='logo'>
                <span className="logoElements">
                    Matías
                </span>
                <span className="logoElements">
                    Ramos
                </span>
                <p>Fullstack Developer</p>
            </h1>
            <nav>
                <section
                    className="section"
                    onClick={() => navigate('/filosofia')}
                >
                    Filosofía
                </section>
                <section
                    className="section"
                    onClick={() => navigate('/proyectos')}
                >
                    Proyectos
                </section>
                <section
                    className="section"
                    onClick={() => navigate('/contacto')}
                >
                    Contacto
                </section>
            </nav>
        </main>
    )
}