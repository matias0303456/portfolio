import '../../styles/components/layout/header.css'

export default function Header() {
    return (
        <header>
            <h1 id='logo'>
                <span className='logoElements'>
                    Matías
                </span>
                <span className='logoElements'>
                    Ramos
                </span>
            </h1>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Filosofía</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
};
