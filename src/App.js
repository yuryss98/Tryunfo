import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    primeiroAtributo: '',
    segundoAtributo: '',
    terceiroAtributo: '',
    imagemDaCarta: '',
    raridadeCarta: 'normal',
    cardTrunfo: false,
    saveButton: '',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      imagemDaCarta,
      raridadeCarta,
      cardTrunfo,
      saveButton,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ primeiroAtributo }
          cardAttr2={ segundoAtributo }
          cardAttr3={ terceiroAtributo }
          cardImage={ imagemDaCarta }
          cardRare={ raridadeCarta }
          cardTrunfo={ cardTrunfo }
          hasTrunfo=""
          isSaveButtonDisabled=""
          onInputChange={ this.handleChange }
          onSaveButtonClick=""
        />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ primeiroAtributo }
          cardAttr2={ segundoAtributo }
          cardAttr3={ terceiroAtributo }
          cardImage={ imagemDaCarta }
          cardRare={ raridadeCarta }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
