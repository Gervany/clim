import { useState } from "react"

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)

    return (
        <article className="card__global">
            <h1 className="card__titleApp">Weather App</h1>
            <h2 className="card__name">{weather?.name}, {weather?.sys.country}</h2>
            <div className="card__icon__info">
                <div className="card__icon">
                    <img
                        src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                        alt=""
                    />                   
                </div>
                <section className="card__info">
                    <h3 className="card__descrip">"{weather?.weather[0].description}"</h3>
                    <ul className="card__list">
                        <li><span>Wind Speed: </span><span>{weather?.wind.speed} m/s</span></li>
                        <li><span>Clouds: </span><span>{weather?.clouds.all} %</span></li>
                        <li><span>Pressure: </span><span>{weather?.main.pressure} hPa</span></li>
                    </ul>
                </section>
            </div>
            <h2 className="card__temp">{isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}</h2>         
            <button className="card__button" onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>        
        </article>
    )
}

export default WeatherCard