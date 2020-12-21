import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CitySelect from './CitySelect';
import { ICitySelect } from '../CitiesData.const';
import WeatherDisplay, { ICityData } from './WeatherDisplay'
import BackButton from './BackButton';
import ShowButton from './ShowButton';
import { defaultProps } from 'react-select/src/Select';


export function Api(id: number) {
    return `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=678c4a83612a250fa699842d9f484609`;
}


function WeatherManager() {

  const [selectedCity, setSelectedCity] = useState<ICitySelect>({id: -1, label: ""});
  const [currentCity, setCurrentCity] = useState<ICityData>({name: "", temperature: 0, weatherDescription: "", weatherOverview: "", windSpeed: 0});
  const [selecting, setSelecting] = useState(true);
  const [counterApiCalls, setCounterApiCalls] = useState(0);

  // console.log(json.filter((v: any) => v.name.includes("Los Angeles")));

  function handleClick() {
        if (selectedCity.id === -1) {
            alert("City was not selected!");
            return;
        }
        setSelecting(false);
  }

  useEffect(() => {
        if (selectedCity.id === -1) {
            return;
        }     
        axios.get(Api(selectedCity.id)).then((response: any) => {
            const city: ICityData = {
                name: response.data.name,
                weatherDescription: response.data.weather[0].description,
                weatherOverview: response.data.weather[0].main,
                windSpeed: response.data.wind.speed,
                temperature: response.data.main.temp
            }
            setCurrentCity(city);
            setCounterApiCalls((c) => c + 1);
    });
  }, [selectedCity])
   
  if (counterApiCalls > 3) {
      alert("Maximum number of selecting city is 3. Please refresh.");
      return (<></>)
  }

  if (selecting) {
      
      return (
          <>
          <CitySelect onChange={(e: ICitySelect) => setSelectedCity(e)}/> 
          <ShowButton onChange={handleClick} counter={counterApiCalls}/> 
          </>
             )
  }
  return (
      <>
      <WeatherDisplay data={currentCity} /> 
      <BackButton onChange={() => { setSelecting(true); setSelectedCity({id: -1, label: ""})}}/>
      </>
        )
}


export default WeatherManager;
