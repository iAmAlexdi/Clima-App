import React from "react"; // Importamos React para crear componentes.
import "../assets/css/Spinner.css"; // Importamos el archivo CSS que contiene los estilos del spinner.

const Spinner = ({ color = "#1c4c5b", size = "5em" }) => {
  // Componente Spinner que recibe dos propiedades opcionales:
  // - `color`: Define el color del spinner (por defecto es #1c4c5b).
  // - `size`: Define el tamaño del spinner (por defecto es 5em).

  return (
    <div className="spinner-overlay">
      {/* Div que envuelve el spinner para centrarlo o estilizar el fondo. */}
      <div
        className="lds-hourglass"
        // Estilo dinámico que aplica el color y tamaño del spinner.
        style={{ color, width: size, height: size }}
      ></div>
    </div>
  );
};

export default Spinner; // Exporta el componente para usarlo en otros archivos.
