import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import buscarPorRaridade from './helpers/filterRaridade';
import './app.css';

const SUPER = 'Super trunfo';

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
    disabledInputs: false,
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
      carta.superTrunfo = SUPER;
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((estadoAnterior) => ({
      nameInput: '',
      descriptionInput: '',
      imagemDaCarta: '',
      primeiroAtributo: 0,
      segundoAtributo: 0,
      terceiroAtributo: 0,
      raridadeCarta: 'normal',
      saveButton: true,
      cardTrunfo: false,
      cartas: [...estadoAnterior.cartas, carta],
      cartasFiltradas: [...estadoAnterior.cartasFiltradas, carta],
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
        return this.setState({
          saveButton: !retorno,
        });
      }
      return this.setState({
        saveButton: true,
      });
    });
  }

  removerCarta = ({ target }) => {
    const paiId = target.parentElement.id;
    const { cartas, cartasFiltradas } = this.state;
    if (cartasFiltradas[paiId].superTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    cartas.splice(paiId, 1);
    cartasFiltradas.splice(paiId, 1);
    this.setState({
      cartas,
      cartasFiltradas,
    });
  }

  trueOrFalse = (param) => param.superTrunfo === SUPER;

  buscarPorNome = ({ target }) => {
    const { cartas } = this.state;
    const filtrar = cartas.filter((carta) => carta.nameInput.includes(target.value));
    this.setState({
      cartasFiltradas: filtrar,
    });
  }

  buscarPorRaridade = (event) => {
    const { cartas } = this.state;
    this.setState({
      cartasFiltradas: buscarPorRaridade(event, cartas),
    });
  }

  desabilitaOuHabilitaCamposFiltros = () => {
    const { disabledInputs } = this.state;
    if (disabledInputs) {
      const { cartas } = this.state;
      this.setState({
        disabledInputs: false,
        cartasFiltradas: cartas,
      });
    } else {
      const { cartas } = this.state;
      const filtrar = cartas.filter((carta) => carta.superTrunfo === SUPER);
      this.setState({
        disabledInputs: true,
        cartasFiltradas: filtrar,
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
      cartasFiltradas,
      disabledInputs,
    } = this.state;
    return (
      <div>
        <header className="title">
          <h1>Tryunfo</h1>
        </header>
        <main className="container">
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
        </main>

        <section className="lista">
          <Filter
            buscarNome={ this.buscarPorNome }
            buscarPorRaridade={ this.buscarPorRaridade }
            desabilitar={ disabledInputs }
            onChangeInputs={ this.desabilitaOuHabilitaCamposFiltros }
          />
          {cartasFiltradas.map((carta, index) => {
            const retorno = this.trueOrFalse(carta);
            return (
              <div key={ index } id={ index }>
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
        </section>

      </div>
    );
  }
}
export default App;
