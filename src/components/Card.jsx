// Importa React, necesario para trabajar con componentes en una aplicación React
import React from "react";

// Importa un componente llamado `Spinner` que probablemente muestra un indicador de carga
import Spinner from "./Spinner";

const getPeriod = (hour) => {
    if (hour >= 0 && hour < 12) {
        return "Mañana";
    } else if (hour >= 12 && hour < 19) {
        return "Tarde";
    } else {
        return "Noche";
    }
};

const extractDate = (dt_txt) => {
    let day = dt_txt.substring(8, 10);
    let month = dt_txt.substring(5, 7);
    let year = dt_txt.substring(0, 4);
    let hour = parseInt(dt_txt.substring(11, 13));
    return { date: `${day}/${month}/${year}`, hour };
};

// Componente funcional `Card` que recibe cuatro propiedades (props):
const Card = ({ loadingData, showData, weather, forecast }) => {
    var today = new Date();
    var date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    var url = "http://openweathermap.org/img/w/";
    var iconUrl = "";
    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";
    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";
    var period3 = "";
    var period6 = "";
    var period9 = "";

    if (loadingData) {
        return <Spinner />;
    }

    if (showData) {
        iconUrl = `${url}${weather.weather[0].icon}.png`;
        iconUrl3 = `${url}${forecast.list[1].weather[0].icon}.png`;
        iconUrl6 = `${url}${forecast.list[2].weather[0].icon}.png`;
        iconUrl9 = `${url}${forecast.list[4].weather[0].icon}.png`;

        // Extrae y formatea las fechas y horas de las predicciones del clima
        forecastDate3 = forecast.list[0].dt_txt.substring(8, 10) + '/' +
                        forecast.list[0].dt_txt.substring(5, 7) + '/' +
                        forecast.list[0].dt_txt.substring(0, 4);

        forecastDate6 = forecast.list[1].dt_txt.substring(8, 10) + '/' +
                        forecast.list[1].dt_txt.substring(5, 7) + '/' +
                        forecast.list[1].dt_txt.substring(0, 4);

        forecastDate9 = forecast.list[4].dt_txt.substring(8, 10) + '/' +
                        forecast.list[4].dt_txt.substring(5, 7) + '/' +
                        forecast.list[4].dt_txt.substring(0, 4);

        let { date: date3, hour: hour3 } = extractDate(forecast.list[1].dt_txt);
        let { date: date6, hour: hour6 } = extractDate(forecast.list[2].dt_txt);
        let { date: date9, hour: hour9 } = extractDate(forecast.list[4].dt_txt);

        let isTomorrow3 = date3 !== date;
        let isTomorrow6 = date6 !== date;
        let isTomorrow9 = date9 !== date;

        let periods = [getPeriod(hour3), getPeriod(hour6), getPeriod(hour9)];

        if (periods[1] === periods[0]) {
            periods[1] = periods[0] === "Mañana" ? "Tarde" : "Noche";
        }
        if (periods[2] === periods[1]) {
            periods[2] = periods[1] === "Mañana" ? "Tarde" : "Noche";
        }

        period3 = periods[0] + (isTomorrow3 ? " (Mañana)" : "");
        period6 = periods[1] + (isTomorrow6 ? " (Mañana)" : "");
        period9 = periods[2] + (isTomorrow9 ? " (Mañana)" : "");
    }

    return (
        <div className="mt-0">
            {showData ? (
                <div className="container">
                    <div className="card mb-3 mx-auto bg-dark text-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <h3 className="temp_act">TEMPERATURA ACTUAL</h3>
                                <img 
                                    src="https://lh3.googleusercontent.com/p/AF1QipPtdSX7R0IdlKe8UDIybReBC-A25J3aV4nap48a=s1360-w1360-h1020"
                                    className="img-fluid rounded-start" 
                                    alt="Ubicación" 
                                />
                                <h3 className="card-title">{weather.name}</h3>
                                <p className="card-date">{date}</p>
                                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                <p className="card-desc">
                                    <img src={iconUrl} alt="icon" /> {weather.weather[0].description}
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5>Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                    <h5>Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                    <h5>Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                    <h5>Humedad: {weather.main.humidity}%</h5>
                                    <h5>Velocidad del viento: {weather.wind.speed}m/s</h5>
                                </div>
                                <hr />
                                <div className="row mt-4">
                                    <div className="col">
                                        <p className="fdate">{forecastDate3}</p>
                                        <p className="fdate">{period3}</p>
                                        <p className="description"><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                    </div>
                                    <div className="col">
                                        <p className="fdate">{forecastDate6}</p>
                                        <p className="fdate">{period6}</p>
                                        <p className="description"><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className="col">
                                        <p className="fdate">{forecastDate9}</p>
                                        <p className="fdate">{period9}</p>
                                        <p className="description"><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="text-light">Sin datos</h2>
            )}
        </div>
    );
};

export default Card;
