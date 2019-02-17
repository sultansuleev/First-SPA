import styled from 'styled-components';
import defs from '../defs';

const Form = styled.form`
  padding: 1em 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 0;
  outline: none;
  width: 19em;
  border-radius: 40px;
  height: 2.6em;
  font-size: 20px;
  font-family: ${defs.fonts.secondary_font};
  margin-bottom: 1em;
  text-align: center;
  transition: 1s;
   :hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font-size: 16px;
  width: 17em;
  height: 3.4em;
  border-radius: 36px;
  transition: 1.5s;
  user-select: none;
  background-color: #3b79f5;
  color: #fff;
   :hover {
    
    transform: scale(0.96);
  }
  :active{
    transition: 0s;
    background: #e6ae16;
  }
`;

export {Form, Input, Button};