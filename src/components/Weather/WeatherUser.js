const lat = '-28.26';
const long = '-52.42';
const apiKey = '4bee642f8c86df52bd2410efe3ad17b7';
export const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
const UF = 43;
export const urlState = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}`;

