import { useNavigate } from "react-router-dom"

export default function SideMenu({
    elements
}) {

    const navigate = useNavigate()

    return (
        <aside id="sideMenu">
            <ul>
                {elements.map((el, idx) => (
                    <li key={idx} onClick={() => navigate(el.link)}>
                        {el.value}
                    </li>
                ))}
                <li onClick={() => navigate('/')}>
                    Volver
                </li>
            </ul>
        </aside>
    )
}