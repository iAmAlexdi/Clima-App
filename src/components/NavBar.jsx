// Componente NavBar: Representa una barra de navegación para la aplicación.
const NavBar = () => {
    return (
        // Elemento `nav` que define la barra de navegación.
        <nav 
            className="navbar bg-dark text-light mb-5" // Clases de estilo:
            // - `navbar`: Define el diseño básico de la barra de navegación.
            // - `bg-dark`: Aplica un fondo oscuro.
            // - `text-light`: Aplica un texto claro.
            // - `mb-5`: Agrega un margen inferior (margin-bottom) para separar el nav del contenido.
            aria-label="Weather Navigation" // Etiqueta de accesibilidad para describir la barra de navegación.
        >
            <div className="container-fluid">
                {/* Contenedor fluido para que el contenido se ajuste al ancho completo */}
                <h3 className="mx-auto">
                    {/* Título centrado horizontalmente en la barra */}
                    Predicción Meteorológica
                </h3>
            </div>
        </nav>
    );
}

// Exportación del componente para que pueda usarse en otros archivos.
export default NavBar;
