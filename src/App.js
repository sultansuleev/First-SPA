import React, { Component } from 'react';
import axios from 'axios';
import Info from './Info/index';
import Forma from './Form/index';
import Weather from './Weather/index';
import {AppB, Con, Side} from './style';

const API_KEY = "137121e2a27e1dfeff285b75c6a74873";

export default class App extends Component {
  state = {
    from: undefined,
    to: undefined,
    temp: undefined,
    weather: undefined,
    ico: undefined,
    wind: undefined,
    list: [],
  }

  forecast = async (city) => {
    //e.preventDefault();

    if(city){
      const dataALL = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await dataALL.data;
      //console.log(data);
    
      const date = () => {
        var date = new Date();

        var years = date.getFullYear();
        var months = date.getMonth() + 1;

        var day = date.getDate();
        
        
        var hours = date. getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        return(years + "-" + (months < 10 ? "0"+ months : months) + "-" + (day< 10 ? "0"+ day : day) + " " + (hours < 10 ? "0"+ hours : hours) 
        + ":" + (minutes < 10 ? "0"+ minutes : minutes) + ":" + (seconds < 10 ? "0"+ seconds : seconds));

      }

      var myDate = date().toString();


      var l = [];

      sort(data.list, myDate);

      function sort (dt, _date) {
        for(var k = 0; k < dt.length; k++){
          if(dt[k].dt_txt >= _date){
            for(var i = 0; i <= 3; i++){
              l.push(dt[k+i]);
            } break;
          } else {
            continue;
          }
        }}

      this.setState({
        list: l,
      });
    } else {
        this.setState({
          index: [],
          from: undefined,
          to: undefined,
          temp: undefined,
          weather: undefined,
          ico: undefined,
          humidity: undefined,
          wind: undefined,
          list: [],
        });
      }

      
  }
  render() {
    return (
      <AppB>
        <Con>
          <Forma Func={this.props.func} />
          <Side>
            {this.state.list.map((ind, index) => {
                  return(<Weather  ind={ind} key = {index} city={this.props.GRcity} />);
            })}
         </Side>
        </Con>
        <Info 
          weather={this.props.GRweather} 
          temp={this.props.GRtemp}
          city={this.props.GRcity}
          country={this.props.GRcountry}
          humidity={this.props.GRhumidity}
          sunset={this.props.GRsunset}
          ico={this.props.GRico}
          lat={this.props.GRlat}
          lon={this.props.GRlon}
          wind={this.props.GRwind}
          errorMsg={this.props.errorMsg}
          errorCod={this.props.errorCod}
        />
      </AppB>
    );
  }
}
