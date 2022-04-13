import styled from 'styled-components';
const colorWeather = '#222222';


export const WeatherLocaleContainer = styled.div`
    width: calc(100vw / 3);
    margin: 25px 40px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const LocaleContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const LocaleSpan = styled.span`
    font-family: 'Mark Pro';
    color: ${colorWeather};
    font-size: 0.875em;
    margin-top:  2px;
`;

export const IconContainer = styled.div`
    width: 34px;
    height: 34px;
`;

export const WeatherContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 10px;
`;
export const WeatherHeading = styled.h2`
    font-family: 'Mark Pro Bold';
    font-weight: 700;
    color: ${colorWeather};
    font-size: 3em;
`;
