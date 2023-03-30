import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function ChangeLangButton() {

    const { i18n } = useTranslation()

    useEffect(() => {
        const elements = document.querySelectorAll('.lang_btn')
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains(i18n.language)) {
                elements[i].classList.add('selectedLang')
            } else {
                elements[i].classList.remove('selectedLang')
            }
        }
    }, [i18n.language])

    function changeLang(lang) {
        i18n.changeLanguage(lang)
    }

    return (
        <div id="change_lang_btn">
            <div className="es lang_btn" onClick={() => changeLang('es')}>ES</div>
            <div className="en lang_btn" onClick={() => changeLang('en')}>EN</div>
            <div className="fr lang_btn" onClick={() => changeLang('fr')}>FR</div>
        </div>
    )
}