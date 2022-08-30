import Router from './components/Router';
import UpButton from './components/UpButton';
import './styles/app.css';

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
