import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">
        <header>
          <h1>Adicionar nova carta</h1>
        </header>
        <div>
          <label htmlFor="nomeDaCarta">
            Nome da carta
            <div>
              <input
                className="test"
                type="text"
                name="nameInput"
                id="nomeDaCarta"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </div>

          </label>
          <label htmlFor="descricaoDaCarta">
            Descrição da carta
            <div>
              <input
                className="test"
                type="text"
                name="descriptionInput"
                id="descricaoDaCarta"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </div>
          </label>

          <label htmlFor="primeiroAtributo">
            Atributo 1
            <div>
              <input
                className="test"
                type="number"
                name="primeiroAtributo"
                id="primeiroAtributo"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </div>
          </label>

          <label htmlFor="segundoAtributo">
            Atributo 2
            <div>
              <input
                className="test"
                type="number"
                name="segundoAtributo"
                id="segundoAtributo"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </div>
          </label>

          <label htmlFor="terceiroAtributo">
            Atributo 3
            <div>
              <input
                className="test"
                type="number"
                name="terceiroAtributo"
                id="terceiroAtributo"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </div>

          </label>

          <label htmlFor="imagemDaCarta">
            Imagem
            <div>
              <input
                className="test"
                type="text"
                name="imagemDaCarta"
                id="imagemDaCarta"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>
        <div className="raridade">
          <label htmlFor="raridadeCarta">
            <h2>Raridade</h2>
            <div>
              <select
                className="select"
                name="raridadeCarta"
                id="raridadeCarta"
                data-testid="rare-input"
                value={ cardRare }
                onChange={ onInputChange }
              >
                <option value="normal">normal</option>
                <option value="raro">raro</option>
                <option value="muito raro">muito raro</option>
              </select>
            </div>
          </label>
        </div>

        <div>
          <label htmlFor="superTrunfo">
            Super trunfo
            { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
              type="checkbox"
              name="cardTrunfo"
              id="superTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            /> }
          </label>
        </div>

        <div>
          <button
            name="saveButton"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>

        </div>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
