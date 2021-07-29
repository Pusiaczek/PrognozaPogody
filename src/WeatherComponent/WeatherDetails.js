import './WeatherDetails.css';

function WeatherDetails(props) {
    if (!props.detailsId) {
        return (null)
    }

    const stationDetails = props.data.find( (item) => item.id_stacji === props.detailsId )


    return(
        <div className='weather-details'>
            <div className='weather-details__inner'>
                <span 
                    className='weather-details__close'
                    onClick={() => props.clickHandler( null )}>
                    X
                </span>
                <p>Nazwa stacji: {stationDetails.stacja}</p>
                <p>Data pomiaru: {stationDetails.data_pomiaru}</p>
                <p>Temperatura: {stationDetails.temperatura}</p>
                <p>Prędkość wiatru: {stationDetails.predkosc_wiatru}</p>
                <p>Kierunek wiatru: {stationDetails.kierunek_wiatru}</p>
                <p>Wilgotność względna: {stationDetails.wilgotnosc_wzgledna}</p>
                <p>Suma opadu: {stationDetails.suma_opadu}</p>
                <p>Ciśnienie: {stationDetails.cisnienie}</p>
                
            </div>
        </div>
    )
}
export default WeatherDetails;

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