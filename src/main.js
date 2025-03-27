import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

const logger = {
  info: (message) => console.log(`[INFO] ${new Date().toISOString()}: ${message}`),
  warn: (message) => console.warn(`[WARN] ${new Date().toISOString()}: ${message}`),
  error: (message) => console.error(`[ERROR] ${new Date().toISOString()}: ${message}`),
};

// HTML (sin cambios)
document.querySelector("#app-container").innerHTML = /*html*/ `
  <main>
    <form action="#" id="register-form" class="form-container">
      <h1>Formulario de registro</h1>
      <div class="form-group">
        <label for="fullName">Nombre Completo</label>
        <input type="text" placeholder="Tu nombre completo" name="fullName" id="fullName">
      </div>
      <div class="form-group">
        <label for="age">Edad</label>
        <input type="number" name="age" id="age">
      </div>
      <div class="form-group">
        <label for="email">Correo</label>
        <input type="email" name="email" id="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password">
      </div>
      <div class="form-group">
        <label for="password-again">Repetir Contraseña</label>
        <input type="password" name="password-again" id="password-again">
      </div>
      <input type="submit" value="Enviar" class="submit-btn">
    </form>

    <div class="controls-container">
      <label class="control-item">
        <span>Nombre Completo</span>
        <input type="checkbox" name="fullName-check" id="fullName-checkbox-input" checked>
      </label>
      <label class="control-item">
        <span>Edad</span>
        <input type="checkbox" name="age-check" id="age-checkbox-input" checked>
      </label>
      <label class="control-item">
        <span>Correo</span>
        <input type="checkbox" name="email-check" id="email-checkbox-input" checked>
      </label>
      <label class="control-item">
        <span>Contraseña</span>
        <input type="checkbox" name="password-check" id="password-checkbox-input" checked>
      </label>
      <label class="control-item">
        <span>Repetir Contraseña</span>
        <input type="checkbox" name="password-again-check" id="password-again-checkbox-input" checked>
      </label>
    </div>
  </main>
  <footer>
    <section id="links-container">
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </section>
  </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  try {
    const form = document.querySelector("#register-form");
    if (!form) throw new Error("No se encontró el formulario");

    const fields = [
      { checkId: "fullName-checkbox-input", inputId: "fullName", minLength: 2 },
      { checkId: "age-checkbox-input", inputId: "age", minValue: 18, maxValue: 150 },
      { checkId: "email-checkbox-input", inputId: "email" },
      { checkId: "password-checkbox-input", inputId: "password", minLength: 6 },
      { checkId: "password-again-checkbox-input", inputId: "password-again" },
    ];

    fields.forEach(({ checkId, inputId }) => {
      const checkbox = document.querySelector(`#${checkId}`);
      const input = document.querySelector(`#${inputId}`);

      if (!checkbox || !input) {
        logger.error(`Elemento no encontrado: ${checkId} o ${inputId}`);
        return;
      }

      input.required = checkbox.checked;
      input.disabled = !checkbox.checked;

      checkbox.addEventListener("change", () => {
        input.required = checkbox.checked;
        input.disabled = !checkbox.checked;
        logger.info(`Campo ${inputId} ${checkbox.checked ? "activado" : "desactivado"}`);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validación: Todos los campos llenos
        for (let [key, value] of Object.entries(data)) {
          if (!value.trim()) {
            logger.warn(`El campo ${key} está vacío`);
            alert(`El campo ${key} es obligatorio`);
            return;
          }
        }

        // Validación: Correo con @
        if (!data.email.includes("@")) {
          logger.warn("El correo debe contener '@'");
          alert("El correo debe contener '@'");
          return;
        }

        // Validación: Contraseña mínimo 6 caracteres
        if (data.password.length < 6) {
          logger.warn("La contraseña debe tener al menos 6 caracteres");
          alert("La contraseña debe tener al menos 6 caracteres");
          return;
        }

        // Validación: Contraseñas coinciden
        if (data.password !== data["password-again"]) {
          logger.warn("Las contraseñas no coinciden");
          alert("Las contraseñas no coinciden");
          return;
        }

        // Validación: Mayor de 18
        const age = parseInt(data.age);
        if (isNaN(age) || age < 18) {
          logger.warn("Debes ser mayor de 18 años");
          alert("Debes ser mayor de 18 años");
          return;
        }

        logger.info("Formulario enviado con éxito");
        logger.info(`Datos: ${JSON.stringify(data)}`);
        alert("Formulario enviado con éxito");
      } catch (error) {
        logger.error(`Error al procesar el formulario: ${error.message}`);
        alert("Ocurrió un error al enviar el formulario");
      }
    });

    logger.info("Formulario inicializado correctamente");
  } catch (error) {
    logger.error(`Error en la inicialización: ${error.message}`);
  }
});
