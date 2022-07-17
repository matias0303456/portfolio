import SideMenu from "../components/SideMenu";

export default function Contact() {
    return (
        <section id="contactMain">
            <SideMenu
                elements={[
                    {
                        value: 'Filosofía',
                        link: '/filosofia'
                    },
                    {
                        value: 'Proyectos',
                        link: '/proyectos'
                    }
                ]}
            />
            <h2>
                Contacto
            </h2>
        </section>
    )
}