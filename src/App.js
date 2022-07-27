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
    hasTrunfo: false,
    cartas: [],
    cartasFiltradas: [],
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
      cartasFiltradas,
    } = this.state;

    const carta = {
      nameInput,
      descriptionInput,
      primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      imagemDaCarta,
      raridadeCarta,
    };

    if (cardTrunfo) {
      carta.superTrunfo = 'Super trunfo';
      this.setState({
        hasTrunfo: true,
      });
    }

    cartas.push(carta);
    cartasFiltradas.push(carta);

    this.setState(({
      nameInput: '',
      descriptionInput: '',
      imagemDaCarta: '',
      primeiroAtributo: 0,
      segundoAtributo: 0,
      terceiroAtributo: 0,
      raridadeCarta: 'normal',
      saveButton: true,
      cardTrunfo: false,
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
    console.log(paiId);
    const { cartas, cartasFiltradas } = this.state;
    if (cartasFiltradas[paiId].superTrunfo === 'Super trunfo') {
      this.setState({
        hasTrunfo: false,
      });
    }
    cartas.splice(paiId, 1);
    cartasFiltradas.splice(paiId, 1);
    this.setState({
      cartas,
      cartasFiltradas,
    });
  }

  trueOrFalse = (param) => {
    if (param.superTrunfo === 'Super trunfo') {
      return true;
    }
    return false;
  };

  buscarCarta = ({ target }) => {
    const { cartas } = this.state;
    const filtrar = cartas.filter((carta) => carta.nameInput.includes(target.value));
    this.setState({
      cartasFiltradas: filtrar,
    });
  }

  raridade = ({ target }) => {
    const { cartas } = this.state;
    if (target.value !== 'todas') {
      const filtrar = cartas.filter((carta) => carta.raridadeCarta === target.value);
      this.setState({
        cartasFiltradas: filtrar,
      });
    } else {
      this.setState({
        cartasFiltradas: cartas,
      });
    }
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
      hasTrunfo,
      saveButton,
      cartas,
      cartasFiltradas,
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
          hasTrunfo={ hasTrunfo }
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
        <div className="buscarCarta">
          <input
            type="text"
            data-testid="name-filter"
            onChange={ this.buscarCarta }
          />
          <select data-testid="rare-filter" onChange={ this.raridade }>
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        {cartasFiltradas.map((carta, index) => {
          const retorno = this.trueOrFalse(carta);
          return (
            <div key={ { index } } id={ index }>
              <Card
                cardName={ carta.nameInput }
                cardDescription={ carta.descriptionInput }
                cardAttr1={ carta.primeiroAtributo }
                cardAttr2={ carta.segundoAtributo }
                cardAttr3={ carta.terceiroAtributo }
                cardImage={ carta.imagemDaCarta }
                cardRare={ carta.raridadeCarta }
                cardTrunfo={ retorno }
              />
              <button
                type="button"
                onClick={ this.removerCarta }
                data-testid="delete-button"
              >
                Excluir

              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
