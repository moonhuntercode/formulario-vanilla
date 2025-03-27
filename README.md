# Formulario de Registro

Este proyecto implementa un formulario de registro interactivo con validaciones, control de errores y logging, construido con tecnologías modernas y ligeras. A continuación, se detalla su estructura, instalación y funcionalidades.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del formulario y controles.
- **CSS3**: Estilos modernos con soporte para light/dark mode y responsividad.
- **JavaScript Vanilla**: Lógica del formulario sin dependencias externas.
- **Vite**: Herramienta de construcción rápida y desarrollo con HMR (Hot Module Replacement).
- **Yarn**: Gestor de paquetes para instalación y ejecución.

## Requisitos

- Node.js (versión 16 o superior recomendada)
- Yarn (instalable con `npm install -g yarn`)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instala las dependencias con Yarn:
   ```bash
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   yarn dev
   ```

4. Abre tu navegador en `http://localhost:5173` (o el puerto configurado por Vite).

5. Para construir el proyecto para producción:
   ```bash
   yarn build
   ```

## Estructura del Proyecto

```
├── src/
│   ├── style.css         # Estilos del formulario
│   ├── main.js          # Lógica principal del formulario
│   ├── javascript.svg   # Logo de JavaScript
│   └── vite.svg         # Logo de Vite
├── index.html           # Punto de entrada HTML
├── package.json         # Configuración del proyecto y scripts
└── vite.config.js       # Configuración de Vite
```

## Funcionalidades

### Formulario de Registro

- **Campos**:
  - Nombre Completo (texto)
  - Edad (número)
  - Correo (email)
  - Contraseña (contraseña)
  - Repetir Contraseña (contraseña)

- **Controles de Activación**:
  - Cada campo tiene un checkbox asociado que permite activar/desactivar su requerimiento y disponibilidad.
  - Los campos desactivados no se validan ni se incluyen en el envío.

### Validaciones

Las validaciones se realizan al enviar el formulario:

1. **Todos los campos deben estar llenos**:
   - Si un campo está activo (checkbox marcado), no puede estar vacío.
2. **Correo debe contener '@'**:
   - Verifica que el campo de correo incluya el símbolo '@'.
3. **Contraseña mínima de 6 caracteres**:
   - La contraseña debe tener al menos 6 caracteres.
4. **Contraseñas deben coincidir**:
   - El campo "Repetir Contraseña" debe ser idéntico al campo "Contraseña".
5. **Edad mayor a 18**:
   - La edad debe ser un número mayor o igual a 18.

### Control de Errores

- **Try/Catch**: Se implementa en:
  - Inicialización del formulario
  - Configuración de campos
  - Procesamiento del envío
- **Mensajes al usuario**: Alertas informan sobre errores de validación o problemas técnicos.

### Sistema de Logging

- **Niveles**:
  - `info`: Eventos normales (ej. "Formulario enviado con éxito").
  - `warn`: Advertencias (ej. "Las contraseñas no coinciden").
  - `error`: Errores críticos (ej. "Elemento no encontrado").
- **Formato**: `[NIVEL] FECHA: MENSAJE`, visible en la consola del navegador.
- **Ejemplos**:
  ```
  [INFO] 2025-03-26T12:00:00.000Z: Formulario inicializado correctamente
  [WARN] 2025-03-26T12:00:01.000Z: El campo email está vacío
  [ERROR] 2025-03-26T12:00:02.000Z: Error al procesar el formulario: ...
  ```

### Estilos (CSS3)

- **Diseño Responsivo**:
  - Media query para pantallas > 600px que organiza los controles en columnas.
- **Color Scheme**:
  - Soporte para light/dark mode mediante `@media (prefers-color-scheme)`.
- **Efectos**:
  - Hover en botones y logos con transiciones suaves.
  - Sombras y bordes dinámicos.
- **Variables CSS**:
  - `--one-hundred-percent`: Usada para anchos completos.

## Uso

1. Completa los campos del formulario.
2. Usa los checkboxes para activar/desactivar campos según necesites.
3. Haz clic en "Enviar" para validar y procesar los datos.
4. Revisa la consola del navegador para ver los logs.

## Ejemplo de Datos Válidos

```json
{
  "fullName": "Juan Pérez",
  "age": "25",
  "email": "juan@ejemplo.com",
  "password": "secure123",
  "password-again": "secure123"
}
```

## Personalización

- **Validaciones**: Modifica las reglas en el evento `submit` dentro de `main.js`.
- **Estilos**: Ajusta `style.css` para cambiar colores, tamaños o disposición.
- **Logging**: Amplía el objeto `logger` para guardar logs en un archivo o servidor.

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commitea tus cambios (`git commit -m "Añade nueva funcionalidad"`).
4. Pushea tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

[MIT License](LICENSE) - Siéntete libre de usar y modificar este código.

---
