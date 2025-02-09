import React, { useState } from "react";

// Componente `Form`, diseñado para capturar el nombre de una ciudad y enviarlo al componente principal.
const Form = ({ newLocation }) => {
  // Hook `useState` para manejar el estado de la ciudad ingresada por el usuario.
  const [city, setCity] = useState("");

  // Función que se ejecuta al enviar el formulario.
  const onSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página al hacer submit.
    console.log({ city }); // Muestra en la consola el valor actual de `city` (útil para depuración).

    // Verifica si el campo `city` está vacío. Si lo está, no se ejecuta nada.
    if (!city) return;

    // Llama a la función `newLocation`, pasada como prop, y le envía el valor de la ciudad.
    newLocation(city);

    // Limpia el campo de entrada después de enviar los datos.
    setCity("");
  };

  return (
    <div className="container">
      {/* Formulario para capturar el nombre de la ciudad */}
      <form onSubmit={onSubmit}>
        {/* Grupo de entrada para la ciudad */}
        <div className="input-group mb-3 mx-auto">
          {/* Etiqueta asociada al campo de entrada para accesibilidad */}
          <label htmlFor="cityInput" className="visually-hidden">
            Ingrese una ciudad
          </label>
          {/* Campo de texto para que el usuario ingrese el nombre de la ciudad */}
          <input
            id="cityInput" // Asocia el campo con la etiqueta usando el mismo ID.
            type="text" // Especifica que el campo es de tipo texto.
            className="form-control" // Clase de Bootstrap para dar estilo al campo.
            placeholder="Ciudad" // Texto que aparece como marcador de posición.
            value={city} // El valor del campo está vinculado al estado `city`.
            onChange={(e) => setCity(e.target.value)} // Actualiza el estado `city` al escribir.
          />
          {/* Botón para enviar el formulario */}
          <button
            className="btn btn-primary input-group-text" // Clases de Bootstrap para estilo.
            type="submit" // Especifica que es un botón de envío.
            disabled={!city} // Desactiva el botón si `city` está vacío.
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form; // Exporta el componente para que pueda usarse en otros archivos.