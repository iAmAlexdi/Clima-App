import React, { useState, useEffect } from "react"; // Importamos React y los hooks useState y useEffect.
import Card from "./Card"; // Importamos el componente Card que mostrará los datos del clima.

const WeatherPanel = () => {
    // URLs base para consultar la API del clima y el pronóstico.
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=5380ead3b0e950876e020ab93678936e&lang=es";
    let cityurl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=5380ead3b0e950876e020ab93678936e&lang=es";

    // Estados para manejar los datos del clima, el pronóstico, el estado de carga, la visibilidad de datos y la ubicación.
    const [weather, setWeather] = useState([]); // Almacena los datos del clima actual.
    const [forecast, setForecast] = useState([]); // Almacena los datos del pronóstico.
    const [loading, setLoading] = useState(false); // Indica si se están cargando los datos.
    const [show, setShow] = useState(false); // Indica si se deben mostrar los datos.
    const [location, setLocation] = useState(""); // Almacena la ubicación seleccionada.

    // Función para obtener los datos de clima y pronóstico de una ubicación específica.
    const getLocation = async (loc) => {
        setLoading(true); // Activa el estado de carga.
        setLocation(loc); // Guarda la ubicación proporcionada.

        // --- Consulta del clima actual ---
        const weatherUrl = urlWeather + cityurl + loc; // Construye la URL completa para obtener el clima.
        await fetch(weatherUrl) // Realiza la solicitud a la API.
            .then((response) => {
                if (!response.ok) throw { response }; // Maneja errores si la solicitud no es exitosa.
                return response.json(); // Convierte la respuesta a JSON.
            })
            .then((weatherData) => {
                console.log(weatherData); // Muestra los datos del clima en consola.
                setWeather(weatherData); // Guarda los datos del clima en el estado correspondiente.
            })
            .catch((error) => {
                console.log(error); // Muestra errores en consola.
                setLoading(false); // Detiene el estado de carga.
                setShow(false); // Oculta los datos en caso de error.
            });

        // --- Consulta del pronóstico ---
        const forecastUrl = urlForecast + cityurl + loc; // Construye la URL completa para obtener el pronóstico.
        await fetch(forecastUrl) // Realiza la solicitud a la API.
            .then((response) => {
                if (!response.ok) throw { response }; // Maneja errores si la solicitud no es exitosa.
                return response.json(); // Convierte la respuesta a JSON.
            })
            .then((forecastData) => {
                console.log(forecastData); // Muestra los datos del pronóstico en consola.
                setForecast(forecastData); // Guarda los datos del pronóstico en el estado correspondiente.

                setLoading(false); // Detiene el estado de carga.
                setShow(true); // Activa la visibilidad de los datos.
            })
            .catch((error) => {
                console.log(error); // Muestra errores en consola.
                setLoading(false); // Detiene el estado de carga.
                setShow(false); // Oculta los datos en caso de error.
            });
    };

    // Hook useEffect: carga datos de clima y pronóstico de "Jocotitlán" por defecto al cargar el componente.
    useEffect(() => {
        getLocation("Jocotitlán"); // Llama a la función getLocation con la ubicación inicial "Jocotitlán".
    }, []); // [] asegura que este efecto solo se ejecute una vez, al montar el componente.

    return (
        <React.Fragment>
            {/* Componente Card: muestra el clima y el pronóstico. 
                - showData: indica si se deben mostrar los datos.
                - loadingData: indica si se están cargando los datos.
                - weather: datos del clima actual.
                - forecast: datos del pronóstico. */}
            <Card
                showData={show}
                loadingData={loading}
                weather={weather}
                forecast={forecast}
            />
        </React.Fragment>
    );
};

export default WeatherPanel; // Exporta el componente WeatherPanel para que pueda usarse en otros archivos.
