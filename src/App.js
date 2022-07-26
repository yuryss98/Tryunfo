import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    primeiroAtributo: 0,
    segundoAtributo: 0,
    terceiroAtributo: 0,
    imagemDaCarta: '',
    raridadeCarta: 'normal',
    cardTrunfo: false,
    saveButton: true,
  }

  btnDisabledOrEnabled = () => {
    const arr = Object.entries(this.state);
    const naoBooleanos = arr.filter((element) => typeof element[1] === 'string');
    return naoBooleanos.every((element) => element[1].length > 0);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        primeiroAtributo,
        segundoAtributo,
        terceiroAtributo,
      } = this.state;
      const num = 90;
      const primeiro = Number(primeiroAtributo) >= 0 && Number(primeiroAtributo) <= num;
      const segundo = Number(segundoAtributo) >= 0 && Number(segundoAtributo) <= num;
      const terceiro = Number(terceiroAtributo) >= 0 && Number(terceiroAtributo) <= num;
      const maxNum = 210;
      const sum = Number(primeiroAtributo)
      + Number(segundoAtributo) + Number(terceiroAtributo);
      const retorno = this.btnDisabledOrEnabled();
      if (primeiro && segundo && terceiro) {
        if (sum <= maxNum) {
          if (retorno) {
            this.setState({
              saveButton: false,
            });
          } else {
            this.setState({
              saveButton: true,
            });
          }
        } else {
          this.setState({
            saveButton: true,
          });
        }
      } else {
        this.setState({
          saveButton: true,
        });
      }
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
          isSaveButtonDisabled={ saveButton }
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
