import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    IconContainer,
    LocaleContainer,
    LocaleSpan,
    WeatherLocaleContainer,
    WeatherHeading,
    WeatherContainer,
} from './Weather.style';
import Cloud from '../../assets/icons/cloud.svg';
import { urlWeather, urlState } from './WeatherUser';


export const Weather = () => {  
    const [weather, setWeather] = useState({
        city: '--',
        state: '--',
        temperature: '--',
    });

    useEffect(() => {
        const timer = setInterval(() => {
            axios.all([axios.get(urlWeather), axios.get(urlState)]).then(
                axios.spread((weather, state) => {
                    setWeather({
                        city: weather.data.name,
                        state: state.data.sigla,
                        temperature: (weather.data.main.temp).toFixed(0),
                    });
                })
            );
        }, 10000);
        return () => clearInterval(timer);
    });
    return (
            <WeatherLocaleContainer>
                <LocaleContainer>
                    <LocaleSpan>
                        {weather.city} - {weather.state}{' '}
                    </LocaleSpan>
                </LocaleContainer>

                <WeatherContainer>
                    <IconContainer>
                        <img src={Cloud} alt='Cloud icon' />
                    </IconContainer>
                    <WeatherHeading>
                        {weather ? weather.temperature : '--'}º
                    </WeatherHeading>
                </WeatherContainer>
            </WeatherLocaleContainer>
    );
};
