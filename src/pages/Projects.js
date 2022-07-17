import SideMenu from "../components/SideMenu";

export default function Proyects() {
    return (
        <section id="projectsMain">
            <SideMenu
                elements={[
                    {
                        value: 'Filosofía',
                        link: '/filosofia'
                    },
                    {
                        value: 'Contacto',
                        link: '/contacto'
                    }
                ]}
            />
            <h2>
                Proyectos
            </h2>
        </section>
    )
}