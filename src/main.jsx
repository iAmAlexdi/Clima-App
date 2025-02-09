// Importa el módulo `StrictMode` de React, que se utiliza para resaltar posibles problemas en la aplicación. Ayuda a garantizar que el código cumpla con las mejores prácticas.
import { StrictMode } from 'react';

// Importa `createRoot` del módulo `react-dom/client`, que se utiliza para inicializar la aplicación React en el DOM (versión moderna del método `ReactDOM.render`).
import { createRoot } from 'react-dom/client';

// Importa el archivo de estilos globales para la aplicación.
import './assets/css/index.css';

// Importa el componente principal `App`, que contiene toda la estructura y lógica de la aplicación.
import App from './App.jsx';

// Crea un punto de entrada raíz para la aplicación y monta el componente principal `App` en el elemento del DOM con el ID `root`.
createRoot(document.getElementById('root')).render(
  // Envuélvelo en `StrictMode` para habilitar verificaciones adicionales y detectar advertencias en el desarrollo.
  <StrictMode>
    {/* Renderiza el componente principal `App`. */}
    <App />
  </StrictMode>,
);
