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
height: auto;
margin-bottom: auto;
  & p {
    color: #fff;
    text-align: center;
    font-family: ${defs.fonts.secondary_font};
  }
  & img{
    filter: invert(1);
    user-select: none;
    transition: 2s ease-in;
    animation: ${anima} 2.3s infinite;
    margin: auto;
    width: 4em;
  }
`;

const Cons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 6em;
`;

const ICO = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: inherit;
  & p {
    margin: 0;
    font-size: 26px;
    font-family: ${defs.fonts.secondary_font}
  }
`;

const Dat = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
  height: auto;
  justify-content: center;
  & > p {
    margin: 0;
    font-size: 26px;
  }
`;

const Gsf = styled.div`
display: flex;
align-items: center;
justify-content: center;
  & > p {
    margin: 0;
    font-size: 50px;
  }
`;

export {Container, Cons, ICO, Dat, Gsf};