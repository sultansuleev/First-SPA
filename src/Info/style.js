import styled, {keyframes} from 'styled-components';
import defs from '../defs';

const anima = keyframes`
  0%{
    transform: scale(0.97);

  } 
  50% {
    transform: scale(1.03);

  }
  100% {
    transform: scale(0.97);

  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 15px 15px 0;
  transition: 1s ease-in-out;
  user-select: none

  & p {
    color: white;
    font-family: ${defs.fonts.primary_font};
    font-size: 25px;
    margin: 0;
    text-align: center;
  }

  & img {
    filter: invert(1);
    user-select: none;
  }
`;

const Title = styled.p`
  padding-top: 1em;
  text-align: center;
  margin-bottom: 0;
  font-family: ${defs.fonts.secondary_font};
`;

const Weather = styled.div`
  width: 100%;
  height: 13em;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  & p, img {
    margin: auto;
    width: 10em;
  } & img {
    transition: 2s ease-in;
    animation: ${anima} 2.3s infinite;
  }
`;

const Error = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Br = styled.div`
  display: flex;
  width: 85%;
  height: 5px;
  background-color: white;
  margin: 1em auto;
  border-radius: 30px;
  transition: 1s ease;
`;

const Minor = styled.div`
  display: grid;
  width: 85%;
  height: 100%;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; 
  grid-column-gap: 2em;
`;

const Minorin = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 2em;
  margin: auto;
  & p {
    text-align: start;
    font-size: 18px;
  }
  & img {
    margin: auto;
    width: 5em;
  }
`;

export {Container, Title, Weather, Error, Br, Minor, Minorin};