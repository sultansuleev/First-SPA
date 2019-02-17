import React, {Component} from 'react';
import {Container, ICO, Cons, Dat, Gsf} from './style';

class Weather extends Component{

  render(){
    return(
      <Container>  
        {this.props.city && 
        <Cons>
          <Dat>
            <p>{this.props.ind.dt_txt[5]+this.props.ind.dt_txt[6] + "/" + this.props.ind.dt_txt[8] + this.props.ind.dt_txt[9]}</p>
            <p>{this.props.ind.dt_txt[11]+ this.props.ind.dt_txt[12] + ":" + this.props.ind.dt_txt[14] + this.props.ind.dt_txt[15]}</p>
          </Dat>
          <Gsf>
            <p>{Math.round(this.props.ind.main.temp)}°C</p>
          </Gsf>
          <ICO>
            <img src={"./assets/img/icons/" + this.props.ind.weather[0].icon + ".png"} alt="Icon"/>
            <p>{this.props.ind.weather[0].main}</p>
          </ICO>
        </Cons>
      } 
        <p>{this.props.error}</p>
        
      </Container>
    );
    }
}

export default Weather;