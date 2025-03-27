import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

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
  const fields = [
    { checkId: "fullName-checkbox-input", inputId: "fullName" },
    { checkId: "age-checkbox-input", inputId: "age" },
    { checkId: "email-checkbox-input", inputId: "email" },
    { checkId: "password-checkbox-input", inputId: "password" },
    { checkId: "password-again-checkbox-input", inputId: "password-again" },
  ];

  fields.forEach(({ checkId, inputId }) => {
    const checkbox = document.querySelector(`#${checkId}`);
    const input = document.querySelector(`#${inputId}`);

    if (checkbox && input) {
      input.required = checkbox.checked;
      checkbox.addEventListener("change", () => {
        input.required = checkbox.checked;
        input.disabled = !checkbox.checked;
      });
    }
  });
});
