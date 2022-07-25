import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form>
        <Input />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
