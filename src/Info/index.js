import React, {Component} from 'react';
import {Container, Title, Weather, Error, Br, Minor, Minorin} from './style';

export default class Info extends Component{
  render(){
    return(
      <Container>   
        {this.props.city ? 
        <div>
          <Title>{this.props.city}, {this.props.country}</Title>
            <Weather>
                <img src={"./assets/img/icons/" + this.props.ico + ".png"} alt="Icons made by Good Ware from www.flaticon.com"/>
                <p>{this.props.weather}, {Math.round(this.props.temp)}°C/{Math.round((this.props.temp*9/5) + 32)}°F</p>
            </Weather>
          <Br/>
          <Minor>
            <Minorin>
              <img src="./assets/img/icons/sunset.png" alt="Icons made by Good Ware from www.flaticon.com"/>
              <p>Sunset: {this.props.sunset}</p>
            </Minorin>
            <Minorin>
              <img src="./assets/img/icons/umbrella.png" alt="Icons made by Good Ware from www.flaticon.com"/>
              <p>Humidity: {this.props.humidity}%</p>
            </Minorin>
            <Minorin>
              <img src="./assets/img/icons/coordinates.png" alt="Icons made by Good Ware from www.flaticon.com"/>
              <p>Coordinates: {this.props.lat}'lat,{this.props.lon}'lon</p>
            </Minorin>
            <Minorin>
              <img src="./assets/img/icons/wind.png" alt="Icons made by Good Ware from www.flaticon.com"/>
              <p>Wind: {this.props.wind}mps</p>
            </Minorin>
          </Minor>
        </div> : 
        <Error>
          <p>{this.props.errorMsg !== undefined ? this.props.errorCod + "SSS" + this.props.errorMsg : "Enter city"}</p>
        </Error>
        }
      </Container>
    );
  }
}

