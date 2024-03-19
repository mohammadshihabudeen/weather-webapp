import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './forecast.css'
const Forecast = ({ data }) => {
    const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const DayOfTheWeek = new Date().getDay()
    const days = week_days.slice(DayOfTheWeek, 7).concat(week_days.slice(0, DayOfTheWeek))
    console.log(data)
    return (
        <Accordion allowZeroExpanded>
            <h3 className='h3'>Daily</h3>
            {data.daily.slice(1, 8).map((data, idx) => {
                return (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading >
                            <AccordionItemButton>
                                <div className="forecast-row">
                                    <div className="row-right">
                                        <img src={`icons/${data.weather[0].icon}.png`} width={40} alt="" />
                                        <p>{days[idx]}</p>
                                    </div>
                                    <div className="row-left">
                                        <p className="description">
                                            {data.weather[0].description}
                                        </p>
                                        <p className="min-max">
                                            {Math.round(data.temp.min)}&deg;C /
                                            {Math.round(data.temp.max)}&deg;C
                                        </p>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="details">
                                <div className="label-left">
                                    <div className="row">
                                        <p>Pressure</p>
                                        <p>{data.pressure} hpa</p>
                                    </div>
                                    <div className="row">
                                        <p>Cloud</p>
                                        <p>{data.clouds} %</p>
                                    </div>
                                    <div className="row">
                                        <p>UV</p>
                                        <p>{data.uvi}</p>
                                    </div>
                                </div>
                                <div className="label-right">
                                    <div className="row">
                                        <p>Humidity</p>
                                        <p>{data.humidity} %</p>
                                    </div>
                                    <div className="row">
                                        <p>Wind Speed</p>
                                        <p>{data.wind_speed} m/s</p>
                                    </div>
                                    <div className="row">
                                        <p>Feels Like</p>
                                        <p>{Math.round(data.feels_like.day)}&deg;C</p>
                                    </div>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                )
            })
            }
        </Accordion>
    )
}

export default Forecast