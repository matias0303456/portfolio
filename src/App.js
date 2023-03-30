import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Router from './components/Router';
import UpButton from './components/UpButton';
import './styles/app.css';
import es_json from './lang/es.json'
import en_json from './lang/en.json'
import fr_json from './lang/fr.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: es_json,
      en: en_json,
      fr: fr_json
    },
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

function App() {

  window.onscroll = () => {
    const btn = document.getElementById('up_button')
    if (window.scrollY > 0) {
      btn.classList.remove('d-none')
    } else {
      btn.classList.add('d-none')
    }
  }

  return (
    <div className="App">
      <Router />
      <UpButton />
    </div>
  );
}

export default App;
