// Importa el archivo de estilos CSS que contiene los estilos globales para la aplicación.
import './assets/css/App.css'; 

// Importa el componente NavBar, que probablemente representa la barra de navegación de tu aplicación.
import NavBar from './components/NavBar'; 

// Importa el componente WeatherPanel, que probablemente es el panel principal donde se muestra la información meteorológica.
import WeatherPanel from './components/WeatherPanel'; 

// Define la función principal del componente `App`.
function App() {
  return (
    // Contenedor principal de la aplicación con una clase `App` (estilizada desde el archivo CSS importado).
    <div className="App">
      {/* Renderiza el componente NavBar */}
      <NavBar />
      {/* Renderiza el componente WeatherPanel */}
      <WeatherPanel />
    </div>
  );
}

// Exporta el componente App para que pueda usarse en otros archivos (es el punto de entrada principal de la aplicación).
export default App;