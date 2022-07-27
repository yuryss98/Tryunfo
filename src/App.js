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
    cartas: [],
  }

  testaPreenchimentoDosCampos = () => {
    const {
      nameInput,
      descriptionInput,
      imagemDaCarta,
      raridadeCarta,
    } = this.state;
    if (!nameInput.length || !descriptionInput.length) return false;
    if (!imagemDaCarta.length || !raridadeCarta.length) return false;
    return true;
  }

  testaNumerosDosCampos = (param1, param2, param3) => {
    const maxPointsAttr = 90;
    const att1 = param1 >= 0 && param1 <= maxPointsAttr;
    const att2 = param2 >= 0 && param2 <= maxPointsAttr;
    const att3 = param3 >= 0 && param3 <= maxPointsAttr;

    if (att1 && att2 && att3) {
      const sumParametros = param1 + param2 + param3;
      const sumMaxAttr = 210;
      if (sumParametros <= sumMaxAttr) {
        return true;
      }
    }
    return false;
  }

  addCartaAoBaralho = () => {
    const {
      nameInput,
      descriptionInput,
      primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      imagemDaCarta,
      raridadeCarta,
      cardTrunfo,
      cartas,
    } = this.state;
    if (cardTrunfo) {
      const obj = {
        nomeDaCarta: nameInput,
        descricao: descriptionInput,
        attr1: primeiroAtributo,
        attr2: segundoAtributo,
        attr3: terceiroAtributo,
        image: imagemDaCarta,
        raridade: raridadeCarta,
        superTrunfo: 'Super Trunfo',
      };
      cartas.push(obj);
    } else {
      const obj = {
        nomeDaCarta: nameInput,
        descricao: descriptionInput,
        attr1: primeiroAtributo,
        attr2: segundoAtributo,
        attr3: terceiroAtributo,
        image: imagemDaCarta,
        raridade: raridadeCarta,
      };
      cartas.push(obj);
    }
    this.setState(({
      nameInput: '',
      descriptionInput: '',
      imagemDaCarta: '',
      primeiroAtributo: 0,
      segundoAtributo: 0,
      terceiroAtributo: 0,
      raridadeCarta: 'normal',
      saveButton: true,
    }));
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
      const primeiro = Number(primeiroAtributo);
      const segundo = Number(segundoAtributo);
      const terceiro = Number(terceiroAtributo);
      const numeros = this.testaNumerosDosCampos(primeiro, segundo, terceiro);
      if (numeros) {
        const retorno = this.testaPreenchimentoDosCampos();
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
    });
  }

  removerCarta = ({ target }) => {
    const paiId = target.parentElement.id;
    const { cartas } = this.state;
    cartas.splice(paiId, 1);
    this.setState({
      cartas,
    }, () => {
      const vamosssssss = cartas.every((carta) => carta.superTrunfo === 'Super Trunfo');
      console.log(vamosssssss);
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
      cartas,
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
          hasTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ saveButton }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.addCartaAoBaralho }
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {cartas.map((carta, index) => (
          <div key={ { index } } id={ index }>
            <Card
              cardName={ carta.nomeDaCarta }
              cardDescription={ carta.descricao }
              cardAttr1={ carta.attr1 }
              cardAttr2={ carta.attr2 }
              cardAttr3={ carta.attr3 }
              cardImage={ carta.image }
              cardRare={ carta.raridade }
              cardTrunfo={ cardTrunfo }
            />
            <button
              type="button"
              onClick={ this.removerCarta }
              data-testid="delete-button"
            >
              Excluir

            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
