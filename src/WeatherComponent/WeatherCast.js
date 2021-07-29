import { useState, useEffect } from 'react';
import './WeatherCast.css';
import axios from 'axios';


import WeatherList from './WeatherList';
import WeatherDetails from './WeatherDetails';


function WeatherCast() {
  const [weatherData, setWeatherData] = useState(null);
  const [detailsStationId, setDetailsStationId] = useState( null );

  const getWeatherData = async () => {
    let response = await axios.get(`https://danepubliczne.imgw.pl/api/data/synop`);
    // console.log(response.data);
    return response;
  }

  useEffect( () => {
    getWeatherData().then( (res) => {
      setWeatherData(res.data)
    })
    .catch((e) => console.log(e));

    let getWeatherDataInterval = setInterval( () => {
      getWeatherData().then( (res) => {
        setWeatherData(res.data)
      })
      .catch((e) => console.log(e));
    }, 100000) //5min - 300000 s
    
    return( () => clearInterval(getWeatherDataInterval))
  }, [])


  const showDetailsHandler = ( id ) => {
    // console.log(id);
    setDetailsStationId( id );
  }



  return (
    <div className="weather-cast">
      <WeatherDetails data={weatherData} detailsId={detailsStationId} clickHandler={showDetailsHandler}/>
      <WeatherList data={weatherData} clickHandler={showDetailsHandler} />
    </div>
  );
}

export default WeatherCast;
