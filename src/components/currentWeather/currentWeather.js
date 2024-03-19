import React from 'react'
import './currentWeather.css'
const CurrentWeather = ({ data }) => {
    return (
        <>
            <h3 className='h3'>Today</h3>
            <div className='card'>
                <div className="top-card">
                    <div className="left-inner">
                        <div className="city">
                            {data.name}
                        </div>
                        <div className="description">
                            {data.weather[0].description}
                        </div>

                    </div>
                    <div className="right-inner">
                        <img src={`icons/${data.weather[0].icon}.png`} alt="" />
                    </div>
                </div>
                <div className="bottom-card">
                    <div className="left-inner">
                        <p>
                            {Math.round(data.main.temp)} &deg;C
                        </p>
                    </div>
                    <div className="right-inner">
                        <h3>Details</h3>
                        <div className="row">
                            <div className="label">Feels like</div>
                            <div className="value">{Math.round(data.main.feels_like)}&deg; C</div>
                        </div>
                        <div className="row">
                            <div className="label">Humidity</div>
                            <div className="value">{data.main.humidity} %</div>
                        </div>
                        <div className="row">
                            <div className="label">Wind</div>
                            <div className="value">{data.wind.speed} m/s</div>
                        </div>
                        <div className="row">
                            <div className="label">Pressure</div>
                            <div className="value">{data.main.pressure} hpa</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentWeather