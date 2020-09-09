import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: "Chisnau",
      currentWeather: {},
      forecast: []
    }
  }
  componentDidMount(){
    // `${process.env.}`
    const REACT_APP_API_URL='https://api.openweathermap.org/data/2.5';
    const REACT_APP_API_KEY ='';
    const REACT_APP_ICON_URL='https://openweathermap.org/img/w';
    const weatherUrl = `${REACT_APP_API_URL}/wheater/?q=${this.state.city}&units=metric&APPID=${REACT_APP_API_KEY}`;
    const forecastUrl = `${REACT_APP_API_URL}/forecast/?q=${this.state.city}&units=metric&APPID=${REACT_APP_API_KEY}`;

    featch(weatherUrl)
    .then(weather => weather.json())
    .then(weather => {
      const mappedData = mapDataToWeatherInterface(weather);
      this.setState({currentWeater: mappedData});
    });

    featch(forecastUrl)
    .then(forecast => forecast.json())
    .then(result => {
      const forecast = [];
      for(let i = 0; i< result.list.length; i+=8){
        forecast.push(this.mapDataToWeatherInterface(result.list[i+ 4]));
      }
      const mappedData = mapDataToWeatherInterface(weather);
      this.setState({forecast: forecast});
    });
  }

  mapDataToWeatherInterface = data => {
    const mapped = {
      city: data.name,
      country: data.sys.country,
      data: data.dt * 1000,
      humidity: data.main.umidity,
      icon_id: data.weather[0].id,
      image: `${REACT_APP_ICON_URL}${data.weather[0].icon}.png`,
      temperature: data.main.temp,
      description: data.weather[0].description,
      wind_speed: Math.round(data.wind.speed * 3.6),
      condition: data.cod
    }
    if (data.weather[0].icon){
      mapped.icon = data.weather[0].icon;
    }
    if (data.main.temp_min && data.main.temp_max){
      mapped.min = data.main.temp_min;
      mapped.max = data.main.temp_max;
    }
    // remove undefided fields
    Object.keys(mapped). forEach(
      key => mapped[key] === undefined && delete data[key]
    );

    return mapped;
  }

  render() {
    const {currentWeater, forecast}  = this.state;
    
    if(Object.keys(currentWeater).length && Object.keys(forecast).length) {
      return (
        <Container maxWidth="sm">
          <Weather currentWeater={currentWeater} forecast={forecast}/>
        </Container>
      );
    } else {
      return <span>Loading ...</span>
    }
  }
}

export default App;
