import FormFeedback from './FormFeedback';

function PersonalDataForm({ feedback, isSubmitting, onSubmit }) {
  return (
    <form className="personal-form" onSubmit={onSubmit}>
      <section className="seccion-formulario" aria-labelledby="basic-info-title">
        <h2 id="basic-info-title">Información personal</h2>
        <div className="campos-formulario">
          <div className="field">
            <label htmlFor="nombre">Nombre *</label>
            <input
              autoComplete="given-name"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="apellido">Apellido *</label>
            <input
              autoComplete="family-name"
              id="apellido"
              name="apellido"
              placeholder="Tu apellido"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="dni">DNI</label>
            <input
              autoComplete="off"
              id="dni"
              name="dni"
              placeholder="Número de documento"
            />
          </div>

        </div>
      </section>

      <section className="seccion-formulario" aria-labelledby="contact-info-title">
        <h2 id="contact-info-title">Contacto y estudio</h2>
        <div className="campos-formulario">
          <div className="field">
            <label htmlFor="email">Correo electrónico *</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              placeholder="nombre@ejemplo.com"
              required
              type="email"
            />
          </div>

          <div className="field">
            <label htmlFor="telefono">Número de teléfono *</label>
            <input
              autoComplete="tel"
              id="telefono"
              name="telefono"
              placeholder="+54 11 1234 5678"
              required
              type="tel"
            />
          </div>

          <div className="field">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              autoComplete="address-level2"
              id="ciudad"
              name="ciudad"
              placeholder="Tu ciudad"
            />
          </div>

          <div className="field">
            <label htmlFor="carrera">Carrera o curso</label>
            <input
              id="carrera"
              name="carrera"
              placeholder="¿Qué estás estudiando?"
            />
          </div>
        </div>
      </section>

      <div className="field">
        <label htmlFor="comentario">
          Comentario           <span className="nota-opcional">(opcional)</span>
        </label>
        <textarea
          id="comentario"
          name="comentario"
          placeholder="Si querés, podés agregar algún dato más."
          rows="3"
        />
      </div>

      <div className="acciones-formulario">
        <button className="boton-enviar" disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Enviando…' : 'Enviar datos'}
        </button>
        <p className="nota-obligatorios">* Campos obligatorios</p>
      </div>

      {feedback && <FormFeedback message={feedback.message} type={feedback.type} />}
    </form>
  );
}

export default PersonalDataForm;
