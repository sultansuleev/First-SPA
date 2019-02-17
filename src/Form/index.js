import React, {Component} from 'react';
import {Form, Input, Button} from './style';


class Forma extends Component{
  render(){
    return(
      <Form autoComplete="off" onSubmit={(e) => this.props.Func(e)}>   
        <Input name="city" placeholder="City" />
        <Button>ENTER</Button>
      </Form>
    );
  }
}

export default Forma;