import styled from 'styled-components';
import defs from './defs';

const AppB = styled.div`
  width: 69em;
  height: 40em;
  display: grid;
  border-radius: 15px;
  grid-template-columns: 0.6fr 1fr;
  background: rgba(230,39,208,1);
  background: -moz-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(230,39,208,1)), color-stop(96%, rgba(59,121,245,1)), color-stop(99%, rgba(59,121,245,1)));
  background: -webkit-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
  background: -o-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
  background: -ms-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
  background: linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e627d0', endColorstr='#3b79f5', GradientType=1 );

`;

const Con = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
`;

const Side = styled.div`
  width: inherit;
  height: 30em;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export {AppB, Con, Side};