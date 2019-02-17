import React, {Component} from 'react';
import App from './App';
import axios from 'axios';

const API_KEY = "137121e2a27e1dfeff285b75c6a74873";

export default class Grand extends Component {
  state = {
    dataALL: [],
    weather: undefined,
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    sunset: undefined,
    latitude: undefined,
    longitude: undefined,
    ico: undefined,
    wind: undefined,
    error: [],
    errorCod: undefined,
    errorMsg: undefined,
  }

  func = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city) {
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res =>{
        this.setState({dataALL: res});
      }).catch(error => {
        console.log(error.response);
        this.setState({
          errorMsg: error.response.statusText,
          errorCod: error.response.status,
         });
        })

      console.log(this.state.errorMsg);
      console.log(this.state.dataALL);

      const data = this.state.dataALL.data;
      //console.log(this.state.dataALL);
      
      const time = ms =>{
        var date = new Date(ms*1000);
        var hours = date.getHours();

        var minutes = "0" + date.getMinutes();

        var seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      }
      var sunset_date = time(data.sys.sunset);

      this.refs.cast.forecast(city);

      this.setState({
        weather: data.weather[0].main,
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        sunset: sunset_date,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        wind: data.wind.speed,
        ico: data.weather[0].icon,
      });
      } else {
        this.setState({
          weather: undefined,
          temp: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          sunset: undefined,
          latitude: undefined,
          longitude: undefined,
          wind: undefined,
          ico: undefined,
          errorMsg: undefined, 
          errorCod: undefined,
        });
      }
  }


  render(){
    return(
        <>
          <App ref="cast"
            GRweather={this.state.weather}
            GRtemp={this.state.temp}
            GRcity={this.state.city}
            GRcountry={this.state.country}
            GRhumidity={this.state.humidity}
            GRsunset={this.state.sunset}
            GRico={this.state.ico}
            GRlat={this.state.latitude}
            GRlon={this.state.longitude}
            GRwind={this.state.wind}
            errorCod={this.state.errorCod}
            errorMsg={this.state.errorMsg}
            func={this.func}
          />
        </>
    );
  }
}