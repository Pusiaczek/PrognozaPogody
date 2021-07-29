import WeatherStation from './WeatherStation';

import './WeatherList.css';


function WeatherList(props) {
    if (props.data == null) {
        return (<h2>będzie dobrze!</h2>)
    }

    return(
        <div className='weather-list'>
            {props.data.map( (station, index) => 
                <WeatherStation 
                    key={index} 
                    data={station} 
                    onClickHandler={() => props.clickHandler(station.id_stacji)}
                />
            )}
        </div>
    )
}

export default WeatherList;