import SideMenu from "../components/SideMenu";

export default function Philosophy() {
    return (
        <main id="philosophyMain">
            <SideMenu
                elements={[
                    {
                        value: 'Proyectos',
                        link: '/proyectos'
                    },
                    {
                        value: 'Contacto',
                        link: '/contacto'
                    }
                ]}
            />
            <h2>
                Filosofía
            </h2>
        </main>
    )
}