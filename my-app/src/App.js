import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Label from './components/label/Label';
import Button from './components/button/Button';
import LinkButton from './components/linkButton/LinkButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Label title="regular" >
            Bem-vindo ao React
        </Label>
        <Button  onClink >
          Salvar
        </Button>
      <LinkButton>Editar</LinkButton>
      </div>
    );
  }
}

export default App;
