import { useTranslation } from "react-i18next";

import ProjectsAccordion from "./ProjectsAccordion";
import CardsComponent from './CardsComponent'

export default function Proyects() {

    const [t] = useTranslation('global')

    return (
        <article id="projects" className="main_section_container">
            <h2>
                {t('titles.projects')}
            </h2>
            <section>
                {/* <ProjectsAccordion /> */}
                <CardsComponent />
            </section>
        </article>
    )
}