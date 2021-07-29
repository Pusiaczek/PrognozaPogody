import './WeatherStation.css'


function WeatherStation(props) {


    return(
        <div className='weather-station' onClick={props.onClickHandler}>
            <h2>{props.data.stacja}</h2>
            <p className='weather-station__desc'>Temperatura: <span className='weather-station__data'>{props.data.temperatura}</span>°C</p>
            <p className='weather-station__desc'>Wilogtność względna: <span className='weather-station__data'>{props.data.wilgotnosc_wzgledna}</span>%</p>
            <p className='weather-station__desc'>Cisnienie: <span className='weather-station__data'>{props.data.cisnienie}</span>hPa</p>
        </div>
    )
}

export default WeatherStation;


// 0:
// cisnienie: "1010.7"
// data_pomiaru: "2021-07-28"
// godzina_pomiaru: "14"
// id_stacji: "12295"
// kierunek_wiatru: "210"
// predkosc_wiatru: "2"
// stacja: "Białystok"
// suma_opadu: "0.01"
// temperatura: "29.3"
// wilgotnosc_wzgledna: "45.0"