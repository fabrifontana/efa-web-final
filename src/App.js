import { usePersonalData } from './hooks/usePersonalData';
import PersonalDataForm from './components/PersonalDataForm';
import './App.css';

function App() {
  const { feedback, isSubmitting, submitPersonalData } = usePersonalData();

  function handleSubmit(event) {
    event.preventDefault();
    const personalData = Object.fromEntries(new FormData(event.currentTarget));
    submitPersonalData(personalData);
  }

  return (
    <main className="page">
      <div className="layout-formulario">
        <header className="encabezado-pagina">
          <p className="contexto-pagina">Trabajo práctico</p>
          <h1 id="page-title">Ficha personal</h1>
          <p className="texto-encabezado">Completá tus datos para la entrega.</p>
        </header>

        <section className="panel-formulario" aria-label="Formulario de datos personales">
          <div className="encabezado-formulario">
            <h2>Completá el formulario</h2>
            <p>Los campos con * son obligatorios.</p>
          </div>
          <PersonalDataForm
            feedback={feedback}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
