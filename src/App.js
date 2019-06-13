import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import {MOCK} from './Mock';


class App extends Component {
  render() {
    return (
     <Card>
       <CardImg top width="100%" src={MOCK[0].picture} alt="Card image cap"></CardImg>
         <CardBody>
            <CardTitle>{MOCK[0].name}</CardTitle>
            <CardText>{MOCK[0].description}</CardText>
         </CardBody>
       
     </Card>
    );
  }
}
export default App;
