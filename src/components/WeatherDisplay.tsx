import React, { useContext, useState } from 'react';
import '../styles/weatherDisplay.css'

export interface ICityData {
    name: string,
    weatherDescription: string,
    weatherOverview: string,
    windSpeed: number,
    temperature: number
}

export interface IWeatherDisplay {
    data: ICityData 
}

function WeatherDisplay(props: IWeatherDisplay) {

    function convertToCelsius(value: number) {
        const result = value - 273.15;
        return result.toFixed(1);
    }
    
    return (
        <div className="weather-Display-container">
            <div className="info-item info-item__city"> City </div>
            <div className="info-item info-item__overview"> Overview </div>
            <div className="info-item info-item__temp"> Temperature </div>
            <div className="info-item info-item__wspeed"> Wind Speed </div>
            
            <div className="info-value info-value__city">{props.data.name}</div>
            <div className="info-value">{props.data.weatherOverview}</div>
            <div className="info-value">{convertToCelsius(props.data.temperature)} ˚C</div>
            <div className="info-value">{props.data.windSpeed} </div>
        </div>
    )
}

export default WeatherDisplay;